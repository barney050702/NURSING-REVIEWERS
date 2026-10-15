/**
 * NURSPHERE - State Management & Local Storage Persistence
 * Tracks PNLE progress, practice results, weak area diagnostics,
 * spaced repetition flashcards, and unfolding clinical case studies.
 */

const STORAGE_KEYS = {
  ANSWERS: 'nursphere_answers_v1',
  BOOKMARKS: 'nursphere_bookmarks_v1',
  FLAGGED: 'nursphere_flagged_v1',
  STATS: 'nursphere_stats_v1',
  THEME: 'nursphere_theme_v1',
  EXAM_HISTORY: 'nursphere_exam_history_v1',
  FLASHCARDS: 'nursphere_flashcards_v1',
  CASE_STUDIES: 'nursphere_case_studies_v1',
  NOTES: 'nursphere_notes_v1'
};

class NursphereState {
  constructor() {
    this.answers = this.load(STORAGE_KEYS.ANSWERS, {});
    this.bookmarks = new Set(this.load(STORAGE_KEYS.BOOKMARKS, []));
    this.flagged = new Set(this.load(STORAGE_KEYS.FLAGGED, []));
    this.examHistory = this.load(STORAGE_KEYS.EXAM_HISTORY, []);
    this.flashcardsState = this.load(STORAGE_KEYS.FLASHCARDS, {});
    this.caseStudiesState = this.load(STORAGE_KEYS.CASE_STUDIES, {});
    this.notes = this.load(STORAGE_KEYS.NOTES, {});
    this.stats = this.load(STORAGE_KEYS.STATS, null);

    if (!this.stats || (this.stats.streakDays === 8 && this.stats.totalAnswered === 109 && Object.keys(this.answers).length === 0)) {
      this.initDefaultStats();
    }
  }

  load(key, defaultValue) {
    try {
      let data = localStorage.getItem(key);
      if (!data && key.startsWith('nursphere_')) {
        const legacyKey = key.replace('nursphere_', 'pasado_');
        data = localStorage.getItem(legacyKey);
      }
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn("Storage load error:", e);
      return defaultValue;
    }
  }

  save(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      if (key.startsWith('nursphere_')) {
        localStorage.setItem(key.replace('nursphere_', 'pasado_'), serialized);
      }
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  initDefaultStats() {
    this.stats = {
      streakDays: 0,
      lastActiveDate: null,
      totalAnswered: 0,
      totalCorrect: 0,
      subjectStats: {
        "NP I": { answered: 0, correct: 0, label: "Community Health Nursing" },
        "NP II": { answered: 0, correct: 0, label: "Maternal and Child Nursing" },
        "NP III": { answered: 0, correct: 0, label: "Medical-Surgical Nursing I" },
        "NP IV": { answered: 0, correct: 0, label: "Medical-Surgical Nursing II" },
        "NP V": { answered: 0, correct: 0, label: "Psychiatric & Mental Health" },
        "Jurisprudence": { answered: 0, correct: 0, label: "Nursing Jurisprudence & Ethics" }
      }
    };
    this.recomputeTotals();
    this.save(STORAGE_KEYS.STATS, this.stats);
  }

  checkStreak() {
    if (!this.stats) this.initDefaultStats();
    const today = new Date().toISOString().split('T')[0];

    if (!this.stats.lastActiveDate) {
      this.stats.streakDays = 1;
      this.stats.lastActiveDate = today;
      this.save(STORAGE_KEYS.STATS, this.stats);
      return this.stats.streakDays;
    }

    if (this.stats.lastActiveDate === today) {
      return this.stats.streakDays;
    }

    const lastDate = new Date(this.stats.lastActiveDate + 'T00:00:00');
    const currDate = new Date(today + 'T00:00:00');
    const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      this.stats.streakDays = (this.stats.streakDays || 0) + 1;
    } else if (diffDays > 1) {
      this.stats.streakDays = 1;
    }
    this.stats.lastActiveDate = today;
    this.save(STORAGE_KEYS.STATS, this.stats);
    return this.stats.streakDays;
  }

  resetQuestion(questionId, area = null) {
    const existing = this.answers[questionId];
    if (!existing) return;

    delete this.answers[questionId];
    this.save(STORAGE_KEYS.ANSWERS, this.answers);

    let targetArea = area;
    if (!targetArea && typeof PNLE_QUESTIONS !== 'undefined' && Array.isArray(PNLE_QUESTIONS)) {
      const found = PNLE_QUESTIONS.find(q => q.id === questionId);
      if (found) targetArea = found.area;
    }

    if (targetArea && this.stats && this.stats.subjectStats && this.stats.subjectStats[targetArea]) {
      const s = this.stats.subjectStats[targetArea];
      s.answered = Math.max(0, s.answered - 1);
      if (existing.isCorrect) {
        s.correct = Math.max(0, s.correct - 1);
      }
      this.recomputeTotals();
      this.save(STORAGE_KEYS.STATS, this.stats);
    }
  }

