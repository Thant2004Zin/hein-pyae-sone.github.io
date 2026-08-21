// ============================================
// IMPORTS
// ============================================
import $ from 'jquery';
import '../css/style.scss';
import '../css/mobile.scss';
import '../css/movingcard.scss';
import 'bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Typed from 'typed.js';
import Atropos from 'atropos';
import './gsaptimeline.js';

// ============================================
// GSAP PLUGINS
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// DOM READY - INITIALIZATION
// ============================================
$(document).ready(function() {
    initializeLoader();
    initializeDarkModeToggle();
    initializeAgeDisplay();
    initializeHorizontalScroll();
    initializeScrollSnap();
    initializeScrollSnapV2();
    initializeAtropos();
    initializeTyped();
    initializeProfileClick();
    initializeIconContainer();
    initializeContactForm();
});

// ============================================
// LOADER
// ============================================
function initializeLoader() {
    const loader = $('#loader-animation');
    setTimeout(() => {
        loader.remove();
    }, 3300);
}

// ============================================
// DARK MODE TOGGLE
// ============================================
function initializeDarkModeToggle() {
    $('#day-night-mode').on('click', function() {
        toggleDarkModeClass();
        toggleDarkModeSections();
    });
}

function toggleDarkModeClass() {
    const $element = $('.darkThemeAnimate');
    
    if ($element.hasClass('active')) {
        $element.removeClass('active').addClass('no-active');
        console.log("Active class has been removed");
    } else if ($element.hasClass('no-active')) {
        $element.removeClass('no-active').addClass('active');
        console.log("Active class has been added");
    }
}

function toggleDarkModeSections() {
    const sections = [
        '.hero-section',
        '.about-section',
        '.third-section',
        '.fourth-section'
    ];
    
    sections.forEach(selector => {
        $(selector).toggleClass('dark-mode');
    });
}

// ============================================
// AGE DISPLAY
// ============================================
function initializeAgeDisplay() {
    const startYear = 2019;
    const currentYear = new Date().getFullYear();
    $('#age').text(currentYear - startYear);
}

// ============================================
// HORIZONTAL SCROLL
// ============================================
function initializeHorizontalScroll() {
    const horizontalSections = gsap.utils.toArray('.gsap-Hscroll-section');
    
    gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.third-section',
            pin: true,
            scrub: 1,
            end: '4000',
            // markers: true,
        }
    });
}

// ============================================
// SCROLL SNAP
// ============================================
function initializeScrollSnap() {
    const scrollSnapSections = gsap.utils.toArray('.section');
    
    scrollSnapSections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            // markers: true,
            scrub: 1,
            snap: 1,
        });
    });
}

function initializeScrollSnapV2() {
    const scrollSnapV2Sections = gsap.utils.toArray('.sectionV2');
    
    scrollSnapV2Sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top bottom',
            end: 'bottom bottom',
            // markers: true,
            scrub: 1,
            snap: 1,
        });
    });
}

// ============================================
// ATROPOS 3D EFFECT
// ============================================
function initializeAtropos() {
    Atropos({
        el: '.my-atropos'
    });
}

