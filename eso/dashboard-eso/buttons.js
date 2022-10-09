let timer;

// #3 Blubby Button
const animateButton = e => {
  e.preventDefault;
  e.target.classList.remove('animate'); //reset animation

  e.target.classList.add('animate');
  setTimeout(() => e.target.classList.remove('animate'), 400);
};

const bubblyButtons = document.getElementsByClassName('bubbly-button');

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


// #7 Button Loader
const buttonLoader = document.querySelector('.button-loader');

buttonLoader.addEventListener('click', () => {
  buttonLoader.classList.add('sending');
  setTimeout(() => buttonLoader.classList.remove('sending'), 4500);
});


// #9 Download Animation Button
const downloadButton = document.querySelector('.download-anim-button');

downloadButton.addEventListener('click', () => {
  clearTimeout(timer);
  downloadButton.classList.add('active');

  timer = setTimeout(() => {
    downloadButton.classList.remove('active');
    downloadButton.classList.add('success');

    clearTimeout(timer);
    timer = setTimeout(() => downloadButton.classList.remove('success'), 1700);
  }, 4500);
});


// #12 Button Concept
const conceptButton = document.querySelector('.concept-button');

conceptButton.addEventListener('click', () => {
  conceptButton.classList.add('success');
  clearTimeout(timer);
  timer = setTimeout(() => conceptButton.classList.remove('success'), 1700);
});


// #18 Group with SVG icons
const insetShadowButtons = document.querySelectorAll('.inset-shadow-icon');
const toggleActiveButton = function () {
  insetShadowButtons.forEach(item => item !== this ?
  item.classList.remove('active') :
  item.classList.toggle('active'));

};

insetShadowButtons.forEach(button => button.addEventListener('click', toggleActiveButton));


// #23 WOW Button
const wowButtons = document.querySelectorAll('.wow-button');

const wowClick = function () {
  clearTimeout(timer);
  this.classList.add('active');
  timer = setTimeout(() => this.classList.remove('active'), 300);
};

wowButtons.forEach(button => button.addEventListener('click', wowClick));


// #29 Gooey Menu
const createHamburgerMenu = (container, type) => {
  const containerNode = document.querySelector(container);
  const button = containerNode.querySelector('.menu-button');
  const menuItems = containerNode.querySelectorAll('.menu-item');
  let openDistance = 0;

  const activeMenu = () => {
    button.classList.toggle('active');

    if (!button.classList.contains('active')) {
      menuItems.forEach(item => item.removeAttribute('style'));
    } else
    {
      switch (type) {
        case 'circle':
          openDistance = Math.round(containerNode.clientWidth + containerNode.clientWidth * .33);

          menuItems.forEach((item, index) => {
            const angle = -Math.PI / 2 + 2 * Math.PI / menuItems.length * index;
            const x = Math.round(Math.cos(angle) * openDistance);
            const y = Math.round(Math.sin(angle) * openDistance);

            item.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            item.style.transitionDuration = `${0.08 + 0.1 * (index + 1)}s`;
          });
          break;

        case 'semicircle':
          openDistance = Math.round(containerNode.clientWidth + containerNode.clientWidth * .47);

          menuItems.forEach((item, index) => {
            const angle = 0.1 + (Math.PI - 0.2) / (menuItems.length - 1) * index;
            const x = Math.round(Math.cos(angle) * openDistance);
            const y = Math.round(Math.sin(angle) * openDistance);

            item.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            item.style.transitionDuration = `${0.08 + 0.08 * (index + 1)}s`;
          });
          break;

        case 'open-line':
          openDistance = Math.round(containerNode.clientWidth + containerNode.clientWidth * .39);

          menuItems.forEach((item, index) => {
            item.style.transform = `translateX(${openDistance * (index + 1)}px) scale(1)`;
            item.style.transitionDuration = `${0.09 + 0.1 * (index + 1)}s`;
          });
          break;

        case 'closed-line':
          openDistance = containerNode.clientWidth + 2;

          menuItems.forEach((item, index) => {
            item.style.transform = `translateX(${openDistance * (index + 1)}px) scale(1)`;
            item.style.transitionDuration = `${0.09 + 0.08 * (index + 1)}s`;
          });
          break;}

    }
  };

  button.addEventListener('click', activeMenu);
};

createHamburgerMenu('.menu.circle', 'circle');
createHamburgerMenu('.menu.semicircle', 'semicircle');
createHamburgerMenu('.menu.open-line', 'open-line');
createHamburgerMenu('.menu.closed-line', 'closed-line');


// #30 Animation Submit Button
const submitAnimButton = document.querySelector('.anim-submit-button');

submitAnimButton.addEventListener('click', function () {
  clearTimeout(timer);
  this.classList.add('wait');

  timer = setTimeout(() => {
    this.classList.remove('wait');
    this.classList.add('success');

    clearTimeout(timer);
    timer = setTimeout(() => this.classList.remove('success'), 1250);
  }, 4500);
});