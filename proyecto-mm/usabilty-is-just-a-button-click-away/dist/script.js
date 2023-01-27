/* Variables */
let darkMode = false
let fontSize = 16

/* DOM Elements */
const darkModeBtn = document.getElementById("dark-mode-button")
const plusFont = document.getElementById("plusFont")
const minusFont = document.getElementById("minusFont")
const heading = document.getElementById("heading")
const content = document.getElementById("content")

/* Event Listeners */
darkModeBtn.addEventListener("click", changeMode);
plusFont.addEventListener("click", increaseFont);
minusFont.addEventListener("click", reduceFont);


/* Functions */

function changeMode() {
  
//the first click of the button changes to dark mode  

    if (darkMode) {  
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      darkModeBtn.innerHTML = "Dark Mode";
      darkMode = false;    
        
//the second click of the button changes to light mode  
      
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "yellow";
      darkModeBtn.innerHTML = "Light Mode";
      darkMode = true;
    }

}

function increaseFont() {
  minusFont.disabled = false
  fontSize++
  content.style.fontSize = `${fontSize}px`
  heading.style.fontSize = `${fontSize * 2}px`
  if (fontSize == 42) {
    plusFont.disabled = true
  }
  
}

function reduceFont() {
  plusFont.disabled = false
  fontSize--
  content.style.fontSize = `${fontSize}px`
  heading.style.fontSize = `${fontSize * 2}px`
  if (fontSize == 8) {
    minusFont.disabled = true
  }
}