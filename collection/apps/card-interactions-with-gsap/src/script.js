const { innerWidth } = window;
const { set, to } = gsap;

const stackPadding = 24;
let stackStep = -1;
let mainStep = 0;
let showOptions = false;

let cardHeight = 600;
let cardWidth = 340;
let deviceWidth = 414;
let sectionOffset = -500;

if (innerWidth < 640) {
  deviceWidth = innerWidth;
  cardWidth = (340 / 414) * deviceWidth;
  cardHeight = (600 / 414) * deviceWidth;
  sectionOffset = -428;
}

const restCardSize = deviceWidth - 2 * stackPadding;
const stackBackgroundOffset = cardWidth - cardHeight;

const click = (item) => (func) => {
  document.querySelector(item).addEventListener("click", func);
};

const btnOptions = ".btn-options";
const btnHome = ".btn-home";

const page = ".page";
const backdrop = ".backdrop";
const nav = ".nav";
const titleSets = ".title-sets";
const titleSet1 = ".title-set-1";
const titleSet2 = ".title-set-2";
const section2 = ".section-2";
const section1 = ".section-1";
const cardSet = ".card-set";

const card1 = ".card-1";
const card2 = ".card-2";
const card3 = ".card-3";
const card = ".card";
const gallery = ".gallery";
const userDetails = ".user-details";
const btnFolders = ".btn-folders";
const btnCamera = ".btn-camera";
const btnPlay = ".btn-play";
const navBottomBack = ".nav-bottom-back";
const plusBtnBg = ".plus-btn-bg";
const plusIcon = ".plus-icon";

const iconHome = ".icon-home";
const iconArrowDown = ".icon-arrow-down";

set(gallery, { scale: 0 });
set(backdrop, { display: "none", opacity: 0 });
set(titleSet2, { scale: 0 });
set(titleSet2, { scale: 0 });
set(userDetails, { scale: 0.8, transformOrigin: "Bottom Left" });
set(btnFolders, { scale: 0, x: 0, y: 0 });
set(btnPlay, { scale: 0, x: 0, y: 0 });
set(btnCamera, { scale: 0, x: 0, y: 0 });
set(plusBtnBg, { scale: 0 });
set(cardSet, { width: restCardSize, height: restCardSize });
set(card, { backgroundSize: `${restCardSize}px ${restCardSize}px` });
set(iconArrowDown, { opacity: 0 });

click(btnOptions)(() => {
  showOptions = !showOptions;

  const getPos = (angle) => ({
    x: 100 * Math.cos(angle),
    y: 100 * Math.sin(angle)
  });

  const alpha = Math.PI * 0.3;
  const start = Math.PI * -0.5;

  if (showOptions) {
    to(page, { scale: 0.8 });
    to(backdrop, { display: "block", opacity: 0.7 });
    to(navBottomBack, { scale: 0 });
    to(btnFolders, { scale: 1, ...getPos(start - alpha) });
    to(btnCamera, { scale: 1, ...getPos(start), delay: 0.15 });
    to(btnPlay, { scale: 1, ...getPos(start + alpha), delay: 0.3 });
    to(plusBtnBg, { scale: 1.05 });
    to(plusIcon, { rotation: 45, color: "#ffffff" });
  } else {
    to(page, { scale: 1 });
    to(backdrop, { display: "none", opacity: 0 });
    to(navBottomBack, { scale: 1 });
    to(btnFolders, { scale: 0, x: 0, y: 0, delay: 0.3 });
    to(btnCamera, { scale: 0, x: 0, y: 0, delay: 0.15 });
    to(btnPlay, { scale: 0, x: 0, y: 0 });
    to(plusBtnBg, { scale: 0 });
    to(plusBtnBg, { scale: 0 });
    to(plusIcon, { rotation: 0, color: "#39414D" });
  }
});

const roi = new Hammer(document.getElementById("section-1"));

roi.on("swipe", ({ direction }) => {
  if (mainStep === 1) {
    if (direction === 2) {
      stackStep = Math.min(stackStep + 1, 2);
    } else {
      stackStep = Math.max(stackStep - 1, 0);
    }

    updateStack();
  }
});

