const email = document.querySelector('input[name="email"]'),
  password = document.querySelector('input[name="password"]'),
  createEmail = document.querySelector('input[name="createEmail"]'),
  createPassword = document.querySelector('input[name="createPassword"]'),
  confirmPassword = document.querySelector('input[name="confirmPassword"]'),
  
  loginBtn = document.querySelector('#loginBtn'),
  loginDiv = document.querySelector('#login'),
  createBtn = document.querySelector('#createBtn'),
  createDiv = document.querySelector('#create'),
  forgetDiv = document.querySelector('#forget'),
  loggedInDiv = document.querySelector('#loggedIn');

// Event Listeners 
createBtn.addEventListener('click', createAccount);
loginBtn.addEventListener('click', login);

// Create Account Function
function createAccount() {
  if(createPassword.value == confirmPassword.value) {
    localStorage.setItem('email', JSON.stringify(createEmail.value));
    localStorage.setItem('password', JSON.stringify(createPassword.value));
    createDiv.style.display = 'none';
    forgetDiv.style.display = 'none';
  } else {
    alert('Error, intenta de nuevo');
  }
}


// Create Forget Function  QUEDA PENDEIENTE 
function createForget() {
  if(createPassword.value == confirmPassword.value) {
    localStorage.setItem('email', JSON.stringify(createEmail.value));
    localStorage.setItem('password', JSON.stringify(createPassword.value));
    createDiv.style.display = 'none';   
  } else {
    alert('Error, intenta de nuevo');
  }
}

// Login Function
function login() {
  if(email.value == JSON.parse(localStorage.getItem('email'))) {
    if(password.value == JSON.parse(localStorage.getItem('password'))) {
      loginDiv.style.display = 'none';
      createDiv.style.display = 'none';
      forgetDiv.style.display = 'none';
      loggedInDiv.style.display = 'block';
    }
  } else {
    alert('Datos invalidos o usuario no registrado');
    console.log('Somewhere, an error. I AM ERRooRRRROOOOORRRR');
  }

}
