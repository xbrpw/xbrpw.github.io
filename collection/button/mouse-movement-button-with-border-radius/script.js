const buttonMouseMoveHandler = e => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty('--x', `${x}px`);
  e.target.style.setProperty('--y', `${y}px`);
};

document.addEventListener('DOMContentLoaded', e => {
  console.clear();

  const button = document.querySelector('[js-button]');

  button.addEventListener('mousemove', buttonMouseMoveHandler, false);
}, false);