const updateStack = () => {
  if (stackStep === 0) {
    to(card1, {
      x: 0,
      scale: 1,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5}px 0px`
    });
    to(card2, {
      x: 30,
      scale: 0.9,
      backgroundSize: `${cardHeight * 1.2}px ${cardHeight * 1.2}px`,
      backgroundPosition: `${stackBackgroundOffset * 1.2 * 0.5}px ${
        -cardHeight * 0.2 * 0.5
      }px`
    });
    to(card3, {
      x: 60,
      scale: 0.8,
      backgroundSize: `${cardHeight * 1.2}px ${cardHeight * 1.2}px`,
      backgroundPosition: `${stackBackgroundOffset * 1.2 * 0.5}px ${
        -cardHeight * 0.2 * 0.5
      }px`
    });
  }
  if (stackStep === 1) {
    to(card1, {
      x: -deviceWidth,
      scale: 0.8,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5 + deviceWidth}px 0px`
    });
    to(card2, {
      x: 0,
      scale: 1,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5}px 0px`
    });
    to(card3, {
      x: 30,
      scale: 0.9,
      backgroundSize: `${cardHeight * 1.2}px ${cardHeight * 1.2}px`,
      backgroundPosition: `${stackBackgroundOffset * 1.2 * 0.5}px ${
        -cardHeight * 0.2 * 0.5
      }px`
    });
  }
  if (stackStep === 2) {
    to(card1, {
      x: -deviceWidth,
      scale: 0.8,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5 + deviceWidth}px 0px`
    });
    to(card2, {
      x: -deviceWidth,
      scale: 0.8,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5 + deviceWidth}px 0px`
    });
    to(card3, {
      x: 0,
      scale: 1,
      backgroundSize: `${cardHeight}px ${cardHeight}px`,
      backgroundPosition: `${stackBackgroundOffset * 0.5}px 0px`
    });
  }

  if (stackStep === -1) {
    to(card1, {
      x: 0,
      backgroundSize: `${restCardSize}px ${restCardSize}px`,
      backgroundPosition: "0px 0px",
      scale: 1
    });
    to(card2, {
      x: 0,
      backgroundSize: `${restCardSize}px ${restCardSize}px`,
      backgroundPosition: "0px 0px",
      scale: 0.9
    });
    to(card3, {
      x: 0,
      backgroundSize: `${restCardSize}px ${restCardSize}px`,
      backgroundPosition: "0px 0px",
      scale: 0.8
    });
  }
};

const stackOnSelect = () => {
  to(card1, {
    backgroundPosition: `${(deviceWidth - cardHeight) * 0.5}px 0px`
  });
  to(card2, {
    backgroundPosition: `${(deviceWidth - cardHeight) * 0.5}px 0px`
  });
  to(card3, {
    backgroundPosition: `${(deviceWidth - cardHeight) * 0.5}px 0px`
  });
};

const updateLayout = (reset = false) => {
  if (mainStep === 0) {
    to(nav, { height: 120 });
    to(titleSet1, { scale: 1, transformOrigin: "Top Left" });
    to(titleSet2, { scale: 0, transformOrigin: "Bottom Left" });
    to(titleSets, { y: 0 });

    to(section1, { height: deviceWidth, y: 0 });
    to(cardSet, { height: restCardSize, width: restCardSize });
    to(userDetails, { scale: 0.8, transformOrigin: "Bottom Left" });

    stackStep = -1;
    updateStack();
  }

  if (mainStep === 1) {
    to(nav, { height: 72 });
    to(titleSet1, { scale: 0, transformOrigin: "Top Left" });
    to(titleSet2, { scale: 1, transformOrigin: "Bottom Left" });
    to(titleSets, { y: -120 });
    to(userDetails, { scale: 0.85, transformOrigin: "Bottom Left" });

    to(section1, { height: 1200, y: 0, padding: stackPadding });
    to(cardSet, { height: cardHeight, width: cardWidth });
    to(card, { borderRadius: 24 });
    to(gallery, { scale: 0 });
    if (reset) {
      stackStep = 0;
    }
    to(iconArrowDown, { opacity: 0, scale: 0 });
    to(iconHome, { opacity: 1, scale: 1 });
    updateStack();
  }

  if (mainStep === 2) {
    to(section1, { y: sectionOffset, padding: 0, height: 1200 });
    to(gallery, { scale: 1 });
    to(cardSet, { width: deviceWidth, height: cardHeight });
    to(card, { borderRadius: 0 });
    to(userDetails, { scale: 1, transformOrigin: "Bottom Left" });
    to(iconArrowDown, { opacity: 1, scale: 1 });
    to(iconHome, { opacity: 0, scale: 0 });
    stackOnSelect();
  }
};

updateLayout();

roi.on("tap", () => {
  if ([0, 1].includes(mainStep)) {
    mainStep += 1;
    updateLayout(true);
  }
});

click(btnHome)(() => {
  if ([1, 2].includes(mainStep)) {
    mainStep -= 1;
    updateLayout(false);
  }
});
