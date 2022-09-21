import {gsap, Power1} from "https://cdn.skypack.dev/gsap";

const beam = document.querySelector('.beam');
const lamp = document.querySelector('.lamp');

gsap.fromTo(beam, { 
  '--swing': '0.97turn',
}, { 
  '--swing': '1.03turn',
  duration: 1,
  repeat:-1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.fromTo(lamp, { 
  rotate: '-8.5deg'
}, { 
  rotate: '8.5deg',
  duration: 1,
  repeat:-1,
  yoyo: true,
  ease: Power1.easeInOut
});