/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /js/storage.js
 * Offline-First Persistence Layer (IndexedDB with LocalStorage Fallback)
 */

window.StorageManager = (function () {
    'use strict';

    const DB_NAME = 'SacheeMathsDB';
    const DB_VERSION = 1;
    const STORAGE_KEY = 'sachee_maths_student_progress_v1';

    let dbInstance = null;
    let isIndexedDbSupported = false;

    // Default Fresh Student Profile
    const DEFAULT_PROFILE = {
        version: 1,
        studentName: "Sachin",
        streak: 0,
        lastActiveDate: new Date().toISOString().split('T')[0],
        activeStudySeconds: 0,
        completedChapters: [],
        mastery: {},
        mistakes: [],
        multiplicationStats: {
            attempted: 0,
            correct: 0,
            wrong: 0,
            weakFacts: [],
            missedFacts: []
        },
        assignments: [],
        dailyHistory: {},
        bookmarks: [],
        dailyReports: []
    };

    /**
     * Initialize Storage Engine (IndexedDB or LocalStorage Fallback)
     */
    function init() {
        return new Promise((resolve) => {
            if (!('indexedDB' in window)) {
                console.warn('[Storage] IndexedDB not supported. Using LocalStorage fallback.');
                initLocalStorage();
                return resolve(false);
            }

            try {
                const request = indexedDB.open(DB_NAME, DB_VERSION);

                request.onupgradeneeded = function (event) {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains('store')) {
                        db.createObjectStore('store', { keyPath: 'key' });
                    }
                };

                request.onsuccess = function (event) {
                    dbInstance = event.target.result;
                    isIndexedDbSupported = true;
                    console.log('[Storage] IndexedDB initialized successfully.');
                    resolve(true);
                };

                request.onerror = function (event) {
                    console.warn('[Storage] IndexedDB error/blocked. Using LocalStorage fallback.', event.target.error);
                    initLocalStorage();
                    resolve(false);
                };
            } catch (e) {
                console.warn('[Storage] IndexedDB exception. Using LocalStorage fallback.', e);
                initLocalStorage();
                resolve(false);
            }
        });
    }

    /**
     * LocalStorage Fallback Setup
     */
    function initLocalStorage() {
        isIndexedDbSupported = false;
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROFILE));
        }
    }

    /**
     * Get Record by Key
     */
    function get(key) {
        return new Promise((resolve) => {
            if (isIndexedDbSupported && dbInstance) {
                try {
                    const tx = dbInstance.transaction(['store'], 'readonly');
                    const store = tx.objectStore('store');
                    const req = store.get(key);

                    req.onsuccess = function () {
                        resolve(req.result ? req.result.value : null);
                    };

                    req.onerror = function () {
                        resolve(getFromLocalStorage(key));
                    };
                } catch (e) {
                    resolve(getFromLocalStorage(key));
                }
            } else {
                resolve(getFromLocalStorage(key));
            }
        });
    }

    /**
     * Save Record by Key
     */
    function set(key, value) {
        return new Promise((resolve) => {
            saveToLocalStorage(key, value); // Keep LocalStorage in sync as backup

            if (isIndexedDbSupported && dbInstance) {
                try {
                    const tx = dbInstance.transaction(['store'], 'readwrite');
                    const store = tx.objectStore('store');
                    const req = store.put({ key: key, value: value });

                    req.onsuccess = function () {
                        resolve(true);
                    };

                    req.onerror = function () {
                        resolve(false);
                    };
                } catch (e) {
                    resolve(false);
                }
            } else {
                resolve(true);
            }
        });
    }

    /**
     * LocalStorage Direct Handlers
     */
    function getFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`${STORAGE_KEY}_${key}`);
            if (data) return JSON.parse(data);

            if (key === 'student_progress') {
                const legacy = localStorage.getItem('g7_maths_student_progress') || localStorage.getItem(STORAGE_KEY);
                return legacy ? JSON.parse(legacy) : DEFAULT_PROFILE;
            }
            return null;
        } catch (e) {
            return key === 'student_progress' ? DEFAULT_PROFILE : null;
        }
    }

    function saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(`${STORAGE_KEY}_${key}`, JSON.stringify(value));
            if (key === 'student_progress') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
            }
        } catch (e) {
            console.warn('[Storage] LocalStorage quota exceeded or unavailable.', e);
        }
    }

    /**
     * High-Level Progress API
     */
    async function getStudentProgress() {
        const progress = await get('student_progress');
        return progress || DEFAULT_PROFILE;
    }

    async function saveStudentProgress(progressData) {
        return await set('student_progress', progressData);
    }

    return {
        init,
        get,
        set,
        getStudentProgress,
        saveStudentProgress,
        DEFAULT_PROFILE
    };
})();
