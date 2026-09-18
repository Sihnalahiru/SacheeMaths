/**
 * SACHEE MATHS — Progress & Daily Goals Engine (Batch 3)
 * Exposes window.SACHEE_PROGRESS
 */
(function (window) {
  'use strict';

  const DEFAULT_DAILY_GOAL = 20;

  /**
   * Helper: Formats a date object to ISO local date string (YYYY-MM-DD).
   * Prevents UTC midnight boundary shifts.
   */
  function getLocalDateString(dateObj = new Date()) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Helper: Retrieve all stored attempts from window.SACHEE_STORAGE.
   */
  function getAllAttempts() {
    if (window.SACHEE_STORAGE && typeof window.SACHEE_STORAGE.getAttempts === 'function') {
      return window.SACHEE_STORAGE.getAttempts() || [];
    }
    return [];
  }

  /**
   * Safe calculation for accuracy percentage.
   */
  function calculateAccuracy(correct, total) {
    if (!total || total === 0) return 0;
    return Math.round((correct / total) * 100);
  }

  const ProgressEngine = {
    getLocalDateString,

    getDailyGoal() {
      if (window.SACHEE_STORAGE && typeof window.SACHEE_STORAGE.getSettings === 'function') {
        const settings = window.SACHEE_STORAGE.getSettings() || {};
        return settings.dailyGoal || DEFAULT_DAILY_GOAL;
      }
      return DEFAULT_DAILY_GOAL;
    },

    setDailyGoal(goal) {
      const parsedGoal = parseInt(goal, 10);
      if (isNaN(parsedGoal) || parsedGoal <= 0) return false;

      if (window.SACHEE_STORAGE && typeof window.SACHEE_STORAGE.getSettings === 'function' && typeof window.SACHEE_STORAGE.saveSettings === 'function') {
        const settings = window.SACHEE_STORAGE.getSettings() || {};
        settings.dailyGoal = parsedGoal;
        window.SACHEE_STORAGE.saveSettings(settings);
        return true;
      }
      return false;
    },

    getAttemptCount(attempts = getAllAttempts()) {
      return attempts.length;
    },

    getCorrectCount(attempts = getAllAttempts()) {
      return attempts.filter(a => a.isCorrect === true || a.correct === true).length;
    },

    getIncorrectCount(attempts = getAllAttempts()) {
      return attempts.filter(a => a.isCorrect === false || a.correct === false).length;
    },

    getAccuracy(attempts = getAllAttempts()) {
      const correct = this.getCorrectCount(attempts);
      const total = attempts.length;
      return calculateAccuracy(correct, total);
    },

    getCompletedUnits(attempts = getAllAttempts()) {
      const uniqueUnits = new Set();
      attempts.forEach(a => {
        const unitId = a.unitId || a.questionUnitId;
        if (unitId) uniqueUnits.add(unitId);
      });
      return uniqueUnits.size;
    },

    getTodayProgress() {
      const todayStr = getLocalDateString();
      const attempts = getAllAttempts();
      const todayAttempts = attempts.filter(a => {
        const attemptDate = a.timestamp 
          ? getLocalDateString(new Date(a.timestamp)) 
          : (a.dateKey || '');
        return attemptDate === todayStr;
      });

      const attemptedCount = todayAttempts.length;
      const correctCount = this.getCorrectCount(todayAttempts);
      const accuracy = this.getAccuracy(todayAttempts);
      const goal = this.getDailyGoal();
      const percentComplete = Math.min(Math.round((attemptedCount / goal) * 100), 100);

      let status = 'Not Started';
      if (attemptedCount >= goal) {
        status = 'Goal Reached';
      } else if (attemptedCount > 0) {
        status = 'In Progress';
      }

      return {
        date: todayStr,
        attemptedCount,
        correctCount,
        accuracy,
        goal,
        percentComplete,
        status
      };
    },

    getDailyGoalProgress() {
      return this.getTodayProgress();
    },

    getChapterProgress(chapterId) {
      if (!chapterId) return null;
      const allAttempts = getAllAttempts();
      const chapterAttempts = allAttempts.filter(a => a.chapterId === chapterId);

      let totalUnits = 0;
      if (window.SACHEE_DATA && typeof window.SACHEE_DATA.getChapterQuestionUnits === 'function') {
        totalUnits = window.SACHEE_DATA.getChapterQuestionUnits(chapterId).length;
      } else if (window.SACHEE_DATA && Array.isArray(window.SACHEE_DATA.chapters)) {
        const ch = window.SACHEE_DATA.chapters.find(c => c.id === chapterId);
        totalUnits = ch ? (ch.questionUnitCount || 0) : 0;
      }

      const attemptedUnitsSet = new Set();
      chapterAttempts.forEach(a => {
        const unitId = a.unitId || a.questionUnitId;
        if (unitId) attemptedUnitsSet.add(unitId);
      });

      const attemptedUnitsCount = attemptedUnitsSet.size;
      const correctCount = this.getCorrectCount(chapterAttempts);
      const totalAttempts = chapterAttempts.length;
      const accuracy = calculateAccuracy(correctCount, totalAttempts);
      const completionPercent = totalUnits > 0 ? Math.round((attemptedUnitsCount / totalUnits) * 100) : 0;

      return {
        chapterId,
        totalUnits,
        attemptedUnitsCount,
        totalAttempts,
        correctCount,
        accuracy,
        completionPercent,
        isCompleted: totalUnits > 0 && attemptedUnitsCount >= totalUnits
      };
    },

    getOverallProgress() {
      const attempts = getAllAttempts();
      const totalQuestionUnits = 933;
      const attemptedUnitsCount = this.getCompletedUnits(attempts);
      const totalAttempts = attempts.length;
      const correctCount = this.getCorrectCount(attempts);
      const incorrectCount = this.getIncorrectCount(attempts);
      const accuracy = calculateAccuracy(correctCount, totalAttempts);
      const completionPercent = Math.round((attemptedUnitsCount / totalQuestionUnits) * 100);

      let chaptersStarted = 0;
      let chaptersCompleted = 0;

      if (window.SACHEE_DATA && Array.isArray(window.SACHEE_DATA.chapters)) {
        window.SACHEE_DATA.chapters.forEach(ch => {
          const cp = this.getChapterProgress(ch.id);
          if (cp && cp.attemptedUnitsCount > 0) chaptersStarted++;
          if (cp && cp.isCompleted) chaptersCompleted++;
        });
      }

      return {
        totalQuestionUnits,
        attemptedUnitsCount,
        totalAttempts,
        correctCount,
        incorrectCount,
        accuracy,
        completionPercent,
        chaptersStarted,
        chaptersCompleted,
        totalChapters: 29
      };
    },

    getRecentActivity(limit = 5) {
      const attempts = getAllAttempts();
      return attempts
        .slice()
        .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
        .slice(0, limit);
    }
  };

  window.SACHEE_PROGRESS = ProgressEngine;
})(window);
