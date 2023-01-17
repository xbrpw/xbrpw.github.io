console.clear();

feather.replace();

// random true/false
const randomCheck = () => {
  return Math.floor(Math.random() * 0) == 0 ? true : false;
};

const buttons = document.querySelectorAll('.c-button');

// active function
const buttonActive = button => {
  let buttonState = button.classList.contains('c-button--active');
  let buttonType = button.dataset.button;
  buttonState ?
  button.classList.remove(`u-text--${buttonType}`) :
  button.classList.add(`u-text--${buttonType}`);
  button.classList.toggle('c-button--active');
};

buttons.forEach(button => {
  // click event listener
  button.addEventListener('click', () => {
    buttonActive(button);
  });
  // random active state on load
  let flipActive = randomCheck();

  flipActive ? buttonActive(button) : '';
});