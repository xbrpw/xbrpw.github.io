const popUp = document.querySelector('.popUp');
  const popUpCloseButton = document.querySelector('.popUp-close');
  let currentTime = new Date().getTime();

  popUpCloseButton.onclick = function () {
    popUp.classList.add('hidden');
    localStorage.setItem('popUpHidden', true);
    localStorage.setItem('timeClosed', currentTime);
  };

  if(localStorage.getItem('popUpHidden', true)) {
    popUp.classList.add('hidden');
  }

  const closedTime = parseInt(localStorage.getItem('timeClosed'));
  const oneDay = 86400000; //24hrs in ms

  if(currentTime >= closedTime + oneDay) {
    localStorage.setItem('popUpHidden', false);
    popUp.classList.remove('hidden');
  }