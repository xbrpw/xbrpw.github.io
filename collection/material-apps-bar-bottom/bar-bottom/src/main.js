const browserSupportsCSSPaintWorklet = () => {
  const supported = ('paintWorklet' in CSS);
  return supported;
}

document.addEventListener('DOMContentLoaded', e => {
  console.clear();
  if (browserSupportsCSSPaintWorklet()) {
    // Register new Pain Worklet
    (CSS.paintWorklet || paintWorklet).addModule('./src/painter.js');
  } else {
    // create Fallback
    const examples = [...document.querySelectorAll('.container__example')];
    
    console.log(examples);
    
    examples.forEach((elm, ind, arr) => {
      const p = document.createElement('p');
      const a = document.createElement('a');
      
      p.classList.add('container__example--no-support');
      p.innerHTML = `Your Browser does not support the `;
      
      a.href = 'https://developers.google.com/web/updates/2018/01/paintapi';
      a.target = '_blank';
      a.innerText = `CSS Paint Worklet!`;
      
      elm.appendChild(p);
      p.appendChild(a);
    });
  }
}, false);