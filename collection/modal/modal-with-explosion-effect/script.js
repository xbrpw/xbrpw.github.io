const btn = document.getElementById("btn");
const modal_wrapper = document.getElementById("modal_wrapper");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const explosion = document.getElementById("explosion");
const okay = document.getElementById("okay");
const bg = document.getElementById("bg");

btn.addEventListener("click", openModal, false);

close.addEventListener("click", closeModal, false);
okay.addEventListener("click", closeModal, false);
bg.addEventListener("click", closeModal, false);

function openModal() {
  modal_wrapper.classList.add("show");
  explosion.setAttribute("src", "https://cdn.pbrd.co/images/mYwKJYJI.gif");

  setTimeout(function() {
    modal.classList.remove("hide");
    modal.classList.add("show");
  }, 250);
}

function closeModal() {
  explosion.setAttribute("src", "");

  modal_wrapper.classList.remove("show");
  modal_wrapper.classList.add("hide");

  modal.classList.remove("show");
  modal.classList.add("hide");
}