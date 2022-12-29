var dialpadBtn = document.querySelector('#js-dialpad-btn'),
    dialpad = document.querySelector('#js-dialpad'),
    homeBtn = document.querySelector('#js-home-btn'),
    backBtn = document.querySelector('#js-back-btn'),
    screenui = document.querySelector('#js-screen');

dialpadBtn.addEventListener('click', function () {
  screenui.classList.toggle('is-open')
});

function close() {
  screenui.classList.remove('is-open')
}
homeBtn.addEventListener('click', close);
backBtn.addEventListener('click', close);