import $ from 'jquery';

import './style.scss';
import 'bootstrap';
import Typed from 'typed.js';
import Atropos from 'atropos';
import fullpage from 'fullpage.js';
import VenoBox from "venobox";

const $cursor = $('.cursor');

$(document).on('mousemove', (e) => {
    $cursor.css({
        top: e.pageY - 149 + 'px',
        left: e.pageX - 149 + 'px',
        zIndex: 2
    });
});

$(document).on('click', () => {
    $cursor.addClass('expand');
    setTimeout(() => {
        $cursor.removeClass('expand');
    }, 500);
});

$('#age').text(new Date().getFullYear() - 2004);



new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    touchSensitivity: 13,

    onLeave: function(origin, destination){
        console.log(origin.index);
        console.log(destination.index);
    },
});

$('.fp-watermark').remove();

new VenoBox({
    selector: '.venobox'
});

const myAtropos = Atropos({
    el: '.my-atropos'
});

const loader = $('#loader-animation');
setTimeout(() => {
    loader.remove();
}, 3300);

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