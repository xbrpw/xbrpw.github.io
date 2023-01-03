const setHeight = () => {
  const container = document.querySelector('.container')
  if (window.innerWidth > 640) {
    container.style.setProperty("--height", '360px');
    container.style.setProperty("--halfHeight", '180px');
  } else {
    container.style.setProperty("--height", `${window.innerWidth / 2}px`);
    container.style.setProperty("--halfHeight", `${window.innerWidth / 4}px`);
  }
};
window.addEventListener('resize', () => {
  setHeight();
});
setHeight();