  resetAll() {
    Object.values(STORAGE_KEYS).forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.warn("Storage removal error:", e);
      }
    });
    this.answers = {};
    this.bookmarks = new Set();
    this.examHistory = [];
    this.flashcardsState = {};
    this.caseStudiesState = {};
    this.notes = {};
    this.initDefaultStats();
  }

  recomputeTotals() {
    let ans = 0;
    let cor = 0;
    Object.values(this.stats.subjectStats).forEach(s => {
      ans += s.answered;
      cor += s.correct;
    });
    this.stats.totalAnswered = ans;
    this.stats.totalCorrect = cor;
  }

  recordAnswer(question, selectedId) {
    const isCorrect = selectedId === question.correctAnswer;
    this.answers[question.id] = {
      selectedId,
      isCorrect,
      timestamp: new Date().toISOString()
    };
    this.save(STORAGE_KEYS.ANSWERS, this.answers);

    const area = question.area;
    if (this.stats.subjectStats[area]) {
      this.stats.subjectStats[area].answered += 1;
      if (isCorrect) {
        this.stats.subjectStats[area].correct += 1;
      }
    }
    this.recomputeTotals();
    this.save(STORAGE_KEYS.STATS, this.stats);

    return isCorrect;
  }

  getAnswer(questionId) {
    return this.answers[questionId] || null;
  }

  toggleBookmark(questionId) {
    if (this.bookmarks.has(questionId)) {
      this.bookmarks.delete(questionId);
    } else {
      this.bookmarks.add(questionId);
    }
    this.save(STORAGE_KEYS.BOOKMARKS, Array.from(this.bookmarks));
    return this.bookmarks.has(questionId);
  }

  isBookmarked(questionId) {
    return this.bookmarks.has(questionId);
  }

  getSubjectScores() {
    const scores = {};
    Object.keys(this.stats.subjectStats).forEach(key => {
      const s = this.stats.subjectStats[key];
      const rate = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;
      scores[key] = {
        ...s,
        percentage: rate,
        isPassing: rate >= 75,
        isDanger: rate < 60
      };
    });
    return scores;
  }

  getOverallAccuracy() {
    if (!this.stats.totalAnswered) return 0;
    return Math.round((this.stats.totalCorrect / this.stats.totalAnswered) * 100);
  }

  getWeakAreas() {
    const scores = this.getSubjectScores();
    const weak = [];
    Object.keys(scores).forEach(area => {
      if (scores[area].percentage < 75) {
        weak.push({
          area,
          label: scores[area].label,
          percentage: scores[area].percentage,
          gap: 75 - scores[area].percentage,
          isDanger: scores[area].percentage < 60
        });
      }
    });
    return weak.sort((a, b) => b.gap - a.gap);
  }

  calculateBoardReadiness() {
    const scores = this.getSubjectScores();
    const subjectList = Object.values(scores);
    const overallAvg = this.getOverallAccuracy();

    const anyBelow60 = subjectList.some(s => s.percentage < 60);
    const below75Count = subjectList.filter(s => s.percentage < 75).length;

    let verdict = "On Track to Pass";
    let statusClass = "status-pass";
    let message = "Your current trajectory exceeds the PRC 75% standard with no subject below 60%.";

    if (overallAvg >= 75 && anyBelow60) {
      verdict = "Conditional Risk";
      statusClass = "status-conditional";
      message = "Your overall average is >= 75%, but one or more subjects are below the statutory 60% minimum (RA 9173 Sec. 15).";
    } else if (overallAvg < 75) {
      verdict = "Needs Focused Reinforcement";
      statusClass = "status-needs-work";
      message = `Your overall accuracy (${overallAvg}%) is below the PRC 75% passing threshold. Focus on your ${below75Count} weak areas.`;
    }

    return {
      overallAvg,
      verdict,
      statusClass,
      message,
      anyBelow60,
      scores
    };
  }

  // --- Flashcards SRS State ---
  getCardState(cardId) {
    return this.flashcardsState[cardId] || { box: 1, reviews: 0, streak: 0 };
  }

  updateCardReview(cardId, rating) {
    // rating: 'again' (reset to box 1), 'hard' (stay in box), 'good' (+1 box), 'easy' (+2 boxes up to 5)
    const current = this.getCardState(cardId);
    let newBox = current.box;

    if (rating === 'again') {
      newBox = 1;
      current.streak = 0;
    } else if (rating === 'hard') {
      newBox = Math.max(1, current.box);
    } else if (rating === 'good') {
      newBox = Math.min(5, current.box + 1);
      current.streak += 1;
    } else if (rating === 'easy') {
      newBox = Math.min(5, current.box + 2);
      current.streak += 2;
    }

    this.flashcardsState[cardId] = {
      box: newBox,
      reviews: current.reviews + 1,
      streak: current.streak,
      lastReviewed: new Date().toISOString()
    };
    this.save(STORAGE_KEYS.FLASHCARDS, this.flashcardsState);
    return this.flashcardsState[cardId];
  }

  getFlashcardStats() {
    const total = FLASHCARD_DECKS.length;
    let mastered = 0; // Box 4 or 5
    let learning = 0; // Box 1 to 3

    FLASHCARD_DECKS.forEach(fc => {
      const state = this.getCardState(fc.id);
      if (state.box >= 4) mastered++;
      else learning++;
    });

    return { total, mastered, learning };
  }

  // --- Case Studies State ---
  recordCaseStudyStage(caseId, stageIndex, isCorrect) {
    if (!this.caseStudiesState[caseId]) {
      this.caseStudiesState[caseId] = { completedStages: {}, score: 0 };
    }
    this.caseStudiesState[caseId].completedStages[stageIndex] = isCorrect;
    this.save(STORAGE_KEYS.CASE_STUDIES, this.caseStudiesState);
  }

  getCaseStudyState(caseId) {
    return this.caseStudiesState[caseId] || { completedStages: {}, score: 0 };
  }

  // --- Per-Question Quick Notes / Annotations ---
  getNote(questionId) {
    return this.notes[questionId] || '';
  }

  saveNote(questionId, text) {
    if (!text || text.trim() === '') {
      delete this.notes[questionId];
    } else {
      this.notes[questionId] = text.trim();
    }
    this.save(STORAGE_KEYS.NOTES, this.notes);
  }

  // --- Leitner SRS Flashcards Due Queue ---
  getDueCards() {
    if (typeof FLASHCARD_DECKS === 'undefined' || !Array.isArray(FLASHCARD_DECKS)) return [];
    const now = Date.now();
    // Box intervals: Box 1: 1 day, Box 2: 2 days, Box 3: 4 days, Box 4: 7 days, Box 5: 14 days
    const intervals = {
      1: 1 * 24 * 60 * 60 * 1000,
      2: 2 * 24 * 60 * 60 * 1000,
      3: 4 * 24 * 60 * 60 * 1000,
      4: 7 * 24 * 60 * 60 * 1000,
      5: 14 * 24 * 60 * 60 * 1000
    };

    return FLASHCARD_DECKS.filter(card => {
      const state = this.getCardState(card.id);
      if (!state.lastReviewed) return true; // Unreviewed card is due immediately
      const lastTime = new Date(state.lastReviewed).getTime();
      const requiredInterval = intervals[state.box] || intervals[1];
      return (now - lastTime) >= requiredInterval;
    });
  }

  // --- Mock Exam History & Trends ---
  recordExamResult(result) {
    const entry = {
      id: 'exam-' + Date.now(),
      date: new Date().toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      score: result.score,
      correct: result.correct,
      total: result.total,
      passed: result.score >= 75,
      breakdown: result.breakdown || {}
    };
    this.examHistory.unshift(entry);
    if (this.examHistory.length > 20) {
      this.examHistory = this.examHistory.slice(0, 20);
    }
    this.save(STORAGE_KEYS.EXAM_HISTORY, this.examHistory);
    return entry;
  }

  getExamHistory() {
    return this.examHistory || [];
  }

  clearExamHistory() {
    this.examHistory = [];
    this.save(STORAGE_KEYS.EXAM_HISTORY, this.examHistory);
  }

  toggleBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
    } else {
      this.bookmarks.add(id);
    }
    this.save(STORAGE_KEYS.BOOKMARKS, Array.from(this.bookmarks));
    return this.bookmarks.has(id);
  }

  isBookmarked(id) {
    return this.bookmarks.has(id);
  }

  toggleFlag(id) {
    if (this.flagged.has(id)) {
      this.flagged.delete(id);
    } else {
      this.flagged.add(id);
    }
    this.save(STORAGE_KEYS.FLAGGED, Array.from(this.flagged));
    return this.flagged.has(id);
  }

  isFlagged(id) {
    return this.flagged.has(id);
  }

  clearFlags() {
    this.flagged.clear();
    this.save(STORAGE_KEYS.FLAGGED, []);
  }

  getIncorrectQuestionIds() {
    const incorrect = [];
    Object.keys(this.answers).forEach(qid => {
      if (this.answers[qid] && !this.answers[qid].isCorrect) {
        incorrect.push(qid);
      }
    });
    return incorrect;
  }
}

const appState = new NursphereState();

if (typeof window !== 'undefined') {
  window.appState = appState;
  window.NursphereState = NursphereState;
  window.PasadoState = NursphereState;
}
if (typeof globalThis !== 'undefined') {
  globalThis.appState = appState;
}
