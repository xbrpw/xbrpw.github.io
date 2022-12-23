const dots = document.querySelector(".dots");

setInterval(() => {
  const hasThree = dots.textContent.length === 3;
  if (hasThree) {
    dots.textContent = "";
  } else {
    dots.textContent += ".";
  }
}, 1000);