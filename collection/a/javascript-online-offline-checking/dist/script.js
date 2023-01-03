var checking = function() {
      var status = document.getElementById('status');

      if ( navigator.onLine && status.classList.contains('off') ) {
        status.innerHTML = 'Online';
        status.classList.remove('off');
        status.classList.add('on');
      }
      if ( ! navigator.onLine && status.classList.contains('on') ) {
        status.innerHTML = 'Offline';
        status.classList.remove('on');
        status.classList.add('off'); // can't use .replace() because of Chrome
      }
    };

window.addEventListener('online', checking);
window.addEventListener('offline', checking);