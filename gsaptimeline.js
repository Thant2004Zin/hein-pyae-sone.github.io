import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


let animateImg1 = gsap.utils.toArray(".animate-img1");

// let allTimeline = ["tl1","tl2","tl3","tl4","tl5","tl6","tl7","tl8"]


// console.log(allTimeline)

// allTimeline.forEach(element => {

//     console.log(element);

//     element = gsap.timeline({
//         scrollTrigger: {
//             ease : "none",
//             trigger: animateImg1,
//             start: "top top",
//             end: "4000 top",
//             scrub : 1,
//             // markers: true,
//         }
//     });
// });

let tl1 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl6 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl8 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

let tl9 = gsap.timeline({
    scrollTrigger: {
        ease : "none",
        trigger: animateImg1,
        start: "top top",
        end: "4000 top",
        scrub : 1,
        // markers: true,
    }
});

tl1.to(".animate-img1", { x: -2500 });
tl2.to(".animate-img2", { x: -500 });
tl3.to(".animate-img3", { x: -1000 });
tl4.to(".animate-img4", { x: -2000 });
tl5.to(".animate-img5", { x: -700 });
tl6.to(".animate-img6", { x: -1000 });
tl7.to(".animate-img7", { x: -800 });
tl8.to(".animate-img8", { x: -1000 });
tl9.to(".animate-img9", { x: -1000 });
