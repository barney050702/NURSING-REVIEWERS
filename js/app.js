/**
 * PASADO - Main Application Controller (Enhanced)
 * High-yield PNLE board exam preparation platform.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const navTabs = document.querySelectorAll('.nav-tab');
  const viewSections = document.querySelectorAll('.view-section');

  // Practice state
  let currentQuestions = [...PNLE_QUESTIONS];
  let currentQuestionIndex = 0;
  let activeFilter = 'all';
  let autoAdvanceEnabled = false;
  let autoAdvanceTimeout = null;
  let timedModeEnabled = false;
  let qTimerInterval = null;
  let qTimerSecondsRemaining = 72;

  // Exam simulator state
  let examQuestions = [];
  let examCurrentIndex = 0;
  let examAnswers = {};
  let examFlags = new Set();
  let examTimerInterval = null;
  let examSecondsRemaining = 3600;
  let examTotalSeconds = 3600;

  // Calculation drill state
  let currentCalcDrillIndex = 0;

  // Case study state
  let activeCaseStudyIndex = 0;
  let activeCaseStageIndex = 0;

  // Flashcards state
  let activeFlashcardDeck = [...FLASHCARD_DECKS];
  let currentFlashcardIndex = 0;
  let isFlashcardFlipped = false;
  let activeFlashcardCategory = 'all';

  // Sound & theme toggles
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // ==========================================
  // INITIALIZATION & ERROR BOUNDARY
  // ==========================================
  function verifyDataIntegrity() {
    const missing = [];
    if (typeof PNLE_QUESTIONS === 'undefined' || !Array.isArray(PNLE_QUESTIONS)) missing.push('PNLE Practice Questions');
    if ((typeof CLINICAL_CASE_STUDIES === 'undefined' && typeof CASE_STUDIES === 'undefined') || !Array.isArray(typeof CLINICAL_CASE_STUDIES !== 'undefined' ? CLINICAL_CASE_STUDIES : CASE_STUDIES)) missing.push('Clinical Case Studies');
    if (typeof FLASHCARD_DECKS === 'undefined' || !Array.isArray(FLASHCARD_DECKS)) missing.push('Flashcard Decks');
    if (typeof PNLE_ROADMAP === 'undefined' || !Array.isArray(PNLE_ROADMAP)) missing.push('Roadmap Milestones');
    if (typeof CLINICAL_PEARLS === 'undefined') missing.push('Clinical Pearls');
    if (typeof appState === 'undefined') missing.push('Application State');
    return missing;
  }

  function showErrorBanner(message) {
    const banner = document.getElementById('appErrorBanner');
    if (!banner) return;
    banner.classList.add('visible');
    banner.innerHTML = `
      <div class="app-error-banner-content">
        <span>⚠️</span>
        <span><strong>Application Error:</strong> ${message}</span>
      </div>
      <button class="btn-error-reload" onclick="window.location.reload()">Reload Page</button>
    `;
  }

  function initApp() {
    try {
      const missing = verifyDataIntegrity();
      if (missing.length > 0) {
        showErrorBanner(`Critical review resources could not be loaded: ${missing.join(', ')}. Please verify your connection and reload the application.`);
        return;
      }

      appState.checkStreak();
      initTheme();
      setupEventListeners();
      renderHeaderStats();
      renderRoadmapView();
      renderPracticeView();
      renderWeakAreasView();
      initCalculators();
      initCalculationDrill();
      renderLabValuesTable();
      initCaseStudies();
      initFlashcards();
      renderExamHistory();
      initUniversalSearch();
      initCramSheets();
      initPrintableReviewSheet();
      updatePillBadges();
    } catch (err) {
      console.error("App initialization failed:", err);
      showErrorBanner(`Failed to initialize application: ${err.message}. Please reload the page.`);
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('nursphere_theme_v1') || localStorage.getItem('pasado_theme_v1') || localStorage.getItem('pasado_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nursphere_theme_v1', next);
    localStorage.setItem('pasado_theme_v1', next);
    updateThemeIcon(next);
    soundManager.playClick();
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }

  // ==========================================
  // VIEW SWITCHING
  // ==========================================
  function switchView(viewName) {
    soundManager.playClick();
    if (soundManager.stopSpeech) soundManager.stopSpeech();
    
    // Update tabs
    navTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === viewName);
    });

    // Update sections
    viewSections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `view-${viewName}`);
    });

    // Re-render view-specific dynamic items
    if (viewName === 'roadmap') {
      renderRoadmapView();
    } else if (viewName === 'weak-areas') {
      renderWeakAreasView();
    } else if (viewName === 'practice') {
      loadQuestion(currentQuestionIndex);
    } else if (viewName === 'case-studies') {
      renderCaseStudyStage();
    } else if (viewName === 'flashcards') {
      renderFlashcard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // HEADER STATS
  // ==========================================
  function renderHeaderStats() {
    const streakEl = document.getElementById('streakCount');
    const accuracyEl = document.getElementById('overallAccuracy');
    const questionsSolvedEl = document.getElementById('questionsSolvedCount');
    const sidebarStreakEl = document.getElementById('sidebarStreakCount');

    const streakDays = appState.stats ? appState.stats.streakDays : 0;
    const answered = appState.stats ? appState.stats.totalAnswered : 0;
    const accuracy = appState.getOverallAccuracy();

    if (streakEl) streakEl.textContent = `${streakDays}d`;
    if (sidebarStreakEl) sidebarStreakEl.textContent = `${streakDays} Day${streakDays === 1 ? '' : 's'} Active`;
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    if (questionsSolvedEl) questionsSolvedEl.textContent = answered;
  }

  function getProgressClass(pct) {
    const rounded = Math.min(100, Math.max(0, Math.round(pct / 5) * 5));
    return 'p-w-' + rounded;
  }

  // ==========================================
  // VIEW 1: ROADMAP RENDERING
  // ==========================================
  function renderRoadmapView() {
    const timelineEl = document.getElementById('roadmapTimeline');
    if (!timelineEl) return;

    timelineEl.innerHTML = '';

    PNLE_ROADMAP.forEach(stage => {
      const card = document.createElement('div');

      let stageArea = stage.code;
      if (stageArea === 'ETHICS') stageArea = 'Jurisprudence';

      let totalAvailable = 0;
      let answeredInArea = 0;
      let correctInArea = 0;

      if (stageArea === 'DIAG' || stageArea === 'SIM') {
        totalAvailable = PNLE_QUESTIONS.length;
        answeredInArea = Object.keys(appState.answers).length;
        correctInArea = Object.values(appState.answers).filter(a => a.isCorrect).length;
      } else {
        totalAvailable = PNLE_QUESTIONS.filter(q => q.area === stageArea).length;
        answeredInArea = PNLE_QUESTIONS.filter(q => q.area === stageArea && appState.getAnswer(q.id)).length;
        correctInArea = PNLE_QUESTIONS.filter(q => q.area === stageArea && appState.getAnswer(q.id)?.isCorrect).length;
      }

      const dynamicProgressPct = totalAvailable > 0 ? Math.min(100, Math.round((answeredInArea / totalAvailable) * 100)) : 0;
      const dynamicAccuracy = answeredInArea > 0 ? Math.round((correctInArea / answeredInArea) * 100) : null;

      let dynamicStatus = stage.status;
      if (dynamicProgressPct >= 100) dynamicStatus = 'completed';
      else if (dynamicProgressPct > 0) dynamicStatus = 'in-progress';

      const isDynamicWeak = dynamicAccuracy !== null && dynamicAccuracy < 75;

      card.className = `roadmap-card ${dynamicStatus} ${isDynamicWeak ? 'weak-node' : ''}`;

      let topicsHtml = '';
      if (stage.topics) {
        topicsHtml = `
          <div class="node-topics-preview">
            ${stage.topics.map(t => `<span class="topic-chip">${t.name}</span>`).join('')}
          </div>
        `;
      }

      let actionBtnText = 'Start Milestone';
      let actionBtnClass = 'btn-secondary';
      if (dynamicStatus === 'in-progress') {
        actionBtnText = 'Resume Study Node';
        actionBtnClass = 'btn-primary';
      } else if (dynamicStatus === 'completed') {
        actionBtnText = 'Review Questions';
        actionBtnClass = 'btn-outline';
      } else if (stage.status === 'locked') {
        actionBtnText = 'Prerequisites Needed';
        actionBtnClass = 'btn-secondary';
      }

      const scoreHtml = dynamicAccuracy !== null 
        ? `<span class="badge ${dynamicAccuracy >= 75 ? 'badge-teal' : 'badge-crimson'}">${dynamicAccuracy}% Accuracy (${answeredInArea}/${totalAvailable})</span>` 
        : `<span class="badge badge-cyan">${answeredInArea}/${totalAvailable} Solved</span>`;

      const weakBadge = isDynamicWeak 
        ? `<span class="badge badge-crimson">⚠️ Weak Area (&lt;75%)</span>` 
        : '';

      card.innerHTML = `
        <div class="node-icon-wrapper">
          <span>${getNodeIcon(stage.code)}</span>
        </div>
        <div class="node-body">
          <div class="node-top">
            <div class="node-title-group">
              <span class="node-code">${stage.code}</span>
              <h3 class="node-title">${stage.title}</h3>
              ${scoreHtml}
              ${weakBadge}
            </div>
            <div class="node-meta">
              <span>⏱️ ${stage.estHours}</span>
              <span>📝 ${totalAvailable} Questions</span>
            </div>
          </div>
          <div class="node-subtitle">${stage.subtitle}</div>
          <p class="node-desc">${stage.description}</p>
          ${topicsHtml}

          <div class="node-progress-bar-wrap">
            <div class="node-progress-bar-fill ${getProgressClass(dynamicProgressPct)}"></div>
          </div>

          <div class="node-footer">
            <span class="node-legal-cite">📜 ${stage.legalBasis || stage.tosReference}</span>
            <button class="btn btn-sm ${actionBtnClass}" data-action="study-node" data-area="${stage.code}">
              ${actionBtnText} →
            </button>
          </div>
        </div>
      `;

      const btn = card.querySelector('[data-action="study-node"]');
      if (btn && stage.status !== 'locked') {
        btn.addEventListener('click', () => {
          let targetArea = stage.code;
          if (targetArea === 'ETHICS') targetArea = 'Jurisprudence';
          if (targetArea === 'DIAG' || targetArea === 'SIM') targetArea = 'all';

          filterPracticeByArea(targetArea);
          switchView('practice');
        });
      }

      timelineEl.appendChild(card);
    });

    const readiness = appState.calculateBoardReadiness();
    const readinessScoreEl = document.getElementById('readinessGaugeScore');
    const readinessVerdictEl = document.getElementById('readinessVerdict');
    const readinessGaugeCircle = document.getElementById('readinessGaugeCircle');

    if (readinessScoreEl) readinessScoreEl.textContent = `${readiness.overallAvg}%`;
    if (readinessVerdictEl) {
      readinessVerdictEl.textContent = readiness.verdict;
      readinessVerdictEl.className = `badge ${readiness.overallAvg >= 75 && !readiness.anyBelow60 ? 'badge-teal' : 'badge-crimson'}`;
    }
    if (readinessGaugeCircle) {
      const pct = Math.min(100, Math.max(0, readiness.overallAvg));
      const rounded = Math.round(pct / 5) * 5;
      const passClass = (readiness.overallAvg >= 75 && !readiness.anyBelow60) ? 'gauge-pass' : 'gauge-fail';
      readinessGaugeCircle.className = `readiness-gauge gauge-p-${rounded} ${passClass}`;
    }
  }

  function getNodeIcon(code) {
    switch (code) {
      case 'DIAG': return '🧭';
      case 'NP I': return '🏘️';
      case 'NP II': return '👶';
      case 'NP III': return '🫀';
      case 'NP IV': return '🧠';
      case 'NP V': return '🧘';
      case 'ETHICS': return '⚖️';
      case 'SIM': return '🏆';
      default: return '🩺';
    }
  }

  // ==========================================
  // BADGE UPDATES & PRACTICE FILTERS
  // ==========================================
  function updatePillBadges() {
    const wrongCountEl = document.getElementById('wrongCount');
    const bookmarkCountEl = document.getElementById('bookmarkCount');
    const fcDueCountEl = document.getElementById('fcDueCount');

    if (wrongCountEl) {
      const wrongCount = PNLE_QUESTIONS.filter(q => {
        const a = appState.getAnswer(q.id);
        return a && a.isCorrect === false;
      }).length;
      wrongCountEl.textContent = wrongCount;
    }

    if (bookmarkCountEl) {
      const bCount = appState.bookmarks ? appState.bookmarks.size : 0;
      bookmarkCountEl.textContent = bCount;
    }

    if (fcDueCountEl) {
      const dueCount = appState.getDueCards().length;
      fcDueCountEl.textContent = dueCount;
    }
  }

  // ==========================================
  // VIEW 2: PRACTICE QUESTION ENGINE
  // ==========================================
  function renderPracticeView() {
    setupFilterPills();
    updatePillBadges();
    loadQuestion(0);
  }

  function setupFilterPills() {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        filterPracticeByArea(pill.dataset.area);
      });
    });
  }

  function filterPracticeByArea(area) {
    activeFilter = area;
    if (area === 'all') {
      currentQuestions = [...PNLE_QUESTIONS];
    } else if (area === 'weak') {
      const weakAreas = appState.getWeakAreas().map(w => w.area);
      currentQuestions = PNLE_QUESTIONS.filter(q => weakAreas.includes(q.area));
      if (currentQuestions.length === 0) currentQuestions = [...PNLE_QUESTIONS];
    } else if (area === 'wrong') {
      currentQuestions = PNLE_QUESTIONS.filter(q => {
        const a = appState.getAnswer(q.id);
        return a && a.isCorrect === false;
      });
    } else if (area === 'bookmarked') {
      currentQuestions = PNLE_QUESTIONS.filter(q => appState.isBookmarked(q.id));
    } else {
      currentQuestions = PNLE_QUESTIONS.filter(q => q.area === area);
    }

    currentQuestionIndex = 0;
    loadQuestion(0);

    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      p.classList.toggle('active', p.dataset.area === area);
    });

    updatePillBadges();
  }

  function loadQuestion(index) {
    const emptyStateEl = document.getElementById('practiceEmptyState');
    const contentEl = document.getElementById('practiceQuestionContent');

    if (currentQuestions.length === 0) {
      stopQuestionTimer();
      if (emptyStateEl) {
        emptyStateEl.classList.remove('hidden');
        let icon = '🎯';
        let title = 'No Questions in this Filter';
        let desc = 'Try selecting "All Subjects" or a different area to continue your review.';
        let btnText = 'Show All Questions';

        if (activeFilter === 'wrong') {
          icon = '🌟';
          title = 'No Incorrect Questions!';
          desc = 'You have not answered any questions incorrectly yet, or you have reset previous mistakes.';
          btnText = 'Practice All Questions';
        } else if (activeFilter === 'bookmarked') {
          icon = '⭐';
          title = 'No Saved Bookmarks Yet';
          desc = 'While practicing, tap the "Bookmark" button on any challenging question to review it here.';
          btnText = 'Browse Questions';
        } else if (activeFilter === 'weak') {
          icon = '🛡️';
          title = 'No Critical Weak Areas Detected';
          desc = 'Your subject mastery is above 75%, or you have not yet completed sufficient practice items.';
          btnText = 'Simulate Mock Exam';
        }

        emptyStateEl.innerHTML = `
          <span class="empty-practice-icon">${icon}</span>
          <h3 class="empty-practice-title">${title}</h3>
          <p class="empty-practice-desc">${desc}</p>
          <button class="btn btn-primary" id="emptyStateResetFilterBtn">${btnText} →</button>
        `;
        const resetFilterBtn = emptyStateEl.querySelector('#emptyStateResetFilterBtn');
        if (resetFilterBtn) {
          resetFilterBtn.onclick = () => {
            soundManager.playClick();
            if (activeFilter === 'weak' && btnText === 'Simulate Mock Exam') {
              switchView('exam');
            } else {
              filterPracticeByArea('all');
            }
          };
        }
      }
      if (contentEl) contentEl.classList.add('hidden');
      return;
    } else {
      if (emptyStateEl) emptyStateEl.classList.add('hidden');
      if (contentEl) contentEl.classList.remove('hidden');
    }

    if (index < 0) index = 0;
    if (index >= currentQuestions.length) index = currentQuestions.length - 1;

    currentQuestionIndex = index;
    const q = currentQuestions[index];

    const areaTag = document.getElementById('qAreaTag');
    const topicTag = document.getElementById('qTopicTag');
    const tosTag = document.getElementById('qTosTag');
    const counterTag = document.getElementById('qCounterTag');
    const bookmarkBtn = document.getElementById('qBookmarkBtn');

    if (areaTag) areaTag.textContent = `${q.area} • ${q.areaName}`;
    if (topicTag) topicTag.textContent = q.topic;
    if (tosTag) tosTag.textContent = `TOS: ${q.tosCompetency}`;
    if (counterTag) counterTag.textContent = `Question ${index + 1} of ${currentQuestions.length}`;

    if (bookmarkBtn) {
      const isMarked = appState.isBookmarked(q.id);
      bookmarkBtn.innerHTML = isMarked ? '★ Bookmarked' : '☆ Bookmark';
      bookmarkBtn.classList.toggle('btn-primary', isMarked);
      bookmarkBtn.onclick = () => {
        soundManager.playClick();
        const updated = appState.toggleBookmark(q.id);
        bookmarkBtn.innerHTML = updated ? '★ Bookmarked' : '☆ Bookmark';
        bookmarkBtn.classList.toggle('btn-primary', updated);
        updatePillBadges();
      };
    }

    // Flag Question Button
    const flagBtn = document.getElementById('qFlagBtn');
    if (flagBtn) {
      const isFl = appState.isFlagged ? appState.isFlagged(q.id) : false;
      flagBtn.innerHTML = isFl ? '🚩 Flagged' : '🚩 Flag';
      flagBtn.classList.toggle('btn-flagged', isFl);
      flagBtn.onclick = () => {
        soundManager.playClick();
        const updated = appState.toggleFlag(q.id);
        flagBtn.innerHTML = updated ? '🚩 Flagged' : '🚩 Flag';
        flagBtn.classList.toggle('btn-flagged', updated);
      };
    }

    // Audio Read-Aloud Button
    const readAloudBtn = document.getElementById('qReadAloudBtn');
    if (readAloudBtn) {
      if (soundManager.stopSpeech) soundManager.stopSpeech();
      readAloudBtn.classList.remove('speaking');
      readAloudBtn.innerHTML = '🔊 Listen';
      readAloudBtn.onclick = () => {
        if (soundManager.isSpeaking && soundManager.isSpeaking()) {
          soundManager.stopSpeech();
          readAloudBtn.classList.remove('speaking');
          readAloudBtn.innerHTML = '🔊 Listen';
        } else {
          readAloudBtn.classList.add('speaking');
          readAloudBtn.innerHTML = '⏹️ Stop';
          const optsText = q.options.map(o => `Option ${o.id}: ${o.text}`).join('. ');
          const speakContent = `${q.vignette ? q.vignette + '. ' : ''}${q.question}. ${optsText}`;
          soundManager.speak(speakContent, () => {
            readAloudBtn.classList.remove('speaking');
            readAloudBtn.innerHTML = '🔊 Listen';
          });
        }
      };
    }

    const vignetteEl = document.getElementById('qVignetteText');
    const stemEl = document.getElementById('qStemText');
    if (vignetteEl) vignetteEl.textContent = q.vignette;
    if (stemEl) stemEl.textContent = q.question;

    const optionsContainer = document.getElementById('qOptionsList');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const savedAnswer = appState.getAnswer(q.id);

    q.options.forEach(opt => {
      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      optCard.dataset.optionId = opt.id;
      optCard.setAttribute('tabindex', '0');
      optCard.setAttribute('role', 'button');
      optCard.setAttribute('aria-label', `Option ${opt.id}: ${opt.text}`);

      if (savedAnswer) {
        optCard.classList.add('locked');
        if (opt.id === q.correctAnswer) {
          optCard.classList.add('correct');
        } else if (opt.id === savedAnswer.selectedId) {
          optCard.classList.add('incorrect');
        }
      }

      optCard.innerHTML = `
        <div class="option-letter">${opt.id}</div>
        <div class="option-text">${opt.text}</div>
        <button class="eliminate-btn" title="Strike out option for test-taking strategy">✕</button>
      `;

      const elimBtn = optCard.querySelector('.eliminate-btn');
      elimBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        soundManager.playClick();
        optCard.classList.toggle('eliminated');
      });

      const handleSelect = () => {
        if (optCard.classList.contains('locked')) return;
        selectOption(q, opt.id);
      };

      optCard.addEventListener('click', handleSelect);
      optCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });

      optionsContainer.appendChild(optCard);
    });

    // Retry / Reset single question
    const resetQBtn = document.getElementById('qResetQuestionBtn');
    if (resetQBtn) {
      resetQBtn.classList.toggle('visible', !!savedAnswer);
      resetQBtn.onclick = () => {
        soundManager.playClick();
        appState.resetQuestion(q.id, q.area);
        loadQuestion(currentQuestionIndex);
        renderHeaderStats();
        updatePillBadges();
      };
    }

    // Toggle rationale button
    const toggleRationaleBtn = document.getElementById('qToggleRationaleBtn');
    if (toggleRationaleBtn) {
      toggleRationaleBtn.classList.toggle('visible', !!savedAnswer);
      toggleRationaleBtn.textContent = '📖 Hide Rationale';
      toggleRationaleBtn.onclick = () => {
        soundManager.playClick();
        toggleRationale();
      };
    }

    // Notes textarea
    const noteInput = document.getElementById('qNoteInput');
    if (noteInput) {
      noteInput.value = appState.getNote(q.id) || '';
      noteInput.oninput = (e) => {
        appState.saveNote(q.id, e.target.value);
      };
    }

    // Rationale visibility
    const rationaleCard = document.getElementById('qRationaleCard');
    if (rationaleCard) {
      if (savedAnswer) {
        showRationale(q, savedAnswer.selectedId);
      } else {
        rationaleCard.classList.remove('show');
      }
    }

    // Pacing timer logic
    if (timedModeEnabled && !savedAnswer) {
      startQuestionTimer();
    } else {
      stopQuestionTimer();
    }

    const prevBtn = document.getElementById('qPrevBtn');
    const nextBtn = document.getElementById('qNextBtn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === currentQuestions.length - 1;
  }

  function selectOption(question, selectedId) {
    clearTimeout(autoAdvanceTimeout);
    stopQuestionTimer();

    const isCorrect = appState.recordAnswer(question, selectedId);

    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      card.classList.add('locked');
      const optId = card.dataset.optionId;
      if (optId === question.correctAnswer) {
        card.classList.add('correct');
      } else if (optId === selectedId) {
        card.classList.add('incorrect');
      }
    });

    showRationale(question, selectedId);
    renderHeaderStats();
    updatePillBadges();

    const resetQBtn = document.getElementById('qResetQuestionBtn');
    if (resetQBtn) resetQBtn.classList.add('visible');

    const toggleRationaleBtn = document.getElementById('qToggleRationaleBtn');
    if (toggleRationaleBtn) {
      toggleRationaleBtn.classList.add('visible');
      toggleRationaleBtn.textContent = '📖 Hide Rationale';
    }

    // Auto-advance if enabled
    if (autoAdvanceEnabled) {
      autoAdvanceTimeout = setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
          loadQuestion(currentQuestionIndex + 1);
        } else {
          checkPracticeSessionComplete();
        }
      }, 1500);
    } else {
      checkPracticeSessionComplete();
    }
  }

  function toggleRationale() {
    const card = document.getElementById('qRationaleCard');
    const toggleBtn = document.getElementById('qToggleRationaleBtn');
    if (!card) return;
    const isShowing = card.classList.contains('show');
    if (isShowing) {
      card.classList.remove('show');
      if (toggleBtn) toggleBtn.textContent = '📖 Show Rationale';
    } else {
      card.classList.add('show');
      if (toggleBtn) toggleBtn.textContent = '📖 Hide Rationale';
    }
  }

  // ==========================================
  // TIMED MODE (72-SECOND PACING)
  // ==========================================
  function toggleTimedMode() {
    timedModeEnabled = !timedModeEnabled;
    const timedBtn = document.getElementById('qTimedModeBtn');
    const timerBadge = document.getElementById('qTimerBadge');

    if (timedBtn) {
      timedBtn.textContent = timedModeEnabled ? '⏱️ Timed: ON (72s)' : '⏱️ Timed: OFF';
      timedBtn.classList.toggle('btn-primary', timedModeEnabled);
      timedBtn.classList.toggle('btn-outline', !timedModeEnabled);
    }

    if (timerBadge) {
      timerBadge.classList.toggle('hidden', !timedModeEnabled);
    }

    clearInterval(qTimerInterval);
    if (timedModeEnabled) {
      const q = currentQuestions[currentQuestionIndex];
      const savedAnswer = q ? appState.getAnswer(q.id) : null;
      if (!savedAnswer) {
        startQuestionTimer();
      }
    }
  }

  function startQuestionTimer() {
    clearInterval(qTimerInterval);
    qTimerSecondsRemaining = 72;
    updateQuestionTimerBadge();

    const timerBadge = document.getElementById('qTimerBadge');
    if (timerBadge) {
      timerBadge.classList.remove('hidden');
      timerBadge.classList.remove('warning');
    }

    qTimerInterval = setInterval(() => {
      qTimerSecondsRemaining--;
      updateQuestionTimerBadge();

      if (qTimerSecondsRemaining <= 15) {
        if (timerBadge) timerBadge.classList.add('warning');
      }

      if (qTimerSecondsRemaining <= 0) {
        clearInterval(qTimerInterval);
        handleQuestionTimeout();
      }
    }, 1000);
  }

  function stopQuestionTimer() {
    clearInterval(qTimerInterval);
    const timerBadge = document.getElementById('qTimerBadge');
    if (timerBadge) {
      timerBadge.classList.remove('warning');
      if (!timedModeEnabled) {
        timerBadge.classList.add('hidden');
      }
    }
  }

  function updateQuestionTimerBadge() {
    const timerBadge = document.getElementById('qTimerBadge');
    if (!timerBadge) return;
    const mins = Math.floor(qTimerSecondsRemaining / 60);
    const secs = qTimerSecondsRemaining % 60;
    timerBadge.textContent = `⏳ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function handleQuestionTimeout() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;

    soundManager.playIncorrect();
    appState.recordAnswer(questionTimeoutPlaceholder(q), 'TIMEOUT');

    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      card.classList.add('locked');
      const optId = card.dataset.optionId;
      if (optId === q.correctAnswer) {
        card.classList.add('correct');
      }
    });

    showRationale(q, 'TIMEOUT');
    renderHeaderStats();
    updatePillBadges();
    checkPracticeSessionComplete();
  }

  function questionTimeoutPlaceholder(question) {
    return question;
  }

  // ==========================================
  // AUTO ADVANCE & NAVIGATION
  // ==========================================
  function toggleAutoAdvance() {
    autoAdvanceEnabled = !autoAdvanceEnabled;
    const btn = document.getElementById('qAutoAdvanceBtn');
    if (btn) {
      btn.textContent = autoAdvanceEnabled ? '⚡ Auto: ON (1.5s)' : '⚡ Auto: OFF';
      btn.classList.toggle('btn-primary', autoAdvanceEnabled);
      btn.classList.toggle('btn-outline', !autoAdvanceEnabled);
    }
  }

  function jumpToNextUnanswered() {
    let nextIdx = -1;
    for (let i = currentQuestionIndex + 1; i < currentQuestions.length; i++) {
      if (!appState.getAnswer(currentQuestions[i].id)) {
        nextIdx = i;
        break;
      }
    }
    if (nextIdx === -1) {
      for (let i = 0; i <= currentQuestionIndex; i++) {
        if (!appState.getAnswer(currentQuestions[i].id)) {
          nextIdx = i;
          break;
        }
      }
    }

    if (nextIdx !== -1 && nextIdx !== currentQuestionIndex) {
      loadQuestion(nextIdx);
    } else if (nextIdx === -1) {
      checkPracticeSessionComplete(true);
    }
  }

  // ==========================================
  // PRACTICE SESSION COMPLETION
  // ==========================================
  function checkPracticeSessionComplete(forceShow = false) {
    if (currentQuestions.length === 0) return;
    const allAnswered = currentQuestions.every(q => !!appState.getAnswer(q.id));
    if (allAnswered || forceShow) {
      showSessionCompleteModal();
    }
  }

  function showSessionCompleteModal() {
    const modal = document.getElementById('sessionCompleteModal');
    if (!modal) return;

    soundManager.playComplete();

    const answered = currentQuestions.filter(q => !!appState.getAnswer(q.id));
    const correct = currentQuestions.filter(q => appState.getAnswer(q.id)?.isCorrect);
    const accuracy = answered.length > 0 ? Math.round((correct.length / answered.length) * 100) : 0;
    const streak = appState.stats ? appState.stats.streakDays : 0;

    const countEl = document.getElementById('sessionCompletedCount');
    const accEl = document.getElementById('sessionAccuracyVal');
    const streakEl = document.getElementById('sessionStreakVal');

    if (countEl) countEl.textContent = answered.length;
    if (accEl) accEl.textContent = `${accuracy}%`;
    if (streakEl) streakEl.textContent = `${streak}d`;

    modal.showModal();
  }

  function showRationale(question, selectedId) {
    const card = document.getElementById('qRationaleCard');
    if (!card) return;

    const isCorrect = selectedId === question.correctAnswer;
    const isTimeout = selectedId === 'TIMEOUT';
    const verdictEl = document.getElementById('rationaleVerdict');
    const whyCorrectEl = document.getElementById('rationaleWhyCorrect');
    const distractorListEl = document.getElementById('rationaleDistractors');
    const pearlTextEl = document.getElementById('rationalePearlText');
    const refTagEl = document.getElementById('rationaleReferenceTag');

    if (verdictEl) {
      if (isTimeout) {
        verdictEl.innerHTML = `<span class="verdict-incorrect">⏱️ Time Expired (Correct Answer is ${question.correctAnswer})</span>`;
      } else if (isCorrect) {
        verdictEl.innerHTML = `<span class="verdict-correct">✓ Correct Answer (${question.correctAnswer})</span>`;
      } else {
        verdictEl.innerHTML = `<span class="verdict-incorrect">✗ Incorrect (Correct Answer is ${question.correctAnswer})</span>`;
      }
    }

    if (whyCorrectEl) {
      whyCorrectEl.textContent = question.rationale.whyCorrect;
    }

    if (distractorListEl && question.rationale.distractorBreakdown) {
      distractorListEl.innerHTML = Object.entries(question.rationale.distractorBreakdown)
        .map(([optId, text]) => `
          <div class="distractor-item">
            <span class="distractor-key">Option ${optId}:</span>
            <span>${text}</span>
          </div>
        `).join('');
    }

    if (pearlTextEl) {
      pearlTextEl.textContent = question.rationale.clinicalPearl;
    }

    if (refTagEl) {
      refTagEl.textContent = `Official Reference: ${question.rationale.reference}`;
    }

    card.classList.add('show');
  }

  // ==========================================
  // VIEW 3: WEAK AREA DIAGNOSTIC
  // ==========================================
  function renderWeakAreasView() {
    const gridEl = document.getElementById('weakAreasGrid');
    const readinessBanner = document.getElementById('weakReadinessBanner');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    const readiness = appState.calculateBoardReadiness();

    if (readinessBanner) {
      readinessBanner.innerHTML = `
        <div class="weak-card ${readiness.overallAvg >= 75 && !readiness.anyBelow60 ? 'passing' : 'danger'} weak-diagnostic-card">
          <div class="weak-card-top">
            <div>
              <span class="badge ${readiness.overallAvg >= 75 ? 'badge-teal' : 'badge-crimson'}">PRC PNLE Passing Metric</span>
              <h2 class="weak-diagnostic-title">${readiness.verdict}</h2>
              <p class="weak-diagnostic-desc">${readiness.message}</p>
            </div>
            <div class="weak-stat-number">${readiness.overallAvg}%</div>
          </div>
          <div class="weak-diagnostic-legend">
            Statutory Rule (RA 9173 Sec. 15): Must achieve General Average ≥ 75% with NO individual subject below 60%.
          </div>
        </div>
      `;
    }

    const scores = appState.getSubjectScores();

    Object.entries(scores).forEach(([areaKey, s]) => {
      const card = document.createElement('div');
      let statusClass = 'passing';
      let badgeClass = 'badge-teal';
      let statusLabel = 'Passing (≥75%)';

      if (s.isDanger) {
        statusClass = 'danger';
        badgeClass = 'badge-crimson';
        statusLabel = 'Critical Risk (<60%)';
      } else if (!s.isPassing) {
        statusClass = 'warning';
        badgeClass = 'badge-gold';
        statusLabel = 'Below Target (<75%)';
      }

      card.className = `weak-card ${statusClass}`;
      card.innerHTML = `
        <div>
          <div class="weak-card-top">
            <div>
              <span class="badge ${badgeClass}">${statusLabel}</span>
              <h3 class="subject-stat-title">${areaKey}: ${s.label}</h3>
            </div>
            <div class="weak-stat-number">${s.percentage}%</div>
          </div>
          <div class="node-progress-bar-wrap subject-stat-bar-wrap">
            <div class="node-progress-bar-fill ${getProgressClass(s.percentage)} ${s.isDanger ? 'bg-danger' : (s.isPassing ? 'bg-teal' : 'bg-warning')}"></div>
          </div>
          <div class="subject-stat-subtext">
            <span>Completed: <strong>${s.answered}</strong> questions</span> • 
            <span>Correct: <strong>${s.correct}</strong></span>
          </div>
        </div>
        <button class="btn btn-sm btn-secondary" data-action="drill-area" data-area="${areaKey}">
          Targeted Practice (${areaKey}) →
        </button>
      `;

      const drillBtn = card.querySelector('[data-action="drill-area"]');
      if (drillBtn) {
        drillBtn.addEventListener('click', () => {
          filterPracticeByArea(areaKey);
          switchView('practice');
        });
      }

      gridEl.appendChild(card);
    });

    const rescueAllBtn = document.getElementById('launchRescueDrillBtn');
    if (rescueAllBtn) {
      rescueAllBtn.onclick = () => {
        soundManager.playClick();
        filterPracticeByArea('weak');
        switchView('practice');
      };
    }
  }

  // ==========================================
  // VIEW: UNFOLDING CLINICAL CASE STUDIES (CJMM)
  // ==========================================
  function initCaseStudies() {
    const caseSelect = document.getElementById('caseStudySelect');
    if (caseSelect) {
      caseSelect.innerHTML = CLINICAL_CASE_STUDIES.map((c, i) => `
        <option value="${i}">${c.title}</option>
      `).join('');
      caseSelect.addEventListener('change', (e) => {
        soundManager.playClick();
        activeCaseStudyIndex = parseInt(e.target.value, 10);
        activeCaseStageIndex = 0;
        renderCaseStudyStage();
      });
    }

    renderCaseStudyStage();
  }

  function renderCaseStudyStage() {
    const caseStudy = CLINICAL_CASE_STUDIES[activeCaseStudyIndex];
    if (!caseStudy) return;

    // Render Patient EHR Card
    const ehrPatientName = document.getElementById('ehrPatientName');
    const ehrPatientAge = document.getElementById('ehrPatientAge');
    const ehrPatientObstetric = document.getElementById('ehrPatientObstetric');
    const ehrPatientReason = document.getElementById('ehrPatientReason');
    const ehrPatientAllergies = document.getElementById('ehrPatientAllergies');

    if (ehrPatientName) ehrPatientName.textContent = caseStudy.patient.name;
    if (ehrPatientAge) ehrPatientAge.textContent = caseStudy.patient.age;
    if (ehrPatientObstetric) ehrPatientObstetric.textContent = caseStudy.patient.gravidaPara;
    if (ehrPatientReason) ehrPatientReason.textContent = caseStudy.patient.admissionReason;
    if (ehrPatientAllergies) ehrPatientAllergies.textContent = caseStudy.patient.allergies;

    // Stage Tabs
    const tabsContainer = document.getElementById('caseStageTabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = caseStudy.stages.map((stg, i) => `
        <button class="stage-tab-pill ${i === activeCaseStageIndex ? 'active' : ''}" data-stage="${i}">
          Stage ${i + 1}
        </button>
      `).join('');

      tabsContainer.querySelectorAll('.stage-tab-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          soundManager.playClick();
          activeCaseStageIndex = parseInt(btn.dataset.stage, 10);
          renderCaseStudyStage();
        });
      });
    }

    // Active Stage Data
    const stage = caseStudy.stages[activeCaseStageIndex];
    const stepNameEl = document.getElementById('caseStepName');
    const chartVitalsEl = document.getElementById('caseChartVitals');
    const chartAssessmentEl = document.getElementById('caseChartAssessment');
    const promptEl = document.getElementById('caseQuestionPrompt');
    const optionsContainer = document.getElementById('caseOptionsContainer');
    const rationaleCard = document.getElementById('caseRationaleCard');

    if (stepNameEl) stepNameEl.textContent = `${stage.stepName} (${stage.questionType.toUpperCase()})`;
    if (chartVitalsEl) chartVitalsEl.textContent = stage.chartData.vitals;
    if (chartAssessmentEl) chartAssessmentEl.textContent = `${stage.chartData.assessment} ${stage.chartData.labs || ''}`;
    if (promptEl) promptEl.textContent = stage.prompt;

    if (rationaleCard) {
      rationaleCard.classList.add('case-rationale-hidden');
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const isSata = stage.questionType === 'sata';
      const selectedAnswers = new Set();

      stage.options.forEach(opt => {
        const row = document.createElement('div');
        row.className = 'option-card';
        row.setAttribute('tabindex', '0');
        row.setAttribute('role', isSata ? 'checkbox' : 'button');
        row.setAttribute('aria-label', `Option ${opt.id}: ${opt.text}`);

        row.innerHTML = `
          <div class="option-letter">${isSata ? '☐' : opt.id}</div>
          <div class="option-text">${opt.text}</div>
        `;

        const handleOptionClick = () => {
          soundManager.playClick();
          if (isSata) {
            if (selectedAnswers.has(opt.id)) {
              selectedAnswers.delete(opt.id);
              row.classList.remove('selected');
              row.querySelector('.option-letter').textContent = '☐';
            } else {
              selectedAnswers.add(opt.id);
              row.classList.add('selected');
              row.querySelector('.option-letter').textContent = '☑';
            }
          } else {
            evaluateCaseChoice([opt.id], stage);
          }
        };

        row.addEventListener('click', handleOptionClick);
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOptionClick();
          }
        });

        optionsContainer.appendChild(row);
      });

      // If SATA, add submit button
      if (isSata) {
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn btn-primary sata-submit-btn';
        submitBtn.textContent = 'Submit Multi-Response Answers →';
        submitBtn.addEventListener('click', () => {
          soundManager.playClick();
          evaluateCaseChoice(Array.from(selectedAnswers), stage);
        });
        optionsContainer.appendChild(submitBtn);
      }
    }
  }

  function evaluateCaseChoice(selectedIds, stage) {
    const isCorrect = selectedIds.length === stage.correctAnswers.length &&
      selectedIds.every(id => stage.correctAnswers.includes(id));

    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const rationaleCard = document.getElementById('caseRationaleCard');
    const verdictEl = document.getElementById('caseRationaleVerdict');
    const whyEl = document.getElementById('caseRationaleWhy');
    const distractorEl = document.getElementById('caseRationaleDistractor');

    if (verdictEl) {
      verdictEl.innerHTML = isCorrect 
        ? `<span class="verdict-correct">✓ Clinical Judgment Accurate!</span>`
        : `<span class="verdict-incorrect">✗ Priority Misalignment (Correct: ${stage.correctAnswers.join(', ')})</span>`;
    }
    if (whyEl) whyEl.textContent = stage.rationale.whyCorrect;
    if (distractorEl) distractorEl.textContent = stage.rationale.distractorExplanation;

    if (rationaleCard) {
      rationaleCard.classList.remove('case-rationale-hidden');
    }
  }

  // ==========================================
  // VIEW: SPACED REPETITION FLASHCARDS (LEITNER)
  // ==========================================
  function initFlashcards() {
    setupFlashcardCategoryPills();
    renderFlashcard();

    const cardElement = document.getElementById('flashcardInner');
    if (cardElement) {
      cardElement.addEventListener('click', flipFlashcard);
    }

    // Leitner rating buttons
    document.querySelectorAll('.btn-leitner').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rating = btn.dataset.rating;
        rateFlashcard(rating);
      });
    });

    const prevBtn = document.getElementById('fcPrevBtn');
    const nextBtn = document.getElementById('fcNextBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      soundManager.playClick();
      navigateFlashcard(-1);
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      soundManager.playClick();
      navigateFlashcard(1);
    });
  }

  function setupFlashcardCategoryPills() {
    const pills = document.querySelectorAll('.fc-filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        soundManager.playClick();
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFlashcardCategory = pill.dataset.cat;
        
        if (activeFlashcardCategory === 'all') {
          activeFlashcardDeck = [...FLASHCARD_DECKS];
        } else if (activeFlashcardCategory === 'due') {
          const dueIds = new Set(appState.getDueCards().map(c => c.cardId));
          activeFlashcardDeck = FLASHCARD_DECKS.filter(f => dueIds.has(f.id));
          if (activeFlashcardDeck.length === 0) {
            activeFlashcardDeck = [...FLASHCARD_DECKS];
          }
        } else {
          activeFlashcardDeck = FLASHCARD_DECKS.filter(f => f.category.toLowerCase().includes(activeFlashcardCategory.toLowerCase()));
        }
        currentFlashcardIndex = 0;
        isFlashcardFlipped = false;
        renderFlashcard();
      });
    });
  }

  function renderFlashcard() {
    if (activeFlashcardDeck.length === 0) return;
    const fc = activeFlashcardDeck[currentFlashcardIndex];
    const cardState = appState.getCardState(fc.id);

    const inner = document.getElementById('flashcardInner');
    const frontText = document.getElementById('fcFrontText');
    const backText = document.getElementById('fcBackText');
    const backMnemonic = document.getElementById('fcBackMnemonic');
    const catBadge = document.getElementById('fcCategoryBadge');
    const boxBadge = document.getElementById('fcBoxBadge');
    const counterText = document.getElementById('fcCounterText');
    const masteredCountEl = document.getElementById('fcMasteredCount');
    const fcDueCountEl = document.getElementById('fcDueCount');

    if (inner) {
      inner.classList.toggle('is-flipped', isFlashcardFlipped);
    }

    if (frontText) frontText.textContent = fc.front;
    if (backText) backText.textContent = fc.back;
    if (backMnemonic) backMnemonic.textContent = fc.mnemonic ? `💡 Mnemonic / Board Tip: ${fc.mnemonic}` : '';
    if (catBadge) catBadge.textContent = fc.category;
    if (boxBadge) boxBadge.textContent = `Box ${cardState.box} (Interval Level)`;
    if (counterText) counterText.textContent = `Card ${currentFlashcardIndex + 1} of ${activeFlashcardDeck.length}`;

    const stats = appState.getFlashcardStats();
    if (masteredCountEl) masteredCountEl.textContent = `${stats.mastered} Mastered`;
    if (fcDueCountEl) fcDueCountEl.textContent = appState.getDueCards().length;
  }

  function flipFlashcard() {
    soundManager.playClick();
    isFlashcardFlipped = !isFlashcardFlipped;
    const inner = document.getElementById('flashcardInner');
    if (inner) inner.classList.toggle('is-flipped', isFlashcardFlipped);
  }

  function rateFlashcard(rating) {
    const fc = activeFlashcardDeck[currentFlashcardIndex];
    if (!fc) return;

    if (rating === 'again') {
      soundManager.playIncorrect();
    } else {
      soundManager.playCorrect();
    }

    appState.updateCardReview(fc.id, rating);
    isFlashcardFlipped = false;
    updatePillBadges();
    navigateFlashcard(1);
  }

  function navigateFlashcard(direction) {
    currentFlashcardIndex += direction;
    if (currentFlashcardIndex < 0) currentFlashcardIndex = activeFlashcardDeck.length - 1;
    if (currentFlashcardIndex >= activeFlashcardDeck.length) currentFlashcardIndex = 0;
    isFlashcardFlipped = false;
    renderFlashcard();
  }

  // ==========================================
  // VIEW 4: MOCK EXAM SIMULATOR
  // ==========================================
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  let lastExamMissedQuestions = [];

  function startMockExam() {
    const lengthSelect = document.getElementById('examLengthSelect');
    const scopeSelect = document.getElementById('examScopeSelect');

    const requestedLength = lengthSelect ? parseInt(lengthSelect.value, 10) : 50;
    const requestedScope = scopeSelect ? scopeSelect.value : 'all';

    let pool = [...PNLE_QUESTIONS];
    if (requestedScope !== 'all') {
      pool = pool.filter(q => q.area === requestedScope);
      if (pool.length === 0) pool = [...PNLE_QUESTIONS];
    }

    examQuestions = shuffleArray(pool).slice(0, Math.min(requestedLength, pool.length));
    examCurrentIndex = 0;
    examAnswers = {};
    examFlags = new Set();
    lastExamMissedQuestions = [];

    // Timing: 100 items = 120 mins (7200s), 50 items = 60 mins (3600s), 25 items = 30 mins (1800s)
    if (requestedLength >= 100) {
      examSecondsRemaining = 7200;
      examTotalSeconds = 7200;
    } else if (requestedLength >= 50) {
      examSecondsRemaining = 3600;
      examTotalSeconds = 3600;
    } else {
      examSecondsRemaining = 1800;
      examTotalSeconds = 1800;
    }

    const startView = document.getElementById('examStartScreen');
    const runningView = document.getElementById('examRunningScreen');
    if (startView) startView.classList.add('hidden');
    if (runningView) runningView.classList.add('active');

    setupExamActionButtons();
    renderExamNavGrid();
    loadExamQuestion(0);
    startExamTimer();
  }

  function startExamTimer() {
    clearInterval(examTimerInterval);
    const timerDisplay = document.getElementById('examTimerDisplay');

    examTimerInterval = setInterval(() => {
      examSecondsRemaining--;
      if (examSecondsRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
        return;
      }

      const minutes = Math.floor(examSecondsRemaining / 60);
      const seconds = examSecondsRemaining % 60;
      if (timerDisplay) {
        timerDisplay.textContent = `⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (examSecondsRemaining <= 300) {
          timerDisplay.style.color = 'var(--brand-crimson)';
        } else {
          timerDisplay.style.color = '';
        }
      }
    }, 1000);
  }

  function updateExamProgressBar() {
    const bar = document.getElementById('examProgressBar');
    if (!bar || examQuestions.length === 0) return;
    const answeredCount = Object.keys(examAnswers).length;
    const pct = Math.round((answeredCount / examQuestions.length) * 100);
    bar.style.width = `${pct}%`;
  }

  function renderExamNavGrid() {
    const grid = document.getElementById('examNavGrid');
    if (!grid) return;

    grid.innerHTML = '';
    examQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      const isAnswered = !!examAnswers[q.id];
      const isFlagged = examFlags.has(q.id);
      const isCurrent = idx === examCurrentIndex;

      let cls = 'exam-nav-btn';
      if (isAnswered) cls += ' answered';
      if (isFlagged) cls += ' flagged';
      if (isCurrent) cls += ' current';

      btn.className = cls;
      btn.textContent = idx + 1;
      btn.title = `Question ${idx + 1} (${q.area}): ${isAnswered ? 'Answered' : 'Unanswered'}${isFlagged ? ', Flagged' : ''}`;
      
      btn.addEventListener('click', () => {
        soundManager.playClick();
        loadExamQuestion(idx);
      });
      grid.appendChild(btn);
    });

    updateExamProgressBar();
  }

  function setupExamActionButtons() {
    const flagBtn = document.getElementById('examFlagBtn');
    const clearBtn = document.getElementById('examClearBtn');
    const readAloudBtn = document.getElementById('examReadAloudBtn');

    if (flagBtn) {
      flagBtn.onclick = () => {
        const q = examQuestions[examCurrentIndex];
        if (!q) return;
        soundManager.playClick();
        if (examFlags.has(q.id)) {
          examFlags.delete(q.id);
          flagBtn.classList.remove('btn-flagged');
          flagBtn.textContent = '🚩 Flag';
        } else {
          examFlags.add(q.id);
          flagBtn.classList.add('btn-flagged');
          flagBtn.textContent = '🚩 Flagged';
        }
        renderExamNavGrid();
      };
    }

    if (clearBtn) {
      clearBtn.onclick = () => {
        const q = examQuestions[examCurrentIndex];
        if (!q) return;
        soundManager.playClick();
        delete examAnswers[q.id];
        loadExamQuestion(examCurrentIndex);
        renderExamNavGrid();
      };
    }

    if (readAloudBtn) {
      readAloudBtn.onclick = () => {
        const q = examQuestions[examCurrentIndex];
        if (!q) return;

        if (soundManager.isSpeaking && soundManager.isSpeaking()) {
          soundManager.stopSpeech();
          readAloudBtn.classList.remove('speaking');
          readAloudBtn.textContent = '🔊 Listen';
        } else {
          readAloudBtn.classList.add('speaking');
          readAloudBtn.textContent = '⏹️ Stop';
          const optsText = q.options.map(o => `Option ${o.id}: ${o.text}`).join('. ');
          const speakContent = `${q.vignette ? q.vignette + '. ' : ''}${q.question}. ${optsText}`;
          soundManager.speak(speakContent, () => {
            readAloudBtn.classList.remove('speaking');
            readAloudBtn.textContent = '🔊 Listen';
          });
        }
      };
    }
  }

  function loadExamQuestion(index) {
    if (soundManager.stopSpeech) soundManager.stopSpeech();
    const readAloudBtn = document.getElementById('examReadAloudBtn');
    if (readAloudBtn) {
      readAloudBtn.classList.remove('speaking');
      readAloudBtn.textContent = '🔊 Listen';
    }

    examCurrentIndex = index;
    const q = examQuestions[index];
    if (!q) return;

    const stem = document.getElementById('examStem');
    const vignette = document.getElementById('examVignette');
    const optionsContainer = document.getElementById('examOptions');
    const questionNum = document.getElementById('examQuestionNum');
    const subjectBadge = document.getElementById('examSubjectBadge');
    const flagBtn = document.getElementById('examFlagBtn');

    if (questionNum) questionNum.textContent = `Question ${index + 1} of ${examQuestions.length}`;
    if (subjectBadge) subjectBadge.textContent = q.area;
    if (vignette) vignette.textContent = q.vignette;
    if (stem) stem.textContent = q.question;

    if (flagBtn) {
      const isFl = examFlags.has(q.id);
      flagBtn.classList.toggle('btn-flagged', isFl);
      flagBtn.textContent = isFl ? '🚩 Flagged' : '🚩 Flag';
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      q.options.forEach(opt => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Option ${opt.id}: ${opt.text}`);

        if (examAnswers[q.id] === opt.id) {
          card.classList.add('selected');
        }

        card.innerHTML = `
          <div class="option-letter">${opt.id}</div>
          <div class="option-text">${opt.text}</div>
        `;

        const handleSelect = () => {
          soundManager.playClick();
          examAnswers[q.id] = opt.id;
          loadExamQuestion(index);
          renderExamNavGrid();
        };

        card.addEventListener('click', handleSelect);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect();
          }
        });

        optionsContainer.appendChild(card);
      });
    }

    renderExamNavGrid();

    const prevBtn = document.getElementById('examPrevBtn');
    const nextBtn = document.getElementById('examNextBtn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === examQuestions.length - 1;
  }

  function submitExam() {
    clearInterval(examTimerInterval);
    if (soundManager.stopSpeech) soundManager.stopSpeech();
    soundManager.playComplete();

    let total = examQuestions.length;
    let correct = 0;
    const breakdown = {
      "NP I": { total: 0, correct: 0, name: "Community Health Nursing" },
      "NP II": { total: 0, correct: 0, name: "Maternal & Child Health" },
      "NP III": { total: 0, correct: 0, name: "Medical-Surgical Part A" },
      "NP IV": { total: 0, correct: 0, name: "Medical-Surgical Part B" },
      "NP V": { total: 0, correct: 0, name: "Psychiatric & Mental Health" }
    };

    lastExamMissedQuestions = [];

    examQuestions.forEach(q => {
      const selected = examAnswers[q.id];
      const isRight = selected === q.correctAnswer;
      if (isRight) {
        correct++;
      } else {
        lastExamMissedQuestions.push({
          question: q,
          selectedAnswer: selected || 'Unanswered'
        });
      }

      if (breakdown[q.area]) {
        breakdown[q.area].total++;
        if (isRight) breakdown[q.area].correct++;
      }
    });

    const overallPct = Math.round((correct / total) * 100);
    const below60Subjects = Object.entries(breakdown).filter(([_, b]) => b.total > 0 && (b.correct / b.total) < 0.6);

    let resultStatus = "PASSED";
    let statusClass = "pass";
    let verdictNote = "Congratulations! You met the statutory requirements of Republic Act No. 9173 (GWA ≥ 75% with no subject rating below 60%).";

    if (overallPct >= 75 && below60Subjects.length > 0) {
      resultStatus = "CONDITIONAL (REMOVAL REQUIRED)";
      statusClass = "conditional";
      const failedNames = below60Subjects.map(([subj]) => subj).join(', ');
      verdictNote = `Under Sec. 15 of R.A. 9173, an examinee who obtains a GWA of 75% or higher but receives a rating below 60% in any subject (${failedNames}) is considered CONDITIONAL and must take a removal examination in the failed subject(s) within two (2) years.`;
    } else if (overallPct < 75) {
      resultStatus = "FAILED (RETAKE REQUIRED)";
      statusClass = "fail";
      verdictNote = "Your General Weighted Average did not reach the mandatory 75% board benchmark. Review your missed concepts in the Error Sheet below.";
    }

    const modal = document.getElementById('examResultModal');
    const modalContent = document.getElementById('examResultDetails');

    // Record exam result in persistent history
    const examRecord = {
      date: new Date().toISOString(),
      score: overallPct,
      correct: correct,
      total: total,
      status: resultStatus,
      statusClass: statusClass === 'pass' ? 'badge-teal' : (statusClass === 'conditional' ? 'badge-gold' : 'badge-crimson'),
      breakdown: breakdown
    };
    appState.recordExamResult(examRecord);
    renderExamHistory();

    if (modalContent) {
      modalContent.innerHTML = `
        <div class="prc-verdict-banner ${statusClass}">
          <div class="prc-verdict-badge">${resultStatus}</div>
          <h1 class="exam-result-score">${overallPct}%</h1>
          <p class="prc-verdict-note">${verdictNote}</p>
          <div class="text-sm mt-1"><strong>${correct} / ${total}</strong> questions answered correctly</div>
        </div>

        <div class="exam-breakdown-card">
          <h4 class="exam-breakdown-title">PRC Subject Competency Breakdown:</h4>
          ${Object.entries(breakdown).filter(([_, b]) => b.total > 0).map(([subj, b]) => {
            const subPct = Math.round((b.correct / b.total) * 100);
            const isSubPass = subPct >= 75;
            const isSubCrit = subPct < 60;
            const badgeClass = isSubCrit ? 'badge-crimson' : (isSubPass ? 'badge-teal' : 'badge-gold');
            return `
              <div class="exam-breakdown-row">
                <div>
                  <strong>${subj}</strong> <span class="text-xs text-secondary">• ${b.name}</span>
                </div>
                <span class="badge ${badgeClass}">
                  ${subPct}% (${b.correct}/${b.total})
                </span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Hook up exam result dialog buttons
    const printBtn = document.getElementById('examResultPrintBtn');
    const closeBtn = document.getElementById('examResultCloseBtn');

    if (printBtn) {
      printBtn.onclick = () => {
        soundManager.playClick();
        if (modal) modal.close();
        openPrintableReviewSheetWithMissed(lastExamMissedQuestions);
      };
    }

    if (closeBtn) {
      closeBtn.onclick = () => {
        soundManager.playClick();
        if (modal) modal.close();
        const startView = document.getElementById('examStartScreen');
        const runningView = document.getElementById('examRunningScreen');
        if (startView) startView.classList.remove('hidden');
        if (runningView) runningView.classList.remove('active');
        switchView('weak-areas');
      };
    }

    if (modal) modal.showModal();
  }

  function renderExamHistory() {
    const historyContainer = document.getElementById('examHistorySection');
    if (!historyContainer) return;

    const history = appState.getExamHistory();
    if (!history || history.length === 0) {
      historyContainer.innerHTML = `
        <div class="exam-history-empty">
          <p>No mock exam simulations recorded yet. Complete a timed drill above to begin tracking your pacing, subject accuracy, and passing trends!</p>
        </div>
      `;
      return;
    }

    const totalAttempts = history.length;
    const latestScore = history[0].score;
    const highestScore = Math.max(...history.map(h => h.score));
    const passCount = history.filter(h => h.score >= 75).length;
    const passRate = Math.round((passCount / totalAttempts) * 100);

    const trendCardsHtml = `
      <div class="exam-trend-grid">
        <div class="exam-trend-card">
          <span class="exam-trend-label">Latest Exam</span>
          <div class="exam-trend-score ${latestScore >= 75 ? 'score-pass' : 'score-fail'}">${latestScore}%</div>
          <span class="text-xs text-secondary">${history[0].correct}/${history[0].total} Correct</span>
        </div>
        <div class="exam-trend-card">
          <span class="exam-trend-label">Personal Best</span>
          <div class="exam-trend-score score-gold">${highestScore}%</div>
          <span class="text-xs text-secondary">Target: ≥75% PRC</span>
        </div>
        <div class="exam-trend-card">
          <span class="exam-trend-label">Pass Rate</span>
          <div class="exam-trend-score ${passRate >= 60 ? 'score-teal' : 'score-fail'}">${passRate}%</div>
          <span class="text-xs text-secondary">${passCount} of ${totalAttempts} Passed</span>
        </div>
        <div class="exam-trend-card">
          <span class="exam-trend-label">Total Drills</span>
          <div class="exam-trend-score">${totalAttempts}</div>
          <span class="text-xs text-secondary">Simulations Completed</span>
        </div>
      </div>
    `;

    const tableRowsHtml = history.map((rec, i) => {
      const d = new Date(rec.date);
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      return `
        <tr>
          <td><strong>Attempt #${totalAttempts - i}</strong></td>
          <td class="text-secondary">${dateStr}</td>
          <td><strong class="${rec.score >= 75 ? 'text-teal' : 'text-crimson'}">${rec.score}%</strong> (${rec.correct}/${rec.total})</td>
          <td><span class="badge ${rec.statusClass || (rec.score >= 75 ? 'badge-teal' : 'badge-crimson')}">${rec.status}</span></td>
        </tr>
      `;
    }).join('');

    historyContainer.innerHTML = `
      <div class="exam-history-card">
        <div class="exam-history-header">
          <h4 class="exam-history-title">📈 Simulation History & Trend Telemetry</h4>
          <button id="clearExamHistoryBtn" class="btn btn-sm btn-outline text-crimson" title="Clear all simulation attempts">Clear History</button>
        </div>
        ${trendCardsHtml}
        <div class="exam-history-table-wrap">
          <table class="exam-history-table">
            <thead>
              <tr>
                <th>Drill</th>
                <th>Date & Time</th>
                <th>Score</th>
                <th>Official Status</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const clearBtn = historyContainer.querySelector('#clearExamHistoryBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Clear all recorded mock exam history?")) {
          soundManager.playClick();
          appState.clearExamHistory();
          renderExamHistory();
        }
      });
    }
  }

  // ==========================================
  // VIEW 5: CLINICAL PEARLS & CALCULATORS
  // ==========================================
  function initCalculators() {
    // Clinical Pearls resource category filter pills
    const pearlPills = document.querySelectorAll('#pearlsFilterPills .filter-pill');
    pearlPills.forEach(pill => {
      pill.addEventListener('click', () => {
        soundManager.playClick();
        pearlPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.pearlCat;

        const allResourceCards = document.querySelectorAll('[data-resource]');
        allResourceCards.forEach(card => {
          if (cat === 'all') {
            card.classList.remove('hidden-resource');
          } else {
            const matches = card.dataset.resource === cat;
            card.classList.toggle('hidden-resource', !matches);
          }
        });
      });
    });

    const weightInput = document.getElementById('burnWeight');
    const tbsaInput = document.getElementById('burnTBSA');
    const burnCalcBtn = document.getElementById('burnCalcBtn');
    const burnTotalEl = document.getElementById('burnTotalVol');
    const burnFirst8El = document.getElementById('burnFirst8Vol');
    const burnFirst8RateEl = document.getElementById('burnFirst8Rate');

    if (burnCalcBtn) {
      burnCalcBtn.addEventListener('click', () => {
        soundManager.playClick();
        const weight = parseFloat(weightInput.value) || 0;
        const tbsa = parseFloat(tbsaInput.value) || 0;

        if (weight > 0 && tbsa > 0) {
          const totalVol = 4 * weight * tbsa;
          const first8Vol = totalVol / 2;
          const first8Rate = Math.round(first8Vol / 8);

          if (burnTotalEl) burnTotalEl.textContent = `${totalVol.toLocaleString()} mL`;
          if (burnFirst8El) burnFirst8El.textContent = `${first8Vol.toLocaleString()} mL`;
          if (burnFirst8RateEl) burnFirst8RateEl.textContent = `${first8Rate} mL/hr`;
        }
      });
    }

    const apgarSelects = document.querySelectorAll('.apgar-select');
    const apgarTotalEl = document.getElementById('apgarTotalScore');
    const apgarVerdictEl = document.getElementById('apgarVerdict');

    function updateApgar() {
      let total = 0;
      apgarSelects.forEach(sel => {
        total += parseInt(sel.value, 10) || 0;
      });

      if (apgarTotalEl) apgarTotalEl.textContent = `${total} / 10`;

      if (apgarVerdictEl) {
        if (total >= 7) {
          apgarVerdictEl.textContent = 'Normal / Vigorous (Routine EINC & Skin-to-Skin)';
          apgarVerdictEl.className = 'badge badge-teal';
        } else if (total >= 4) {
          apgarVerdictEl.textContent = 'Moderate Distress (Stimulate, Clear Airway, Oxygen)';
          apgarVerdictEl.className = 'badge badge-gold';
        } else {
          apgarVerdictEl.textContent = 'Severe Distress (Immediate Neonatal Resuscitation / PPV)';
          apgarVerdictEl.className = 'badge badge-crimson';
        }
      }
    }

    apgarSelects.forEach(sel => sel.addEventListener('change', () => {
      soundManager.playClick();
      updateApgar();
    }));

    const lmpInput = document.getElementById('lmpDateInput');
    const eddBtn = document.getElementById('calcEddBtn');
    const eddResultEl = document.getElementById('eddResultDate');

    if (eddBtn && lmpInput) {
      eddBtn.addEventListener('click', () => {
        soundManager.playClick();
        if (!lmpInput.value) return;

        const lmp = new Date(lmpInput.value);
        const edd = new Date(lmp);
        edd.setDate(edd.getDate() + 7);
        edd.setMonth(edd.getMonth() - 3);
        edd.setFullYear(edd.getFullYear() + 1);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if (eddResultEl) {
          eddResultEl.textContent = edd.toLocaleDateString('en-US', options);
        }
      });
    }

    // 4. Pediatric Dosage by Body Weight Calculator
    const pedsWeight = document.getElementById('pedsWeight');
    const pedsDosePerKg = document.getElementById('pedsDosePerKg');
    const pedsStockMg = document.getElementById('pedsStockMg');
    const pedsStockMl = document.getElementById('pedsStockMl');
    const pedsCalcBtn = document.getElementById('pedsCalcBtn');
    const pedsResultDose = document.getElementById('pedsResultDose');
    const pedsConcentration = document.getElementById('pedsConcentration');
    const pedsAdminRate = document.getElementById('pedsAdminRate');

    if (pedsCalcBtn && pedsWeight && pedsDosePerKg && pedsStockMg && pedsStockMl) {
      pedsCalcBtn.addEventListener('click', () => {
        soundManager.playClick();
        const wt = parseFloat(pedsWeight.value) || 0;
        const dose = parseFloat(pedsDosePerKg.value) || 0;
        const stockMg = parseFloat(pedsStockMg.value) || 0;
        const stockMl = parseFloat(pedsStockMl.value) || 0;

        if (wt > 0 && dose > 0 && stockMg > 0 && stockMl > 0) {
          const singleDoseMg = wt * dose;
          const conc = stockMg / stockMl;
          const adminMl = Math.round((singleDoseMg / conc) * 10) / 10;

          if (pedsResultDose) pedsResultDose.textContent = `${singleDoseMg} mg (${adminMl} mL)`;
          if (pedsConcentration) pedsConcentration.textContent = `${conc} mg/mL`;
          if (pedsAdminRate) pedsAdminRate.textContent = `${adminMl} mL per dose`;
        }
      });
    }

    // 5. Continuous IV Infusion & Pump Calculator
    const infusionTotalUnits = document.getElementById('infusionTotalUnits');
    const infusionBagMl = document.getElementById('infusionBagMl');
    const infusionOrderedRate = document.getElementById('infusionOrderedRate');
    const infusionCalcBtn = document.getElementById('infusionCalcBtn');
    const infusionResultRate = document.getElementById('infusionResultRate');
    const infusionBagConc = document.getElementById('infusionBagConc');

    if (infusionCalcBtn && infusionTotalUnits && infusionBagMl && infusionOrderedRate) {
      infusionCalcBtn.addEventListener('click', () => {
        soundManager.playClick();
        const total = parseFloat(infusionTotalUnits.value) || 0;
        const vol = parseFloat(infusionBagMl.value) || 0;
        const ordered = parseFloat(infusionOrderedRate.value) || 0;

        if (total > 0 && vol > 0 && ordered > 0) {
          const conc = total / vol;
          const rateMlHr = Math.round((ordered / conc) * 10) / 10;

          if (infusionResultRate) infusionResultRate.textContent = `${rateMlHr} mL/hr`;
          if (infusionBagConc) infusionBagConc.textContent = `${conc} units/mL`;
        }
      });
    }

    // Print summary notes button
    const printNotesBtn = document.getElementById('printNotesBtn');
    if (printNotesBtn) {
      printNotesBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // ==========================================
  // PHARMACOLOGY & DOSAGE PRACTICE DRILL
  // ==========================================
  function initCalculationDrill() {
    const drillTitle = document.getElementById('calcDrillTitle');
    const drillPrompt = document.getElementById('calcDrillPrompt');
    const drillCounter = document.getElementById('drillCounterBadge');
    const userInput = document.getElementById('calcDrillUserAnswer');
    const checkBtn = document.getElementById('calcDrillCheckBtn');
    const revealBtn = document.getElementById('calcDrillRevealBtn');
    const feedbackBox = document.getElementById('calcDrillFeedback');
    const solutionCard = document.getElementById('calcDrillSolution');
    const formulaText = document.getElementById('calcDrillFormulaText');
    const tipText = document.getElementById('calcDrillTipText');
    const prevBtn = document.getElementById('calcDrillPrevBtn');
    const nextBtn = document.getElementById('calcDrillNextBtn');

    if (!drillTitle || !CLINICAL_PEARLS.calculation_practice) return;

    function renderDrill() {
      const drill = CLINICAL_PEARLS.calculation_practice[currentCalcDrillIndex];
      if (!drill) return;

      if (drillCounter) drillCounter.textContent = `Problem ${currentCalcDrillIndex + 1} of ${CLINICAL_PEARLS.calculation_practice.length}`;
      if (drillTitle) drillTitle.textContent = drill.title;
      if (drillPrompt) drillPrompt.textContent = drill.problem;
      if (userInput) userInput.value = '';
      if (feedbackBox) {
        feedbackBox.classList.add('hidden');
        feedbackBox.textContent = '';
      }
      if (solutionCard) solutionCard.classList.add('hidden');
      if (formulaText) formulaText.innerHTML = `<strong>Formula:</strong> ${drill.formula}<br><strong>Result:</strong> <span class="calc-result-teal">${drill.stepByStep}</span>`;
      if (tipText) tipText.textContent = `💡 PNLE Board Pearl: ${drill.pearl}`;

      if (prevBtn) prevBtn.disabled = currentCalcDrillIndex === 0;
      if (nextBtn) nextBtn.disabled = currentCalcDrillIndex === CLINICAL_PEARLS.calculation_practice.length - 1;
    }

    if (checkBtn) {
      checkBtn.onclick = () => {
        const drill = CLINICAL_PEARLS.calculation_practice[currentCalcDrillIndex];
        if (!drill || !userInput) return;
        const val = userInput.value.trim().toLowerCase();
        if (!val) return;

        const expectedNum = parseFloat(drill.answer.replace(/[^0-9.]/g, ''));
        const userNum = parseFloat(val.replace(/[^0-9.]/g, ''));

        const isMatch = (!isNaN(expectedNum) && !isNaN(userNum) && Math.abs(expectedNum - userNum) < 0.6) ||
                        val.includes(drill.answer.toLowerCase());

        if (feedbackBox) {
          feedbackBox.classList.remove('hidden');
          if (isMatch) {
            soundManager.playCorrect();
            feedbackBox.className = 'drill-feedback correct';
            feedbackBox.innerHTML = `✅ <strong>Correct!</strong> Official Answer: <strong>${drill.answer}</strong>`;
            if (solutionCard) solutionCard.classList.remove('hidden');
          } else {
            soundManager.playIncorrect();
            feedbackBox.className = 'drill-feedback incorrect';
            feedbackBox.innerHTML = `❌ <strong>Not quite.</strong> You entered: ${val}. Target: <strong>${drill.answer}</strong>. Click "Reveal Solution" below to inspect the step-by-step formula.`;
          }
        }
      };
    }

    if (revealBtn) {
      revealBtn.onclick = () => {
        soundManager.playClick();
        if (solutionCard) solutionCard.classList.toggle('hidden');
      };
    }

    if (prevBtn) {
      prevBtn.onclick = () => {
        if (currentCalcDrillIndex > 0) {
          soundManager.playClick();
          currentCalcDrillIndex--;
          renderDrill();
        }
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        if (currentCalcDrillIndex < CLINICAL_PEARLS.calculation_practice.length - 1) {
          soundManager.playClick();
          currentCalcDrillIndex++;
          renderDrill();
        }
      };
    }

    renderDrill();
  }

  // ==========================================
  // UNIVERSAL LIVE SEARCH
  // ==========================================
  function initUniversalSearch() {
    const searchInput = document.getElementById('universalSearchInput');
    const dropdown = document.getElementById('universalSearchResults');
    if (!searchInput || !dropdown) return;

    let debounceTimer = null;

    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        dropdown.classList.add('hidden');
        dropdown.innerHTML = '';
        return;
      }

      debounceTimer = setTimeout(() => {
        const matchedQuestions = PNLE_QUESTIONS.filter(q => 
          q.question.toLowerCase().includes(query) ||
          (q.vignette && q.vignette.toLowerCase().includes(query)) ||
          q.topic.toLowerCase().includes(query) ||
          q.area.toLowerCase().includes(query)
        ).slice(0, 5);

        const matchedFlashcards = FLASHCARD_DECKS.filter(f =>
          f.front.toLowerCase().includes(query) ||
          f.back.toLowerCase().includes(query) ||
          (f.mnemonic && f.mnemonic.toLowerCase().includes(query)) ||
          f.category.toLowerCase().includes(query)
        ).slice(0, 4);

        const matchedLabs = CLINICAL_PEARLS.labValues.filter(l =>
          l.name.toLowerCase().includes(query) ||
          l.normal.toLowerCase().includes(query) ||
          l.highYieldTip.toLowerCase().includes(query)
        ).slice(0, 3);

        const totalMatches = matchedQuestions.length + matchedFlashcards.length + matchedLabs.length;

        if (totalMatches === 0) {
          dropdown.innerHTML = `<div class="search-no-results">No matching board review topics found for "${query}"</div>`;
          dropdown.classList.remove('hidden');
          return;
        }

        let html = '';

        if (matchedQuestions.length > 0) {
          html += `<div class="search-dropdown-group-title">📝 Practice Questions (${matchedQuestions.length})</div>`;
          matchedQuestions.forEach(q => {
            html += `
              <div class="search-item" data-type="question" data-id="${q.id}">
                <div class="search-item-header">
                  <span class="search-item-title">${q.topic}</span>
                  <span class="badge badge-cyan">${q.area}</span>
                </div>
                <div class="search-item-desc">${q.question}</div>
              </div>
            `;
          });
        }

        if (matchedFlashcards.length > 0) {
          html += `<div class="search-dropdown-group-title">🗂️ High-Yield Flashcards (${matchedFlashcards.length})</div>`;
          matchedFlashcards.forEach(f => {
            html += `
              <div class="search-item" data-type="flashcard" data-id="${f.id}">
                <div class="search-item-header">
                  <span class="search-item-title">${f.front}</span>
                  <span class="badge badge-teal">${f.category}</span>
                </div>
                <div class="search-item-desc">${f.back}</div>
              </div>
            `;
          });
        }

        if (matchedLabs.length > 0) {
          html += `<div class="search-dropdown-group-title">🧪 Normal Labs & Pearls (${matchedLabs.length})</div>`;
          matchedLabs.forEach(l => {
            html += `
              <div class="search-item" data-type="lab" data-name="${encodeURIComponent(l.name)}">
                <div class="search-item-header">
                  <span class="search-item-title">${l.name}</span>
                  <span class="badge badge-gold">${l.normal}</span>
                </div>
                <div class="search-item-desc">${l.highYieldTip}</div>
              </div>
            `;
          });
        }

        dropdown.innerHTML = html;
        dropdown.classList.remove('hidden');

        dropdown.querySelectorAll('.search-item').forEach(item => {
          item.addEventListener('click', () => {
            soundManager.playClick();
            const type = item.dataset.type;
            dropdown.classList.add('hidden');
            searchInput.value = '';

            if (type === 'question') {
              const qId = item.dataset.id;
              const targetIndex = PNLE_QUESTIONS.findIndex(q => q.id === qId);
              if (targetIndex !== -1) {
                switchView('practice');
                currentQuestions = [...PNLE_QUESTIONS];
                activeFilter = 'all';
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.area === 'all'));
                loadQuestion(targetIndex);
              }
            } else if (type === 'flashcard') {
              const fId = item.dataset.id;
              const targetIndex = FLASHCARD_DECKS.findIndex(f => f.id === fId);
              if (targetIndex !== -1) {
                switchView('flashcards');
                activeFlashcardDeck = [...FLASHCARD_DECKS];
                currentFlashcardIndex = targetIndex;
                isFlashcardFlipped = false;
                renderFlashcard();
              }
            } else if (type === 'lab') {
              switchView('pearls');
              const labInput = document.getElementById('labSearchInput');
              if (labInput) {
                labInput.value = decodeURIComponent(item.dataset.name);
                labInput.dispatchEvent(new Event('input'));
                labInput.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        });
      }, 200);
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  // ==========================================
  // HIGH-YIELD BOARD CRAM SHEETS MODAL
  // ==========================================
  function initCramSheets() {
    const modal = document.getElementById('cramSheetsModal');
    const headerBtn = document.getElementById('headerCramSheetsBtn');
    const closeBtn = document.getElementById('closeCramModalBtn');
    const printBtn = document.getElementById('printCramModalBtn');
    if (!modal) return;

    if (headerBtn) {
      headerBtn.addEventListener('click', () => {
        soundManager.playClick();
        modal.showModal();
        renderCramContent();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        soundManager.playClick();
        modal.close();
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const tabBtns = modal.querySelectorAll('.cram-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playClick();
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.cramTab;

        modal.querySelectorAll('.cram-tab-content').forEach(content => {
          content.classList.toggle('active', content.id === `cramTab-${target}`);
        });
      });
    });

    // ABG Evaluator
    const phInput = document.getElementById('abgPhInput');
    const paco2Input = document.getElementById('abgPaco2Input');
    const hco3Input = document.getElementById('abgHco3Input');
    const verdictTitle = document.getElementById('abgVerdictTitle');
    const verdictDesc = document.getElementById('abgVerdictExplanation');

    function updateABGEvaluation() {
      if (!phInput || !paco2Input || !hco3Input || !verdictTitle || !verdictDesc) return;
      const ph = parseFloat(phInput.value) || 7.40;
      const paco2 = parseFloat(paco2Input.value) || 40;
      const hco3 = parseFloat(hco3Input.value) || 24;

      let diagnosis = '';
      let explanation = '';

      const isAcidPh = ph < 7.35;
      const isAlkPh = ph > 7.45;

      const isAcidPaco2 = paco2 > 45;
      const isAlkPaco2 = paco2 < 35;
      const isNormalPaco2 = !isAcidPaco2 && !isAlkPaco2;

      const isAcidHco3 = hco3 < 22;
      const isAlkHco3 = hco3 > 26;
      const isNormalHco3 = !isAcidHco3 && !isAlkHco3;

      if (isAcidPh) {
        if (isAcidPaco2 && isNormalHco3) {
          diagnosis = 'Uncompensated Respiratory Acidosis';
          explanation = 'pH is acid (<7.35), PaCO2 is acid (>45 mmHg - Respiratory Opposite), and HCO3 is normal (no renal compensation yet). Common in COPD, hypoventilation, airway obstruction, CNS depression.';
        } else if (isAcidPaco2 && isAlkHco3) {
          diagnosis = 'Partially Compensated Respiratory Acidosis';
          explanation = 'pH remains acid (<7.35) due to respiratory cause (PaCO2 > 45), but kidneys are retaining bicarbonate (HCO3 > 26) to attempt neutralization.';
        } else if (isAcidHco3 && isNormalPaco2) {
          diagnosis = 'Uncompensated Metabolic Acidosis';
          explanation = 'pH is acid (<7.35), HCO3 is low (<22 mEq/L - Metabolic Equal), and PaCO2 is normal. Common in DKA, severe diarrhea, renal failure, lactic acidosis.';
        } else if (isAcidHco3 && isAlkPaco2) {
          diagnosis = 'Partially Compensated Metabolic Acidosis';
          explanation = 'pH is acid (<7.35) from metabolic base loss (HCO3 < 22), but lungs are hyperventilating (PaCO2 < 35 mmHg - Kussmaul respirations) to blow off acid.';
        } else if (isAcidPaco2 && isAcidHco3) {
          diagnosis = 'Combined (Mixed) Respiratory & Metabolic Acidosis';
          explanation = 'Severe cardiopulmonary arrest state where both lungs and metabolic buffering fail simultaneously.';
        } else {
          diagnosis = 'Acidemia (Borderline Compensation)';
          explanation = 'pH is below normal threshold. Evaluate underlying clinical history.';
        }
      } else if (isAlkPh) {
        if (isAlkPaco2 && isNormalHco3) {
          diagnosis = 'Uncompensated Respiratory Alkalosis';
          explanation = 'pH is alkalotic (>7.45), PaCO2 is low (<35 mmHg - hyperventilation/anxiety/pain), HCO3 is normal.';
        } else if (isAlkPaco2 && isAcidHco3) {
          diagnosis = 'Partially Compensated Respiratory Alkalosis';
          explanation = 'pH remains alkalotic (>7.45), PaCO2 is low (<35), but kidneys are excreting bicarbonate (HCO3 < 22).';
        } else if (isAlkHco3 && isNormalPaco2) {
          diagnosis = 'Uncompensated Metabolic Alkalosis';
          explanation = 'pH is alkalotic (>7.45), HCO3 is elevated (>26 mEq/L), PaCO2 is normal. Common with NG suctioning, prolonged vomiting, excessive antacids.';
        } else if (isAlkHco3 && isAcidPaco2) {
          diagnosis = 'Partially Compensated Metabolic Alkalosis';
          explanation = 'pH is alkalotic (>7.45) from high base (HCO3 > 26), and lungs are hypoventilating (PaCO2 > 45) to retain acid.';
        } else {
          diagnosis = 'Alkalemia (Borderline Compensation)';
          explanation = 'pH is elevated above 7.45.';
        }
      } else {
        // Normal pH (7.35 - 7.45)
        if (isNormalPaco2 && isNormalHco3) {
          diagnosis = 'Normal Arterial Blood Gas';
          explanation = 'All parameters (pH 7.35-7.45, PaCO2 35-45, HCO3 22-26) are within safe physiologic homeostasis.';
        } else if (ph <= 7.40 && (isAcidPaco2 || isAcidHco3)) {
          if (isAcidPaco2 && isAlkHco3) {
            diagnosis = 'Fully Compensated Respiratory Acidosis';
            explanation = 'pH has been restored to normal range (7.35-7.40), with chronic retention of CO2 (>45) compensated by elevated renal HCO3 (>26). Typical of stable chronic COPD.';
          } else {
            diagnosis = 'Fully Compensated Metabolic Acidosis';
            explanation = 'pH is normalized on the acidic side (7.35-7.40), with low HCO3 compensated by respiratory blowing off of PaCO2.';
          }
        } else if (ph > 7.40 && (isAlkPaco2 || isAlkHco3)) {
          if (isAlkPaco2 && isAcidHco3) {
            diagnosis = 'Fully Compensated Respiratory Alkalosis';
            explanation = 'pH is normalized on the alkaline side (7.40-7.45) with low PaCO2 compensated by low HCO3.';
          } else {
            diagnosis = 'Fully Compensated Metabolic Alkalosis';
            explanation = 'pH is normalized on the alkaline side (7.40-7.45) with elevated HCO3 compensated by hypoventilation (PaCO2 > 45).';
          }
        } else {
          diagnosis = 'Compensated Acid-Base State';
          explanation = 'pH is maintained within 7.35 - 7.45 normal range.';
        }
      }

      verdictTitle.textContent = diagnosis;
      verdictDesc.textContent = explanation;
    }

    [phInput, paco2Input, hco3Input].forEach(inp => {
      if (inp) inp.addEventListener('input', updateABGEvaluation);
    });

    updateABGEvaluation();

    function renderCramContent() {
      const cramLabsTbody = document.getElementById('cramLabsTbody');
      const cramLabSearch = document.getElementById('cramLabSearch');
      if (cramLabsTbody && CLINICAL_PEARLS.labValues) {
        function renderLabRows(labs) {
          cramLabsTbody.innerHTML = labs.map(l => `
            <tr>
              <td><strong>${l.name}</strong></td>
              <td><span class="badge badge-cyan">${l.normal}</span></td>
              <td class="text-sm">${l.highYieldTip}</td>
            </tr>
          `).join('');
        }
        renderLabRows(CLINICAL_PEARLS.labValues);

        if (cramLabSearch) {
          cramLabSearch.oninput = (e) => {
            const q = e.target.value.toLowerCase();
            const filtered = CLINICAL_PEARLS.labValues.filter(l =>
              l.name.toLowerCase().includes(q) ||
              l.normal.toLowerCase().includes(q) ||
              l.highYieldTip.toLowerCase().includes(q)
            );
            renderLabRows(filtered);
          };
        }
      }

      const maternalContent = document.getElementById('cramMaternalContent');
      if (maternalContent && CLINICAL_PEARLS.maternal_milestones) {
        const mm = CLINICAL_PEARLS.maternal_milestones;
        maternalContent.innerHTML = `
          <div class="cram-block-card">
            <div class="cram-block-title">🤰 Fundic Height Milestones (McDonald's Rule)</div>
            <table class="cram-block-table">
              <thead><tr><th>Gestational Age</th><th>Anatomical Landmark</th><th>Clinical Significance</th></tr></thead>
              <tbody>
                ${mm.fundic_height.map(f => `<tr><td><strong>${f.weeks}</strong></td><td>${f.landmark}</td><td class="text-secondary">${f.pearl}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>

          <div class="cram-block-card">
            <div class="cram-block-title">👶 Developmental Milestones (Gross & Fine Motor)</div>
            <table class="cram-block-table">
              <thead><tr><th>Age</th><th>Motor Skill</th><th>Red Flag / Safety Pearl</th></tr></thead>
              <tbody>
                ${mm.developmental_milestones.map(d => `<tr><td><strong>${d.age}</strong></td><td>${d.skill}</td><td class="text-secondary">${d.red_flag}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      const triageContent = document.getElementById('cramTriageContent');
      if (triageContent && CLINICAL_PEARLS.start_triage) {
        const st = CLINICAL_PEARLS.start_triage;
        triageContent.innerHTML = `
          <div class="cram-block-card">
            <div class="cram-block-title">🚨 START Algorithm Hierarchy (RPM: Respiration, Perfusion, Mental Status)</div>
            <p class="text-sm text-secondary">Simple Triage and Rapid Treatment: Evaluated within 30 seconds per casualty.</p>
            <table class="cram-block-table">
              <thead><tr><th>Tag</th><th>Category</th><th>Clinical Criteria</th><th>PNLE Action</th></tr></thead>
              <tbody>
                ${st.map(t => {
                  let badgeCls = t.tag === 'RED' ? 'triage-badge-red' : (t.tag === 'YELLOW' ? 'triage-badge-yellow' : (t.tag === 'GREEN' ? 'triage-badge-green' : 'triage-badge-black'));
                  return `<tr>
                    <td><span class="${badgeCls}">${t.tag}</span></td>
                    <td><strong>${t.category}</strong></td>
                    <td>${t.criteria}</td>
                    <td class="text-secondary">${t.action}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      const lawsContent = document.getElementById('cramLawsContent');
      if (lawsContent && CLINICAL_PEARLS.philippine_laws) {
        lawsContent.innerHTML = `
          <div class="cram-block-card">
            <div class="cram-block-title">📜 High-Yield Philippine Nursing & Health Jurisprudence</div>
            <table class="cram-block-table">
              <thead><tr><th>Law</th><th>Title</th><th>High-Yield PNLE Statutory Mandate</th></tr></thead>
              <tbody>
                ${CLINICAL_PEARLS.philippine_laws.map(l => `
                  <tr>
                    <td><span class="badge badge-purple">${l.law}</span></td>
                    <td><strong>${l.title}</strong></td>
                    <td class="text-secondary">${l.pearl}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }
    }
  }

  // ==========================================
  // PRINTABLE REVIEW SHEET & ERROR LOG
  // ==========================================
  let activeReviewFilter = 'wrong';
  let customReviewQuestions = null;

  function openPrintableReviewSheetWithMissed(missedList) {
    customReviewQuestions = missedList;
    const modal = document.getElementById('printableReviewModal');
    if (modal) {
      modal.showModal();
      renderReviewSheetTable();
    }
  }

  function initPrintableReviewSheet() {
    const modal = document.getElementById('printableReviewModal');
    const headerBtn = document.getElementById('headerPrintErrorLogBtn');
    const closeBtn = document.getElementById('closeReviewModalBtn');
    const printBtn = document.getElementById('triggerPrintBtn');
    if (!modal) return;

    if (headerBtn) {
      headerBtn.addEventListener('click', () => {
        soundManager.playClick();
        customReviewQuestions = null;
        modal.showModal();
        renderReviewSheetTable();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        soundManager.playClick();
        modal.close();
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const filterPills = modal.querySelectorAll('[data-review-filter]');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        soundManager.playClick();
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeReviewFilter = pill.dataset.reviewFilter;
        customReviewQuestions = null;
        renderReviewSheetTable();
      });
    });
  }

  function renderReviewSheetTable() {
    const container = document.getElementById('reviewSheetContent');
    const wrongCountEl = document.getElementById('reviewWrongCount');
    const flagCountEl = document.getElementById('reviewFlagCount');
    const bookmarkCountEl = document.getElementById('reviewBookmarkCount');
    if (!container) return;

    const incorrectIds = appState.getIncorrectQuestionIds ? appState.getIncorrectQuestionIds() : [];
    const flaggedIds = appState.flags ? [...appState.flags] : [];
    const bookmarkedIds = appState.bookmarks ? [...appState.bookmarks] : [];

    if (wrongCountEl) wrongCountEl.textContent = incorrectIds.length;
    if (flagCountEl) flagCountEl.textContent = flaggedIds.length;
    if (bookmarkCountEl) bookmarkCountEl.textContent = bookmarkedIds.length;

    let itemsToRender = [];

    if (customReviewQuestions && customReviewQuestions.length > 0) {
      itemsToRender = customReviewQuestions.map(item => ({
        question: item.question,
        selectedAnswer: item.selectedAnswer,
        correctAnswer: item.question.correctAnswer
      }));
    } else if (activeReviewFilter === 'wrong') {
      itemsToRender = incorrectIds.map(id => {
        const q = PNLE_QUESTIONS.find(item => item.id === id);
        const ans = appState.getAnswer(id);
        return q ? { question: q, selectedAnswer: ans ? ans.selectedId : 'Unanswered', correctAnswer: q.correctAnswer } : null;
      }).filter(Boolean);
    } else if (activeReviewFilter === 'flagged') {
      itemsToRender = flaggedIds.map(id => {
        const q = PNLE_QUESTIONS.find(item => item.id === id);
        const ans = appState.getAnswer(id);
        return q ? { question: q, selectedAnswer: ans ? ans.selectedId : 'Unanswered', correctAnswer: q.correctAnswer } : null;
      }).filter(Boolean);
    } else {
      itemsToRender = bookmarkedIds.map(id => {
        const q = PNLE_QUESTIONS.find(item => item.id === id);
        const ans = appState.getAnswer(id);
        return q ? { question: q, selectedAnswer: ans ? ans.selectedId : 'Unanswered', correctAnswer: q.correctAnswer } : null;
      }).filter(Boolean);
    }

    if (itemsToRender.length === 0) {
      container.innerHTML = `
        <div class="empty-practice-card">
          <p class="empty-card-text">No items recorded in this review category yet! Complete a practice set or mock exam to populate your error remediation sheet.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <table class="review-sheet-table">
        <thead>
          <tr>
            <th style="width: 14%;">Subject & Topic</th>
            <th style="width: 48%;">Clinical Scenario & Question</th>
            <th style="width: 18%;">Your Answer vs Correct</th>
            <th style="width: 20%;">Clinical Pearl & Rationale</th>
          </tr>
        </thead>
        <tbody>
          ${itemsToRender.map((row, idx) => {
            const q = row.question;
            const correctOpt = q.options.find(o => o.id === q.correctAnswer);
            const userOpt = q.options.find(o => o.id === row.selectedAnswer);
            return `
              <tr>
                <td>
                  <span class="badge badge-cyan">${q.area}</span><br>
                  <strong class="text-xs">${q.topic}</strong>
                </td>
                <td>
                  ${q.vignette ? `<div class="review-row-vignette">${q.vignette}</div>` : ''}
                  <div class="review-row-stem">${idx + 1}. ${q.question}</div>
                </td>
                <td>
                  <div>Your: <span class="review-pill-wrong">${row.selectedAnswer}: ${userOpt ? userOpt.text : 'None'}</span></div>
                  <div class="mt-1">Correct: <span class="review-pill-right">${q.correctAnswer}: ${correctOpt ? correctOpt.text : ''}</span></div>
                </td>
                <td>
                  <div class="review-pearl-text">${q.rationale.whyCorrect}</div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  function renderLabValuesTable() {
    const tbody = document.getElementById('labValuesTbody');
    const searchInput = document.getElementById('labSearchInput');
    if (!tbody) return;

    function renderRows(filteredLabs) {
      tbody.innerHTML = filteredLabs.map(lab => `
        <tr>
          <td class="lab-table-name">${lab.name}</td>
          <td class="lab-table-value">${lab.normal}</td>
          <td class="lab-table-tip">${lab.highYieldTip}</td>
        </tr>
      `).join('');
    }

    renderRows(CLINICAL_PEARLS.labValues);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const matches = CLINICAL_PEARLS.labValues.filter(l => 
          l.name.toLowerCase().includes(query) || 
          l.highYieldTip.toLowerCase().includes(query)
        );
        renderRows(matches);
      });
    }
  }

  // ==========================================
  // GLOBAL LISTENERS
  // ==========================================
  function setupEventListeners() {
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchView(tab.dataset.view);
      });
    });

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        const enabled = soundManager.toggleSound();
        soundToggleBtn.innerHTML = enabled ? '🔊' : '🔇';
        soundToggleBtn.title = enabled ? 'Sound enabled' : 'Sound muted';
      });
    }

    // Reset Progress Modal & Actions
    const resetModal = document.getElementById('resetConfirmModal');
    const resetHeaderBtn = document.getElementById('resetProgressBtn');
    const resetViewBtn = document.getElementById('resetProgressViewBtn');
    const closeResetModalBtn = document.getElementById('closeResetModalBtn');
    const cancelResetBtn = document.getElementById('cancelResetBtn');
    const confirmResetBtn = document.getElementById('confirmResetBtn');

    const openResetModal = () => {
      soundManager.playClick();
      if (resetModal) resetModal.showModal();
    };

    if (resetHeaderBtn) resetHeaderBtn.addEventListener('click', openResetModal);
    if (resetViewBtn) resetViewBtn.addEventListener('click', openResetModal);

    if (closeResetModalBtn) {
      closeResetModalBtn.addEventListener('click', () => {
        soundManager.playClick();
        if (resetModal) resetModal.close();
      });
    }

    if (cancelResetBtn) {
      cancelResetBtn.addEventListener('click', () => {
        soundManager.playClick();
        if (resetModal) resetModal.close();
      });
    }

    if (confirmResetBtn) {
      confirmResetBtn.addEventListener('click', () => {
        soundManager.playComplete();
        appState.resetAll();
        if (resetModal) resetModal.close();
        renderHeaderStats();
        renderRoadmapView();
        renderPracticeView();
        renderWeakAreasView();
        initFlashcards();
      });
    }

    const prevBtn = document.getElementById('qPrevBtn');
    const nextBtn = document.getElementById('qNextBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        soundManager.playClick();
        loadQuestion(currentQuestionIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        soundManager.playClick();
        loadQuestion(currentQuestionIndex + 1);
      });
    }

    const startExamBtn = document.getElementById('startMockExamBtn');
    const submitExamBtn = document.getElementById('submitExamBtn');
    const closeResultModalBtn = document.getElementById('closeResultModalBtn');

    if (startExamBtn) startExamBtn.addEventListener('click', startMockExam);
    if (submitExamBtn) submitExamBtn.addEventListener('click', submitExam);
    if (closeResultModalBtn) {
      closeResultModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('examResultModal');
        if (modal) modal.close();
        const startView = document.getElementById('examStartScreen');
        const runningView = document.getElementById('examRunningScreen');
        if (startView) startView.classList.remove('hidden');
        if (runningView) runningView.classList.remove('active');
        switchView('weak-areas');
      });
    }

    const examPrevBtn = document.getElementById('examPrevBtn');
    const examNextBtn = document.getElementById('examNextBtn');
    if (examPrevBtn) {
      examPrevBtn.addEventListener('click', () => {
        soundManager.playClick();
        loadExamQuestion(examCurrentIndex - 1);
      });
    }
    if (examNextBtn) {
      examNextBtn.addEventListener('click', () => {
        soundManager.playClick();
        loadExamQuestion(examCurrentIndex + 1);
      });
    }

    // Top action bar buttons (Timed, Auto-advance, Next Unanswered)
    const timedModeBtn = document.getElementById('qTimedModeBtn');
    if (timedModeBtn) timedModeBtn.addEventListener('click', () => {
      soundManager.playClick();
      toggleTimedMode();
    });

    const autoAdvanceBtn = document.getElementById('qAutoAdvanceBtn');
    if (autoAdvanceBtn) autoAdvanceBtn.addEventListener('click', () => {
      soundManager.playClick();
      toggleAutoAdvance();
    });

    const nextUnansweredBtn = document.getElementById('qNextUnansweredBtn');
    if (nextUnansweredBtn) nextUnansweredBtn.addEventListener('click', () => {
      soundManager.playClick();
      jumpToNextUnanswered();
    });

    // Session Complete Modal Actions
    const sessionReviewMistakesBtn = document.getElementById('sessionReviewMistakesBtn');
    if (sessionReviewMistakesBtn) {
      sessionReviewMistakesBtn.addEventListener('click', () => {
        soundManager.playClick();
        const modal = document.getElementById('sessionCompleteModal');
        if (modal) modal.close();
        switchView('practice');
        filterPracticeByArea('wrong');
      });
    }

    const sessionRoadmapBtn = document.getElementById('sessionRoadmapBtn');
    if (sessionRoadmapBtn) {
      sessionRoadmapBtn.addEventListener('click', () => {
        soundManager.playClick();
        const modal = document.getElementById('sessionCompleteModal');
        if (modal) modal.close();
        switchView('roadmap');
      });
    }

    const sessionKeepPracticingBtn = document.getElementById('sessionKeepPracticingBtn');
    if (sessionKeepPracticingBtn) {
      sessionKeepPracticingBtn.addEventListener('click', () => {
        soundManager.playClick();
        const modal = document.getElementById('sessionCompleteModal');
        if (modal) modal.close();
        switchView('practice');
        filterPracticeByArea('all');
      });
    }

    // Rapid keyboard navigation for high-yield review
    document.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const practiceActive = document.getElementById('view-practice')?.classList.contains('active');
      const flashcardsActive = document.getElementById('view-flashcards')?.classList.contains('active');

      if (practiceActive) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          soundManager.playClick();
          loadQuestion(currentQuestionIndex + 1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          soundManager.playClick();
          loadQuestion(currentQuestionIndex - 1);
        } else if (['1', '2', '3', '4', 'a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
          const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
          const letter = keyMap[e.key];
          const optCard = document.querySelector(`.option-card[data-option-id="${letter}"]`);
          if (optCard && !optCard.classList.contains('locked')) {
            e.preventDefault();
            const q = currentQuestions[currentQuestionIndex];
            if (q) selectOption(q, letter);
          }
        }
      } else if (flashcardsActive) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          soundManager.playClick();
          navigateFlashcard(1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          soundManager.playClick();
          navigateFlashcard(-1);
        }
      }
    });
  }

  // Start app
  initApp();
});
