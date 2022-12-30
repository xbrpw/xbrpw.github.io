const bodymovinDiv = document.querySelector('.bodymovin');
const zone = document.querySelector('.zone');
let animationRunning = false;
const animData = {
  container: bodymovinDiv,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49240/stick-man.json' };


const anim = lottie.loadAnimation(animData);
anim.setSpeed(2.6);

zone.addEventListener('mouseenter', mouseEnter);
zone.addEventListener('mouseleave', mouseLeave);

function mouseEnter() {
  if (!animationRunning) {
    animationRunning = true;
    bodymovinDiv.classList.remove('bodymovin--hidden');
    anim.loop = false;
    anim.setDirection(1);
    anim.playSegments([0, 8], true);
    anim.addEventListener('complete', startLoop);
  }
}

function mouseLeave() {
  // anim.stop();
  bodymovinDiv.classList.add('bodymovin--hidden');
  animationRunning = false;
  anim.removeEventListener('complete', startLoop); // If we leave before the loop starts we want to make sure to clear it
}

function startLoop() {
  anim.loop = true;
  anim.removeEventListener('complete', startLoop);
  anim.playSegments([9, 13], true);
}