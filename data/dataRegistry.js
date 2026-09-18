/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /js/dataRegistry.js
 * Integration Layer & Data Access Registry
 * 
 * Provides fast, indexed, non-mutating access to immutable textbook source datasets.
 */

(function () {
    'use strict';

    // Source Dataset Bindings with Graceful Fallbacks
    const metadata = typeof DATASET_METADATA !== 'undefined' ? DATASET_METADATA : {};
    const chapters = typeof CHAPTERS_DATA !== 'undefined' ? CHAPTERS_DATA : [];
    const questions = typeof QUESTIONS_DATA !== 'undefined' ? QUESTIONS_DATA : { chapters: [], termReviews: [] };
    const examples = typeof EXAMPLES_DATA !== 'undefined' ? EXAMPLES_DATA : [];
    const visuals = typeof VISUALS_DATA !== 'undefined' ? VISUALS_DATA : [];
    const glossary = typeof GLOSSARY_DATA !== 'undefined' ? GLOSSARY_DATA : [];
    const reviews = typeof REVIEWS_DATA !== 'undefined' ? REVIEWS_DATA : [];

    // Internal Performance Lookup Indexes (Non-mutating Maps)
    const _maps = {
        chapters: new Map(),
        questionsMain: new Map(),
        questionsSub: new Map(),
        questionsByChapter: new Map(),
        examples: new Map(),
        examplesByChapter: new Map(),
        visuals: new Map(),
        visualsByChapter: new Map(),
        glossary: new Map(),
        reviews: new Map(),
        reviewsByChapter: new Map()
    };

    /**
     * Build non-mutating performance indexes for O(1) lookups
     */
    function _buildIndexes() {
        // Index Chapters
        chapters.forEach(ch => {
            if (ch && ch.id) {
                _maps.chapters.set(ch.id, ch);
            }
        });

        // Index Questions (Chapter Main Questions & Sub-questions)
        const chapterQuestions = (questions && questions.chapters) ? questions.chapters : [];
        chapterQuestions.forEach(q => {
            if (q && q.questionId) {
                _maps.questionsMain.set(q.questionId, q);

                if (q.chapterId) {
                    if (!_maps.questionsByChapter.has(q.chapterId)) {
                        _maps.questionsByChapter.set(q.chapterId, []);
                    }
                    _maps.questionsByChapter.get(q.chapterId).push(q);
                }

                if (Array.isArray(q.subQuestions)) {
                    q.subQuestions.forEach(sq => {
                        if (sq && sq.subQuestionId) {
                            _maps.questionsSub.set(sq.subQuestionId, sq);
                        }
                    });
                }
            }
        });

        // Index Term Review Questions
        const reviewQuestions = (questions && questions.termReviews) ? questions.termReviews : [];
        reviewQuestions.forEach(rq => {
            if (rq && rq.questionId) {
                _maps.questionsMain.set(rq.questionId, rq);

                if (Array.isArray(rq.subQuestions)) {
                    rq.subQuestions.forEach(sq => {
                        if (sq && sq.subQuestionId) {
                            _maps.questionsSub.set(sq.subQuestionId, sq);
                        }
                    });
                }
            }
        });

        // Index Examples
        examples.forEach(ex => {
            if (ex && ex.exampleId) {
                _maps.examples.set(ex.exampleId, ex);

                if (ex.chapterId) {
                    if (!_maps.examplesByChapter.has(ex.chapterId)) {
                        _maps.examplesByChapter.set(ex.chapterId, []);
                    }
                    _maps.examplesByChapter.get(ex.chapterId).push(ex);
                }
            }
        });

        // Index Visuals
        visuals.forEach(v => {
            if (v && v.visualId) {
                _maps.visuals.set(v.visualId, v);

                if (v.chapterId) {
                    if (!_maps.visualsByChapter.has(v.chapterId)) {
                        _maps.visualsByChapter.set(v.chapterId, []);
                    }
                    _maps.visualsByChapter.get(v.chapterId).push(v);
                }
            }
        });

        // Index Glossary
        glossary.forEach(e => {
            if (e && e.entryId) {
                _maps.glossary.set(e.entryId, e);
            }
            if (e && e.term) {
                _maps.glossary.set(e.term.toLowerCase(), e);
            }
        });

        // Index Reviews
        reviews.forEach(r => {
            if (r && r.reviewId) {
                _maps.reviews.set(r.reviewId, r);

                if (Array.isArray(r.relatedChapterIds)) {
                    r.relatedChapterIds.forEach(chId => {
                        if (!_maps.reviewsByChapter.has(chId)) {
                            _maps.reviewsByChapter.set(chId, []);
                        }
                        _maps.reviewsByChapter.get(chId).push(r);
                    });
                }
            }
        });
    }

    // Build indexes on script load
    _buildIndexes();

    /**
     * SACHEE_DATA Public Integration API
     */
    const SACHEE_DATA = {
        // Direct Dataset References
        metadata: metadata,
        chapters: chapters,
        questions: questions,
        examples: examples,
        visuals: visuals,
        glossary: glossary,
        reviews: reviews,

        // Chapter Content Accessors
        getChapterById(chapterId) {
            return _maps.chapters.get(chapterId) || null;
        },

        getQuestionsByChapter(chapterId) {
            return _maps.questionsByChapter.get(chapterId) || [];
        },

        getExamplesByChapter(chapterId) {
            return _maps.examplesByChapter.get(chapterId) || [];
        },

        getVisualsByChapter(chapterId) {
            return _maps.visualsByChapter.get(chapterId) || [];
        },

        getReviewsByChapter(chapterId) {
            return _maps.reviewsByChapter.get(chapterId) || [];
        },

        getGlossaryByChapter(chapterId) {
            const ch = _maps.chapters.get(chapterId);
            if (!ch || !Array.isArray(ch.glossaryIds)) return [];
            return ch.glossaryIds.map(gId => _maps.glossary.get(gId)).filter(Boolean);
        },

        // Entity Accessors
        getMainQuestionById(questionId) {
            return _maps.questionsMain.get(questionId) || null;
        },

        getSubQuestionById(subQuestionId) {
            return _maps.questionsSub.get(subQuestionId) || null;
        },

        getExampleById(exampleId) {
            return _maps.examples.get(exampleId) || null;
        },

        getVisualById(visualId) {
            return _maps.visuals.get(visualId) || null;
        },

        getGlossaryEntryById(idOrTerm) {
            if (!idOrTerm) return null;
            return _maps.glossary.get(idOrTerm) || _maps.glossary.get(idOrTerm.toLowerCase()) || null;
        },

        getReviewById(reviewId) {
            return _maps.reviews.get(reviewId) || null;
        },

        getQuestionUnitsCount() {
            const mainCount = _maps.questionsMain.size;
            const subCount = _maps.questionsSub.size;
            return {
                main: mainCount,
                sub: subCount,
                total: mainCount + subCount
            };
        },

        /**
         * Comprehensive Programmatic Validation API
         */
        validate() {
            const report = {
                counts: {
                    chapters: chapters.length,
                    mainQuestions: _maps.questionsMain.size,
                    subQuestions: _maps.questionsSub.size,
                    questionUnitsTotal: _maps.questionsMain.size + _maps.questionsSub.size,
                    examples: examples.length,
                    visuals: visuals.length,
                    glossaryEntries: glossary.length,
                    reviews: reviews.length
                },
                duplicates: {
                    chapterIds: 0,
                    questionIds: 0,
                    subQuestionIds: 0,
                    exampleIds: 0,
                    visualIds: 0,
                    glossaryIds: 0,
                    reviewIds: 0
                },
                brokenReferences: {
                    chapterReferences: 0,
                    exampleReferences: 0,
                    visualReferences: 0,
                    reviewQuestionReferences: 0
                },
                hierarchyErrors: 0,
                status: 'PASS'
            };

            // Check Duplicate Chapter IDs
            const seenCh = new Set();
            chapters.forEach(ch => {
                if (seenCh.has(ch.id)) report.duplicates.chapterIds++;
                else seenCh.add(ch.id);
            });

            // Check Duplicate Example IDs
            const seenEx = new Set();
            examples.forEach(ex => {
                if (seenEx.has(ex.exampleId)) report.duplicates.exampleIds++;
                else seenEx.add(ex.exampleId);
            });

            // Check Duplicate Visual IDs
            const seenVis = new Set();
            visuals.forEach(v => {
                if (seenVis.has(v.visualId)) report.duplicates.visualIds++;
                else seenVis.add(v.visualId);
            });

            // Check Duplicate Glossary IDs
            const seenGlo = new Set();
            glossary.forEach(g => {
                if (seenGlo.has(g.entryId)) report.duplicates.glossaryIds++;
                else seenGlo.add(g.entryId);
            });

            // Check Duplicate Review IDs
            const seenRev = new Set();
            reviews.forEach(r => {
                if (seenRev.has(r.reviewId)) report.duplicates.reviewIds++;
                else seenRev.add(r.reviewId);
            });

            // Check Question References & Hierarchy
            _maps.questionsMain.forEach(q => {
                if (q.chapterId && !_maps.chapters.has(q.chapterId)) {
                    report.brokenReferences.chapterReferences++;
                }
                if (q.exampleId && !_maps.examples.has(q.exampleId)) {
                    report.brokenReferences.exampleReferences++;
                }
                if (q.visualId && !_maps.visuals.has(q.visualId)) {
                    report.brokenReferences.visualReferences++;
                }
                if (Array.isArray(q.subQuestions)) {
                    q.subQuestions.forEach(sq => {
                        if (sq.parentQuestionId !== q.questionId) {
                            report.hierarchyErrors++;
                        }
                    });
                }
            });

            // Check Example Chapter References
            examples.forEach(ex => {
                if (ex.chapterId && !_maps.chapters.has(ex.chapterId)) {
                    report.brokenReferences.chapterReferences++;
                }
            });

            // Check Visual Chapter References
            visuals.forEach(v => {
                if (v.chapterId && !_maps.chapters.has(v.chapterId)) {
                    report.brokenReferences.chapterReferences++;
                }
            });

            // Check Review Question References
            reviews.forEach(r => {
                if (Array.isArray(r.mainQuestionIds)) {
                    r.mainQuestionIds.forEach(qId => {
                        if (!_maps.questionsMain.has(qId)) {
                            report.brokenReferences.reviewQuestionReferences++;
                        }
                    });
                }
            });

            const totalDuplicates = Object.values(report.duplicates).reduce((a, b) => a + b, 0);
            const totalBroken = Object.values(report.brokenReferences).reduce((a, b) => a + b, 0);

            if (totalDuplicates > 0 || totalBroken > 0 || report.hierarchyErrors > 0) {
                report.status = 'NEEDS FIX';
            }

            return report;
        }
    };

    // Expose Global Object
    if (typeof window !== 'undefined') {
        window.SACHEE_DATA = SACHEE_DATA;
    }

    // CommonJS Fallback for Automated Testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { SACHEE_DATA };
    }
})();
