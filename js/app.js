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
  let examTimerInterval = null;
  let examSecondsRemaining = 1200; // 20 minutes default drill

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
      renderLabValuesTable();
      initCaseStudies();
      initFlashcards();
      renderExamHistory();
      updatePillBadges();
    } catch (err) {
      console.error("App initialization failed:", err);
      showErrorBanner(`Failed to initialize application: ${err.message}. Please reload the page.`);
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('pasado_theme_v1') || localStorage.getItem('pasado_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pasado_theme_v1', next);
    localStorage.setItem('pasado_theme', next);
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

  function startMockExam() {
    examQuestions = shuffleArray(PNLE_QUESTIONS);
    examCurrentIndex = 0;
    examAnswers = {};
    examSecondsRemaining = 1200; // 20 mins

    const startView = document.getElementById('examStartScreen');
    const runningView = document.getElementById('examRunningScreen');
    if (startView) startView.classList.add('hidden');
    if (runningView) runningView.classList.add('active');

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
      }
    }, 1000);
  }

  function renderExamNavGrid() {
    const grid = document.getElementById('examNavGrid');
    if (!grid) return;

    grid.innerHTML = '';
    examQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = `exam-nav-btn ${examAnswers[q.id] ? 'answered' : ''} ${idx === examCurrentIndex ? 'current' : ''}`;
      btn.textContent = idx + 1;
      btn.addEventListener('click', () => {
        loadExamQuestion(idx);
      });
      grid.appendChild(btn);
    });
  }

  function loadExamQuestion(index) {
    examCurrentIndex = index;
    const q = examQuestions[index];

    const stem = document.getElementById('examStem');
    const vignette = document.getElementById('examVignette');
    const optionsContainer = document.getElementById('examOptions');
    const questionNum = document.getElementById('examQuestionNum');

    if (questionNum) questionNum.textContent = `Question ${index + 1} of ${examQuestions.length} (${q.area})`;
    if (vignette) vignette.textContent = q.vignette;
    if (stem) stem.textContent = q.question;

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
    soundManager.playComplete();

    let total = examQuestions.length;
    let correct = 0;
    const breakdown = {
      "NP I": { total: 0, correct: 0 },
      "NP II": { total: 0, correct: 0 },
      "NP III": { total: 0, correct: 0 },
      "NP IV": { total: 0, correct: 0 },
      "NP V": { total: 0, correct: 0 },
      "Jurisprudence": { total: 0, correct: 0 }
    };

    examQuestions.forEach(q => {
      const selected = examAnswers[q.id];
      const isRight = selected === q.correctAnswer;
      if (isRight) correct++;

      if (breakdown[q.area]) {
        breakdown[q.area].total++;
        if (isRight) breakdown[q.area].correct++;
      }
    });

    const overallPct = Math.round((correct / total) * 100);
    const anyBelow60 = Object.values(breakdown).some(b => b.total > 0 && (b.correct / b.total) < 0.6);

    let resultStatus = "PASSED";
    let statusClass = "badge-teal";
    if (overallPct >= 75 && anyBelow60) {
      resultStatus = "CONDITIONAL (Retake subjects <60%)";
      statusClass = "badge-gold";
    } else if (overallPct < 75) {
      resultStatus = "FAILED";
      statusClass = "badge-crimson";
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
      statusClass: statusClass,
      breakdown: breakdown
    };
    appState.recordExamResult(examRecord);
    renderExamHistory();

    if (modalContent) {
      modalContent.innerHTML = `
        <div class="exam-result-summary">
          <span class="badge ${statusClass} exam-result-badge">
            ${resultStatus}
          </span>
          <h1 class="exam-result-score">${overallPct}%</h1>
          <p>Score: <strong>${correct} / ${total}</strong> questions correct</p>
        </div>

        <div class="exam-breakdown-card">
          <h4 class="exam-breakdown-title">Subject Performance (PRC Standard):</h4>
          ${Object.entries(breakdown).filter(([_, b]) => b.total > 0).map(([subj, b]) => {
            const subPct = Math.round((b.correct / b.total) * 100);
            const isSubPass = subPct >= 75;
            const isSubCrit = subPct < 60;
            return `
              <div class="exam-breakdown-row">
                <span>${subj}</span>
                <span class="badge ${isSubCrit ? 'badge-crimson' : (isSubPass ? 'badge-teal' : 'badge-gold')}">
                  ${subPct}% (${b.correct}/${b.total})
                </span>
              </div>
            `;
          }).join('')}
        </div>
      `;
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

    // Print summary notes button
    const printNotesBtn = document.getElementById('printNotesBtn');
    if (printNotesBtn) {
      printNotesBtn.addEventListener('click', () => {
        window.print();
      });
    }
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
