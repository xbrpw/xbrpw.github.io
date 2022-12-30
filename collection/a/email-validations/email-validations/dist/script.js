const inputField = document.querySelector("input[type='email']");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField.value)) {
    alert("success");
  } else {
    alert("failed");
  }
});