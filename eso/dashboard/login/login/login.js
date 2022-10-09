const email = document.querySelector('input[name="email"]'),
  password = document.querySelector('input[name="password"]'),
  createEmail = document.querySelector('input[name="createEmail"]'),
  createPassword = document.querySelector('input[name="createPassword"]'),
  confirmPassword = document.querySelector('input[name="confirmPassword"]'),
  loginBtn = document.querySelector('#loginBtn'),
  loginDiv = document.querySelector('#login'),
  createBtn = document.querySelector('#createBtn'),
  createDiv = document.querySelector('#create'),
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
  } else {
    alert('Passwords don\'t match; Try again :)');
  }
}

// Login Function
function login() {
  if(email.value == JSON.parse(localStorage.getItem('email'))) {
    if(password.value == JSON.parse(localStorage.getItem('password'))) {
      loginDiv.style.display = 'none';
      createDiv.style.display = 'none';
      loggedInDiv.style.display = 'block';
    }
  } else {
    alert('Login Credentials invalid. Perhaps you mis-typed..');
    console.log('Somewhere, an error. I AM ERRooRRRROOOOORRRR');
  }

}
