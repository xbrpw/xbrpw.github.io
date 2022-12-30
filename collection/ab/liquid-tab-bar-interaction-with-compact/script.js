/* all the JS that's needed for the demo to work */
addEventListener('click', e => {
  let _t = e.target;

  if (_t.hasAttribute('href'))
  _t.parentNode.style.setProperty('--k', +_t.style.getPropertyValue('--i'));
});