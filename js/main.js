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

// Contact form -> Netlify Forms (emails configured in Netlify dashboard)
const CONTACT_TO_EMAIL = 'frequency3078@gmail.com';
const CONTACT_FORM_NAME = 'contact';

$('#contactAltMailto').attr('href', `mailto:${CONTACT_TO_EMAIL}`);

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
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

$('#contactForm').on('submit', async function (e) {
    e.preventDefault();

    const $form = $(this);
    const name = $('#contactName').val();
    const email = $('#contactEmail').val();
    const subject = $('#contactSubject').val();
    const message = $('#contactMessage').val();
    const $status = $('#contactFormStatus');
    const $submitBtn = $('#contactSubmitBtn');

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

    const payload = new URLSearchParams();
    payload.append('form-name', CONTACT_FORM_NAME);
    payload.append('name', String(name).trim());
    payload.append('email', String(email).trim());
    payload.append('subject', `[Portfolio] ${String(subject).trim()}`);
    payload.append('message', String(message).trim());

    $submitBtn.prop('disabled', true);
    setContactStatus($status, 'Sending...', null);

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: payload.toString(),
        });

        if (!response.ok) {
            throw new Error(`Submit failed (${response.status})`);
        }

        setContactStatus($status, 'Message sent. I’ll get back to you soon.', 'success');
        $form.trigger('reset');
        clearContactValidation();
    } catch (err) {
        console.error(err);
        setContactStatus(
            $status,
            'Could not send right now. Use “Or mail directly” or try again.',
            'error'
        );
    } finally {
        $submitBtn.prop('disabled', false);
    }
});