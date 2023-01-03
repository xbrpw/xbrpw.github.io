document.querySelectorAll("text").forEach((el, i) => {
  const styles = el.style;
  el.style.animationDelay = `${25 * i}ms`;
  el.classList.add("animate");
});