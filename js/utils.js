/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /js/utils.js
 * Utility Functions & Helpers (XSS Protection, DOM, Formatting, Modals, Toasts)
 */

window.Utils = (function () {
    'use strict';

    /**
     * DOM Selector Shortcuts
     */
    function $(selector, context = document) {         return context.querySelector(selector);     }      function $$(selector, context = document) {
        return Array.from(context.querySelectorAll(selector));
    }

    /**
     * Escape HTML strings to prevent XSS
     */
    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /**
     * Format active study seconds into human-readable Sinhala text
     */
    function formatTime(totalSeconds) {
        if (!totalSeconds || isNaN(totalSeconds) || totalSeconds < 0) {
            return 'මිනිත්තු 0';
        }
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        if (hours > 0) {
            return `පැය ${hours} මිනිත්තු ${minutes}`;
        }
        return `මිනිත්තු ${minutes}`;
    }

    /**
     * Format numbers cleanly
     */
    function formatNumber(num) {
        if (num === null || num === undefined || isNaN(num)) return '0';
        return Number(num).toLocaleString('si-LK');
    }

    /**
     * Format accuracy percentage
     */
    function formatPercentage(correct, total) {
        if (!total || total <= 0) return '0%';
        const pct = Math.round((correct / total) * 100);
        return `${pct}%`;
    }

    /**
     * DOM Visibility Helpers
     */
    function show(el) {
        const target = typeof el === 'string' ? $(el) : el;
        if (target) target.style.display = '';
    }

    function hide(el) {
        const target = typeof el === 'string' ? $(el) : el;
        if (target) target.style.display = 'none';
    }

    function toggle(el) {
        const target = typeof el === 'string' ? $(el) : el;
        if (target) {
            target.style.display = target.style.display === 'none' ? '' : 'none';
        }
    }

    /**
     * Modal Dialog Helpers
     */
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    /**
     * Subtitle / Toast Banner Notification
     */
    function showToast(message, duration = 3000) {
        const banner = document.getElementById('subtitle-banner');
        if (!banner) return;

        banner.textContent = message;
        banner.style.display = 'block';

        if (banner._toastTimeout) {
            clearTimeout(banner._toastTimeout);
        }

        banner._toastTimeout = setTimeout(() => {
            banner.style.display = 'none';
        }, duration);
    }

    /**
     * Debounce helper for performance optimization
     */
    function debounce(fn, delay = 250) {
        let timer = null;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    return {
        $,$$,
        escapeHtml,
        formatTime,
        formatNumber,
        formatPercentage,
        show,
        hide,
        toggle,
        openModal,
        closeModal,
        showToast,
        debounce
    };
})();
