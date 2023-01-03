gsap.registerPlugin(MorphSVGPlugin);
const mainDiv = document.getElementsByClassName("main-div")[0];
const lightGroup = document.getElementById("light-group");

lightGroup.addEventListener("click", lightFunction);

var eyetwitch = gsap.timeline({ repeat: -1, repeatDelay: 1 });
eyetwitch
  .to("#eyelid-down", { morphSVG: { shape: "#eyelid-up" }, duration: 0.1 })
  .to("#eyelid-down", { morphSVG: { shape: "#eyelid-down" }, duration: 0.05 })
  .to("#eyelid-down", {
    morphSVG: { shape: "#eyelid-up" },
    duration: 0.1,
    delay: 0.5
  })
  .to("#eyelid-down", { morphSVG: { shape: "#eyelid-down" }, duration: 0.1 })
  .to("#eyelid-down", { morphSVG: { shape: "#eyelid-up" }, duration: 0.1 })
  .to("#eyelid-down", { morphSVG: { shape: "#eyelid-down" }, duration: 0.05 });

var tailSwish = gsap.timeline({ repeat: -1 });
tailSwish
  .to("#tail-fin", { scaleX: 0.85, ease: "power3.out", duration: 0.7 })
  .to("#tail-fin", { scaleX: 1, ease: "none", duration: 0.7 })
  .to("#tail-fin", { scaleX: 1.15, ease: "power3.out", duration: 0.7 })
  .to("#tail-fin", { scaleX: 1, ease: "none", duration: 0.7 });

var topSwish = gsap.timeline({ repeat: -1 });
topSwish
  .to("#top-fin", { scaleX: 1.05, ease: "sine.out", duration: 0.72 })
  .to("#top-fin", { scaleX: 1, ease: "none", duration: 0.72 })
  .to("#top-fin", { scaleX: 0.95, ease: "sine.out", duration: 0.72 })
  .to("#top-fin", { scaleX: 1, ease: "none", duration: 0.72 });

var bottomFrontFin = gsap.timeline({ repeat: -1 });
bottomFrontFin
  .to("#bottom-fin1", {
    scaleX: 0.9,
    scaleY: 0.89,
    ease: "bottom.inOut",
    duration: 0.4
  })
  .to("#bottom-fin1", {
    scaleX: 1,
    scaleY: 1,
    ease: "bottom.inOut",
    duration: 0.6
  });

var bottomBackFin = gsap.timeline({ repeat: -1 });
bottomBackFin
  .to("#bottom-fin2", {
    scaleX: 1.11,
    scaleY: 1.12,
    ease: "bottom.inOut",
    duration: 0.4
  })
  .to("#bottom-fin2", {
    scaleX: 1,
    scaleY: 1,
    ease: "bottom.inOut",
    duration: 0.6
  });

function lightFunction() {
  // if lights off
  if (mainDiv.classList.contains("dark")) {
    mainDiv.classList.remove("dark");
    mainDiv.classList.add("light");
  } else {
    // if lights on
    mainDiv.classList.remove("light");
    mainDiv.classList.add("dark");
  }
}