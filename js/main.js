import $ from 'jquery';
import '../css/style.scss';
import '../css/mobile.scss';
import '../css/movingcard.scss'
import 'bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Typed from 'typed.js';
import Atropos from 'atropos';
import './gsaptimeline.js'

gsap.registerPlugin(ScrollTrigger);


// $(window).on('load', function() {
//     $('#loader-animation').addClass('loaded');
//   });

const loader = $('#loader-animation');
setTimeout(() => {
    loader.remove();
}, 3300);


$('#day-night-mode').on('click', function () {

    if($(".darkThemeAnimate").hasClass("active")){
        $(".darkThemeAnimate").removeClass('active');
        $(".darkThemeAnimate").addClass('no-active');

        console.log("active class hass been removed")
    }else if($(".darkThemeAnimate").hasClass("no-active")){
        $(".darkThemeAnimate").addClass('active');
        $(".darkThemeAnimate").removeClass('no-active');

        console.log("active class hass been added")
    }

    $('.hero-section').toggleClass('dark-mode');
    $('.about-section').toggleClass('dark-mode');
    $('.third-section').toggleClass('dark-mode');
    $('.fourth-section').toggleClass('dark-mode');
})

$('#age').text(new Date().getFullYear() - 2004);

let Horizontalsections = gsap.utils.toArray(".gsap-Hscroll-section");
let scrollsnap = gsap.utils.toArray(".section");
let scrollsnapV2 = gsap.utils.toArray(".sectionV2");

let scrollTween = gsap.to(Horizontalsections, {
    xPercent: -100 * (Horizontalsections.length -1),
    ease: "none",
    scrollTrigger: {
        trigger: ".third-section",
        pin : true,
        scrub : 1,
        end: "4000",
        // markers: true,
    }
});

scrollsnap.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        snap: 1,
    });
});

scrollsnapV2.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        snap: 1,
    });
});

const myAtropos = Atropos({
    el: '.my-atropos'
});


const typed = new Typed('#TypeJs', {
    strings: ['Hein Pyae Sone','Web Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 300,
    loop: true,
    loopCount: Infinity
});

$('#profileClick').on('click', function () {
    $(this).addClass('profile-click');
    setTimeout(() => {
        $(this).removeClass('profile-click');
    }, 700);
});

$('#icon-container').on('click', function () {
    const $fbIcon = $('#fbIcon');
    const $igIcon = $('#igIcon');
    const $ghIcon = $('#ghIcon');
    const $msIcon = $('#msIcon');
    const $iconContainer = $(this);

    $iconContainer.toggleClass('visible-icon-rotate-animation');

    if ($iconContainer.hasClass('visible-icon-rotate-animation')) {
        $iconContainer.removeClass('visible-icon-rotate-animation-reverse');
    } else {
        $iconContainer.addClass('visible-icon-rotate-animation-reverse');
    }

    $fbIcon.toggleClass('icon-item-f');
    $igIcon.toggleClass('icon-item-i');
    $ghIcon.toggleClass('icon-item-g');
    $msIcon.toggleClass('icon-item-m');
});

// Contact form -> FormSubmit.co (works with drag-and-drop deploys; no Netlify Forms setup)
const CONTACT_TO_EMAIL = 'frequency3078@gmail.com';
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO_EMAIL)}`;

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

function buildMailtoHref({ name, email, subject, message }) {
    const params = new URLSearchParams({
        subject: `[Portfolio] ${String(subject || '').trim() || 'Contact'}`,
        body: `Name: ${String(name || '').trim()}\nEmail: ${String(email || '').trim()}\n\n${String(message || '').trim()}`,
    });
    return `mailto:${CONTACT_TO_EMAIL}?${params.toString()}`;
}

function setContactStatus($status, text, type) {
    $status
        .text(text)
        .removeClass('is-success is-error')
        .addClass(type === 'success' ? 'is-success' : type === 'error' ? 'is-error' : '');
}

function clearContactValidation() {
    ['#contactName', '#contactEmail', '#contactSubject', '#contactMessage'].forEach((id) => {
        $(id).removeClass('is-valid is-invalid');
    });
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

$('#contactAltMailto').attr('href', buildMailtoHref({}));

$('#contactForm').on('input', function () {
    const $form = $(this);
    $('#contactAltMailto').attr(
        'href',
        buildMailtoHref({
            name: $('#contactName').val(),
            email: $('#contactEmail').val(),
            subject: $('#contactSubject').val(),
            message: $('#contactMessage').val(),
        })
    );
});

$('#contactForm').on('submit', async function (e) {
    e.preventDefault();

    const $form = $(this);
    const name = $('#contactName').val();
    const email = $('#contactEmail').val();
    const subject = $('#contactSubject').val();
    const message = $('#contactMessage').val();
    const $status = $('#contactFormStatus');
    const $submitBtn = $('#contactSubmitBtn');
    const $mailto = $('#contactAltMailto');

    let ok = true;

    const mark = (id, valid) => {
        const $el = $(id);
        $el.toggleClass('is-invalid', !valid);
        $el.toggleClass('is-valid', valid);
        ok = ok && valid;
    };

    mark('#contactName', String(name || '').trim().length > 0);
    mark('#contactEmail', isValidEmail(email));
    mark('#contactSubject', String(subject || '').trim().length > 0);
    mark('#contactMessage', String(message || '').trim().length > 0);

    if (!ok) {
        setContactStatus($status, 'Please fix the highlighted fields.', 'error');
        return;
    }

    $mailto.attr('href', buildMailtoHref({ name, email, subject, message }));

    const payload = buildContactPayload({ name, email, subject, message });

    $submitBtn.prop('disabled', true);
    setContactStatus($status, 'Sending...', null);

    try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
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

        setContactStatus($status, 'Message sent. I’ll get back to you soon.', 'success');
        $form.trigger('reset');
        clearContactValidation();
        $mailto.attr('href', buildMailtoHref({}));
    } catch (err) {
        console.error(err);
        setContactStatus(
            $status,
            'Could not send right now. Use “Or mail directly” (your message is pre-filled) or try again.',
            'error'
        );
    } finally {
        $submitBtn.prop('disabled', false);
    }
});