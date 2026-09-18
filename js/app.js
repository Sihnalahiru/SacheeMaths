/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /js/app.js
 * Main Application Bootstrap, Event Delegation & Modal Router
 */

(function () {
    'use strict';

    let isTtsActive = false;

    /**
     * Application Initialization
     */
    async function initApp() {
        console.log('[App] Initializing Sachee Maths PWA...');

        try {
            // 1. Initialize Offline Storage Layer
            await window.StorageManager.init();

            // 2. Setup Global Event Delegation
            setupEventDelegation();

            // 3. Initial Navigation Route
            window.Router.navigate('student-dash');

            console.log('[App] Initialization complete.');
        } catch (err) {
            console.error('[App] Critical Initialization Error:', err);
            // Non-destructive fallback error state
            const view = document.getElementById('app-view');
            if (view) {
                view.innerHTML = `
                    <div class="card" style="border-left: 4px solid var(--danger);">
                        <h3 style="color: var(--danger);">පූරණය වීමේ දෝෂයක් පවතී</h3>
                        <p style="margin-top: 8px;">යෙදුම පූරණය වීමේදී දෝෂයක් සිදු විය. කරුණාකර Page එක Refresh කරන්න.</p>
                    </div>
                `;
            }
        }
    }

    /**
     * Global Event Delegation Handler (Using data-action and data-tab)
     */
    function setupEventDelegation() {
        document.body.addEventListener('click', function (e) {
            // 1. Tab Navigation Handling (data-tab)
            const tabBtn = e.target.closest('[data-tab]');
            if (tabBtn) {
                const tabName = tabBtn.getAttribute('data-tab');
                if (tabName) {
                    window.Router.navigate(tabName);
                    return;
                }
            }

            // 2. Action Handling (data-action)
            const actionBtn = e.target.closest('[data-action]');
            if (actionBtn) {
                const action = actionBtn.getAttribute('data-action');
                handleDataAction(action, actionBtn, e);
            }
        });
    }

    /**
     * Centralized Data Action Handler
     */
    function handleDataAction(action, element, event) {
        switch (action) {
            case 'toggle-tts':
                isTtsActive = !isTtsActive;
                window.Utils.showToast(isTtsActive ? 'හඬ සහායක (TTS) සක්‍රිය විය 🔊' : 'හඬ සහායක (TTS) අක්‍රිය විය 🔇');
                break;

            case 'open-search':
                window.Utils.openModal('search-modal');
                break;

            case 'open-bookmarks':
                window.Router.navigate('bookmarks');
                break;

            case 'open-parent-gate':
                window.Utils.openModal('parent-gate-modal');
                break;

            case 'open-audit':
                window.Router.navigate('audit');
                break;

            case 'open-tutor':
                window.Utils.openModal('tutor-modal');
                window.Utils.showToast('🤖 AI Maths Sir: ආයුබෝවන් Sachin! මම ඔබට උදව් කරන්නම්.');
                break;

            case 'close-modal':
                const targetModal = element.getAttribute('data-target');
                if (targetModal) {
                    window.Utils.closeModal(targetModal);
                }
                break;

            case 'verify-parent-password':
                handleParentPasswordVerification();
                break;

            case 'tutor-explain-concept':
            case 'tutor-show-example':
            case 'tutor-help-question':
                window.Utils.closeModal('tutor-modal');
                window.Utils.showToast('🤖 AI Maths Sir: අදාළ කොටස පූරණය වෙමින් පවතියි.');
                break;

            case 'submit-photo-assignment':
                window.Utils.closeModal('photo-upload-modal');
                window.Utils.showToast('📷 පැවරුම භාරදෙන ලදී (පරීක්ෂා කිරීම සඳහා සම්බන්ධතාවය අවශ්‍යයි).');
                break;

            default:
                console.warn('[App] Unhandled action trigger:', action);
        }
    }

    /**
     * Parent Password Verification Hook
     */
    function handleParentPasswordVerification() {
        const input = document.getElementById('parent-password-input');
        if (!input) return;

        const value = input.value.trim();
        if (value === '1234' || value === 'parent') {
            input.value = '';
            window.Utils.closeModal('parent-gate-modal');
            window.Router.navigate('parent-dash');
        } else {
            alert('වැරදි මුරපදයකි. නැවත උත්සාහ කරන්න.');
        }
    }

    // Bootstrap app on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
