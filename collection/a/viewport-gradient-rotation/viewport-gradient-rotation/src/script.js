const btnFullScreen = document.getElementById("fullscreen");
const btnColors = document.getElementById("colors");

btnFullScreen.addEventListener("click", toggleFullScreen);
btnColors.addEventListener("click", toggleColorClass);
document.addEventListener("fullscreenchange", toggleFullScreenClass);
document.addEventListener("webkitfullscreenchange", toggleFullScreenClass);

function toggleColorClass() {
  document.body.dataset.color == 3 ? document.body.dataset.color = 0 : document.body.dataset.color++;
}

function toggleFullScreenClass() {
  document.body.classList.toggle("is-fullscreen", document.fullscreenElement || document.webkitFullscreenElement);
}

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function init() {
  document.body.dataset.color = 0;
  if (!document.fullscreenEnabled) {
    btnFullScreen.remove();
  }
}

init();