// ============================================
// TYPED.JS - TYPING ANIMATION
// ============================================
function initializeTyped() {
    new Typed('#TypeJs', {
        strings: ['Hein Pyae Sone', 'Web Developer', 'Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 300,
        loop: true,
        loopCount: Infinity
    });
}

// ============================================
// PROFILE CLICK ANIMATION
// ============================================
function initializeProfileClick() {
    $('#profileClick').on('click', function() {
        $(this).addClass('profile-click');
        setTimeout(() => {
            $(this).removeClass('profile-click');
        }, 700);
    });
}

// ============================================
// ICON CONTAINER - SOCIAL MEDIA TOGGLE
// ============================================
function initializeIconContainer() {
    $('#icon-container').on('click', function() {
        const $container = $(this);
        const $fbIcon = $('#fbIcon');
        const $igIcon = $('#igIcon');
        const $ghIcon = $('#ghIcon');
        const $msIcon = $('#msIcon');

        toggleContainerAnimation($container);
        toggleIconsVisibility($fbIcon, $igIcon, $ghIcon, $msIcon);
    });
}

function toggleContainerAnimation($container) {
    $container.toggleClass('visible-icon-rotate-animation');
    
    if ($container.hasClass('visible-icon-rotate-animation')) {
        $container.removeClass('visible-icon-rotate-animation-reverse');
    } else {
        $container.addClass('visible-icon-rotate-animation-reverse');
    }
}

function toggleIconsVisibility($fb, $ig, $gh, $ms) {
    $fb.toggleClass('icon-item-f');
    $ig.toggleClass('icon-item-i');
    $gh.toggleClass('icon-item-g');
    $ms.toggleClass('icon-item-m');
}

// ============================================
// CONTACT FORM
// ============================================
const CONTACT_CONFIG = {
    email: 'frequency3078@gmail.com',
    endpoint: 'https://formsubmit.co/ajax/frequency3078@gmail.com',
};

function initializeContactForm() {
    updateMailtoLink({});
    
    $('#contactForm')
        .on('input', handleContactFormInput)
        .on('submit', handleContactFormSubmit);
}

// --- Helpers ---
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

function buildMailtoHref({ name, email, subject, message }) {
    const params = new URLSearchParams({
        subject: `[Portfolio] ${String(subject || '').trim() || 'Contact'}`,
        body: `Name: ${String(name || '').trim()}\nEmail: ${String(email || '').trim()}\n\n${String(message || '').trim()}`,
    });
    return `mailto:${CONTACT_CONFIG.email}?${params.toString()}`;
}

function buildContactPayload({ name, email, subject, message }) {
    return {
        name: String(name).trim(),
        email: String(email).trim(),
        _replyto: String(email).trim(),
        _subject: `[Portfolio] ${String(subject).trim()}`,
        message: String(message).trim(),
        _template: 'table',
    };
}

function setContactStatus($status, text, type) {
    $status
        .text(text)
        .removeClass('is-success is-error')
        .addClass(type === 'success' ? 'is-success' : type === 'error' ? 'is-error' : '');
}

function clearContactValidation() {
    const fields = ['#contactName', '#contactEmail', '#contactSubject', '#contactMessage'];
    fields.forEach(id => $(id).removeClass('is-valid is-invalid'));
}

function getFormValues() {
    return {
        name: $('#contactName').val(),
        email: $('#contactEmail').val(),
        subject: $('#contactSubject').val(),
        message: $('#contactMessage').val(),
    };
}

function updateMailtoLink(values) {
    $('#contactAltMailto').attr('href', buildMailtoHref(values));
}

// --- Handlers ---
function handleContactFormInput() {
    const values = getFormValues();
    updateMailtoLink(values);
}

async function handleContactFormSubmit(e) {
    e.preventDefault();

    const values = getFormValues();
    const $status = $('#contactFormStatus');
    const $submitBtn = $('#contactSubmitBtn');
    const $mailto = $('#contactAltMailto');

    // Validate form
    let isValid = validateForm(values);
    if (!isValid) {
        setContactStatus($status, 'Please fix the highlighted fields.', 'error');
        return;
    }

    // Update mailto link
    updateMailtoLink(values);
    $mailto.attr('href', buildMailtoHref(values));

    // Prepare and send
    const payload = buildContactPayload(values);
    $submitBtn.prop('disabled', true);
    setContactStatus($status, 'Sending...', null);

    try {
        const response = await fetch(CONTACT_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || result.success === false) {
            throw new Error(result.message || `Submit failed (${response.status})`);
        }

        setContactStatus($status, 'Message sent. I\'ll get back to you soon.', 'success');
        $('#contactForm').trigger('reset');
        clearContactValidation();
        updateMailtoLink({});

    } catch (err) {
        console.error('Contact form error:', err);
        setContactStatus(
            $status,
            'Could not send right now. Use "Or mail directly" (your message is pre-filled) or try again.',
            'error'
        );
    } finally {
        $submitBtn.prop('disabled', false);
    }
}

function validateForm({ name, email, subject, message }) {
    let isValid = true;

    const validateField = (id, condition) => {
        const $el = $(id);
        const valid = condition;
        $el.toggleClass('is-invalid', !valid);
        $el.toggleClass('is-valid', valid);
        isValid = isValid && valid;
    };

    validateField('#contactName', String(name || '').trim().length > 0);
    validateField('#contactEmail', isValidEmail(email));
    validateField('#contactSubject', String(subject || '').trim().length > 0);
    validateField('#contactMessage', String(message || '').trim().length > 0);

    return isValid;
}