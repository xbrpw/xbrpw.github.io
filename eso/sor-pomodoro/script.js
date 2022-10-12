var s_total, s_pace, s_progress, s_init;
var b_total, b_pace, b_progress, b_init;
var timer;

function edit(id) {
  if (id == "sPlus")
    document.getElementById("session").textContent = parseInt(document.getElementById("session").textContent) + 1;
    if (id == "bPlus")
    document.getElementById("break").textContent = parseInt(document.getElementById("break").textContent) + 1;
    if (id == "sMinus")
    document.getElementById("session").textContent = parseInt(document.getElementById("session").textContent) - 1;
    if (id == "bMinus")
    document.getElementById("break").textContent = parseInt(document.getElementById("break").textContent) - 1;
}

function podomoro() {
  s_total = 0;
  s_pace = 100 / (parseInt(document.getElementById("session").textContent) * 60);
  s_progress = document.getElementById("session").textContent;
  s_init = s_progress;
  s_progress = s_init * 60;

  b_total = 0;
  b_pace = 100 / (parseInt(document.getElementById("break").textContent) * 60);
  b_progress = document.getElementById("break").textContent;
  b_init = b_progress;
  b_progress = b_init * 60;

  timer = window.setInterval(updateBreak, 1000);
}

function updateBreak() {
  if (s_progress >= 0) {
    document.getElementById("session").textContent = s_progress;
    document.getElementById("session-progress").style.width = s_total + "%";
    --s_progress;
    s_total += s_pace;
  } else if (b_progress >= 0) {
    document.getElementById("break").textContent = b_progress;
    document.getElementById("break-progress").style.width = b_total + "%";
    --b_progress;
    b_total += b_pace;
  } else {
    alert("Pomodoro Complete");
    document.getElementById("session").textContent = s_init;
    document.getElementById("session-progress").style.width = "0%";
    document.getElementById("break").textContent = b_init;
    document.getElementById("break-progress").style.width = "0%";
    document.getElementById("total_pomos").textContent = parseInt(document.getElementById("total_pomos").textContent) + 1;
    window.clearInterval(timer);
  }
}