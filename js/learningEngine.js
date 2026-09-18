/**
 * SACHEE MATHS - Learning Engine Module (Batch 1 Foundation)
 * Leverages window.SACHEE_DATA registry to provide student learning flows.
 */
(function (window) {
  'use strict';

  if (!window.SACHEE_DATA) {
    console.error('SACHEE_DATA registry must be loaded before learningEngine.js');
    return;
  }

  var learningEngine = {
    // 1. Data Retrieval API (Delegated to SACHEE_DATA)
    getChapter: function (chapterId) {
      return window.SACHEE_DATA.getChapterById(chapterId) || null;
    },

    getChapterQuestions: function (chapterId) {
      return window.SACHEE_DATA.getQuestionsByChapter(chapterId) || [];
    },

    getChapterExamples: function (chapterId) {
      return window.SACHEE_DATA.getExamplesByChapter(chapterId) || [];
    },

    getChapterVisuals: function (chapterId) {
      return window.SACHEE_DATA.getVisualsByChapter(chapterId) || [];
    },

    getQuestion: function (questionId) {
      return window.SACHEE_DATA.getMainQuestionById(questionId) || null;
    },

    getSubQuestion: function (subQuestionId) {
      return window.SACHEE_DATA.getSubQuestionById(subQuestionId) || null;
    },

    getExample: function (exampleId) {
      return window.SACHEE_DATA.getExampleById(exampleId) || null;
    },

    getVisual: function (visualId) {
      return window.SACHEE_DATA.getVisualById(visualId) || null;
    },

    // 2. Chapter Learning Package Assembly
    getChapterLearningPackage: function (chapterId) {
      var chapter = this.getChapter(chapterId);
      if (!chapter) return null;

      var questions = this.getChapterQuestions(chapterId);
      var examples = this.getChapterExamples(chapterId);
      var visuals = this.getChapterVisuals(chapterId);
      var progress = (window.SACHEE_STORAGE && window.SACHEE_STORAGE.getChapterProgress) 
        ? window.SACHEE_STORAGE.getChapterProgress(chapterId) 
        : null;

      return {
        chapter: chapter,
        questions: questions,
        examples: examples,
        visuals: visuals,
        progress: progress || { completedQuestions: [], percent: 0 }
      };
    },

    // 3. Question Navigation & Answer Handling
    evaluateAnswer: function (targetId, studentAnswer) {
      var questionUnit = this.getSubQuestion(targetId) || this.getQuestion(targetId);
      if (!questionUnit) {
        return { success: false, reason: 'Record not found' };
      }

      var correctAnswer = questionUnit.answer !== undefined ? questionUnit.answer : questionUnit.correctAnswer;
      var isCorrect = false;

      if (correctAnswer !== undefined && studentAnswer !== undefined) {
        isCorrect = String(studentAnswer).trim().toLowerCase() === String(correctAnswer).trim().toLowerCase();
      }

      // Progress Event Dispatch to authoritative storage
      if (window.SACHEE_STORAGE && typeof window.SACHEE_STORAGE.recordAttempt === 'function') {
        window.SACHEE_STORAGE.recordAttempt({
          id: questionUnit.id,
          chapterId: questionUnit.chapterId,
          isCorrect: isCorrect,
          userAnswer: studentAnswer
        });
      }

      return {
        questionId: questionUnit.id,
        isCorrect: isCorrect,
        correctAnswer: correctAnswer
      };
    }
  };

  window.SACHEE_LEARNING = learningEngine;
})(window);
