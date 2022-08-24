const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 149)+"px; left: "+(e.pageX - 149)+"px; z-index : 2;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
})

import './style.scss'
import 'bootstrap';
import Typed from 'typed.js';
import Atropos from 'atropos';
import fullpage from 'fullpage.js';
import VenoBox from "venobox";

let section2Active = document.getElementById("section2")

for (let i = 0; i < section2Active.classList.length;i++){
    console.log(section2Active.classList[i])
}

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  navigation: true,
  touchSensitivity: 13,
});
new VenoBox({
  selector: '.venobox'
});

const myAtropos = Atropos({
  el: '.my-atropos',
  // rest of parameters
});

let loader  = document.getElementById('loader-animation');
setTimeout(
    function (){

      loader.remove();
    },3300);

var typed = new Typed('#TypeJs', {
  // Waits 1000ms after typing "First"
  strings: ['Hein Pyae Sone','Web Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 50,
  startDelay: 300,
  loop: true,
  loopCount: Infinity,
});

let profileClick = document.getElementById("profileClick");

profileClick.addEventListener("click", function () {
  profileClick.classList.add("profile-click")

  setTimeout(function () {
    profileClick.classList.remove("profile-click")
  },700)
})

let fullpageWm = document.querySelector('.fp-watermark');
fullpageWm.remove();

let iconContainer = document.getElementById("icon-container")
iconContainer.addEventListener("click", function () {
    let fbIcon = document.getElementById("fbIcon")
    let igIcon = document.getElementById("igIcon")
    let ghIcon = document.getElementById("ghIcon")
    let msIcon = document.getElementById("msIcon")


    if ( iconContainer.classList.toggle("visible-icon-rotate-animation") === true){
        iconContainer.classList.add("visible-icon-rotate-animation")
        iconContainer.classList.remove("visible-icon-rotate-animation-reverse")
    }else{
        iconContainer.classList.add("visible-icon-rotate-animation-reverse")
    }

    if ( fbIcon.classList.toggle("icon-item-f") === true){
        fbIcon.classList.add("icon-item-f")
        fbIcon.classList.remove("icon-item-f-reverse")
    }else{
        fbIcon.classList.add("icon-item-f-reverse")
    }
    //....................//
    if ( igIcon.classList.toggle("icon-item-i") === true){
        igIcon.classList.add("icon-item-i")
        igIcon.classList.remove("icon-item-i-reverse")
    }else{
        igIcon.classList.add("icon-item-i-reverse")
    }
    //....................//
    if ( ghIcon.classList.toggle("icon-item-g") === true){
        ghIcon.classList.add("icon-item-g")
        ghIcon.classList.remove("icon-item-g-reverse")
    }else{
        ghIcon.classList.add("icon-item-g-reverse")
    }
    //....................//
    if ( msIcon.classList.toggle("icon-item-m") === true){
        msIcon.classList.add("icon-item-m")
        msIcon.classList.remove("icon-item-m-reverse")
    }else{
        msIcon.classList.add("icon-item-m-reverse")
    }


    // fbIcon.classList.toggle("icon-item-f")
    // igIcon.classList.toggle("icon-item-i")
    // ghIcon.classList.toggle("icon-item-g")
    // msIcon.classList.toggle("icon-item-m")
})



