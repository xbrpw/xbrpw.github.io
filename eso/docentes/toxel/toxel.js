(function ($) {
  $(function () {

    
var toxel = new ClipboardJS('.toxel');

toxel.on('success', function (e) {
  e.clearSelection();
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  showTooltip(e.trigger, 'Copiado');
});
toxel.on('error', function (e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
  showTooltip(e.trigger, fallbackMessage(e.action));
});




var toxels = document.querySelectorAll('.toxel');

for (var i = 0; i < toxels.length; i++) {
  toxels[i].addEventListener('mouseleave', clearTooltip);
  toxels[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute('class', 'toxel');
  e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
  elem.setAttribute('class', 'toxel tooltipped tooltipped-s');
  elem.setAttribute('aria-label', msg);
}

function fallbackMessage(action) {
  var actionMsg = '';
  var actionKey = (action === 'cut' ? 'X' : 'C');
  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    actionMsg = 'No support :(';
  } else if (/Mac/i.test(navigator.userAgent)) {
    actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
  } else {
    actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
  }
  return actionMsg;
}
    

  });
})(jQuery);