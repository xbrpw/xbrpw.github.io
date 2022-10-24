const get = id => document.getElementById(id);

const constrain = (val, min, max) => Math.max(min, Math.min(max, val));
const random = (min, max) => Math.random() * (max - min + 1) + min;
const toDegree = rad => rad * (180 / Math.PI);

/* DEFINITIONS */
const parent = get('eye');
const eyeball = get('eye-ball');
const pupil = get('eye-pupil');
const brow = get('eye-brow');

const cursor = get('cursor');
const hover = get('hover');
const input = get('field');
const reveal = get('reveal');

const expressions = getEyeExpressions();

/**
 * Parses and returns eyeball SVG d-values into a convient object
 * @returns {Object} — an obj containing obj[expressionName] = pathData
 */
function getEyeExpressions() {
  const expressions = get('expressions').children;
  const obj = Object.fromEntries(
  Array.from(expressions).
  map(exp => {
    const key = exp.dataset.expression;
    const val = exp.getAttribute('d');
    return [key, val];
  }));


  return obj;
}

/**
 * Sets the expression of the eyeball
 * @param {String} — expression (e.g. 'eye.blink')
 * @param {Object} — Anime.js animation options
 * @returns {Object} — an obj containing [expressionName, pathData] key-value pairs
 */
function setEyeExpression(exp, options) {
  anime({
    targets: eyeball,
    d: [{ value: expressions[exp] }],
    easing: 'easeOutQuad',
    duration: 0,
    ...options });

}

/**
 * Gets the center-point of an SVG element
 * @param {SVGElement} — SVG DOM element
 * @returns {Object} — the center [x, y] coordinates of an SVG element
 */
function getSVGCenterPoint(el) {
  const bbox = el.getBoundingClientRect();
  const cx = bbox.left + bbox.width / 2 - 10;
  const cy = bbox.top + bbox.height / 2 - 10;
  return [cx, cy];
}

/* EYEBALL METHODS */
function blink() {
  setEyeExpression('eye.default');
  setEyeExpression('eye.closed', {
    direction: 'alternate',
    duration: 50 });

}

function lookToPosition(x, y) {
  anime({
    targets: pupil,
    translateX: x,
    translateY: y,
    easing: 'easeOutQuad',
    duration: 50 });

}

function moveToPosition(x, y) {
  anime({
    targets: parent,
    translateX: x,
    translateY: y,
    easing: 'easeOutQuad',
    duration: 50 });

}

/* EVENT LISTENERS */
let closed = false;
let focused = false;

hover.addEventListener('mouseenter', () => {
  if (!closed) blink();
});

hover.addEventListener('mouseleave', () => {
  if (!closed) blink();
  if (!focused) {
    lookToPosition(0, 0);
    moveToPosition(0, 0);
  }
});

hover.addEventListener('mousemove', e => {
  const [cx, cy] = getSVGCenterPoint(eyeball);
  const mx = e.pageX;
  const my = e.pageY;

  const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);
  const rot = Math.atan2(mx - cx, my - cy) * -1;

  // move the pointer around eye
  anime({
    targets: cursor,
    display: 'block',
    translateX: mx,
    translateY: my,
    rotate: toDegree(rot),
    duration: 0 });


  if (!focused && !closed) {
    moveToPosition(
    -1 * (mx - cx) / dist,
    -1 * (my - cy) / dist);


    lookToPosition(
    constrain((mx - cx) / 15, -8, 7),
    constrain((my - cy) / 20, -4, 4));

  }
});

hover.addEventListener('click', () => {
  const [cx, cy] = getSVGCenterPoint(eyeball);

  // pointer poke anim
  anime({
    targets: cursor,
    display: 'block',
    translateX: cx,
    translateY: cy,
    direction: 'alternate',
    easing: 'easeInOutCubic',
    duration: 100 });


  // input password anim
  const inputSwapAnim = anime.timeline({
    autoplay: false,
    easing: 'easeInOutCubic' });


  inputSwapAnim.
  add({
    targets: input,
    scaleY: [1, 0],
    opacity: [1, 0],
    perspective: 1000,
    transformOrigin: '0% 100%',
    duration: 300 }).

  add({
    targets: reveal,
    scaleY: [0, 1],
    opacity: [0, 1],
    perspective: 1000,
    transformOrigin: '0% 0%',
    duration: 300 },
  0);

  closed = !closed;
  if (closed) {
    setEyeExpression('eye.closed', { duration: 100, delay: 80 });
    inputSwapAnim.play();

  } else {
    setEyeExpression('eye.default', { duration: 140, delay: 80 });
    inputSwapAnim.seek(inputSwapAnim.duration * 0.999);
    inputSwapAnim.play();
    inputSwapAnim.reverse();
  }
});

[input, reveal].forEach(el => {
  el.addEventListener('input', e => {
    input.value = reveal.value = e.target.value;

    anime({
      targets: brow,
      translateY: [-6, 0],
      rotate: () => [random(-45, 45), 0],
      transformOrigin: '50% 50%',
      duration: 1000 });

  });
});

input.addEventListener('focus', () => {
  focused = true;
  if (closed) return;
  blink();
  lookToPosition(-8, 0);
});

input.addEventListener('blur', () => {
  focused = false;
  blink();
  lookToPosition(0, 0);
});