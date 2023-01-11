const avatars = document.querySelectorAll(".avatar");

avatars.forEach((a) => {
  const charCodeRed = a.dataset.label.charCodeAt(0);
  const charCodeGreen = a.dataset.label.charCodeAt(1) || charCodeRed;

  const red = Math.pow(charCodeRed, 7) % 200;
  const green = Math.pow(charCodeGreen, 7) % 200;
  const blue = (red + green) % 200;

  a.style.background = `rgb(${red}, ${green}, ${blue})`;
});