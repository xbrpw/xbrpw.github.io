const submitBtn = document.querySelector(".signUp__submit"),
   emailInput = document.querySelector(".signUp__input"),
   errorMessage = document.querySelector(".signUp__error"),
   successMessage = document.querySelector(".signUp__success");

submitBtn.addEventListener("click", validateEmail);

emailInput.addEventListener("focus", hideError);

function hideError(e) {
   e.preventDefault();
   errorMessage.classList.remove("show");
}

function validateEmail(input) {
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (input.value.match(validRegex)) {
      successMessage.classList.add("show");

      setTimeout(() => {
         input.value = "";
         successMessage.classList.remove("show");
      }, 4000);

      return true;
   } else {
      errorMessage.classList.add("show");
      return false;
   }
}