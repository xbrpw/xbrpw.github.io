// elements
const text = document.getElementById('text');
const input = document.getElementById('input');

// add spans
function addSpans(el, text) {
  let letters = text.split('');
  let html = '';
  for (var i = 0; i < letters.length; i++) {
    html += '<span>' + letters[i] + '</span>';
  }
  el.innerHTML = html;
}
addSpans(text, text.innerText);

// setup timeline
const tl = new TimelineLite();
tl.staggerFromTo("#text span", 1.7, {
  y: -window.innerHeight / 2 - 100,
  x: -window.innerHeight / 2 - 100 },
{
  y: 0,
  x: 0,
  ease: Bounce.easeOut },
0.03, "stagger");

window.addEventListener('click', () => {
  tl.restart();
});

tl.play();