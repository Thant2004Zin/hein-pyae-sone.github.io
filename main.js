import $ from 'jquery';
import './style.scss';
import './mobile.scss';
import './movingcard.scss'
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