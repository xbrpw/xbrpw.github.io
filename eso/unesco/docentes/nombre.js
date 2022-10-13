// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://www.xiiber.com/favicon.png') {
        myImage.setAttribute('src', 'https://www.xiiber.com/favicon.png');
    } else {
        myImage.setAttribute('src', 'https://www.xiiber.com/favicon.png');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('mark');
let myHeading = document.querySelector('strong');

function setUserName() {
    let myName = prompt('Escribe tu nickname de usuario');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hola, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hola, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}