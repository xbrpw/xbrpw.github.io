// SET THE VARIABLES
const one = document.getElementById("div1");
const two = document.getElementById("div2");
const three = document.getElementById("div3");
const four = document.getElementById("div4");
const five = document.getElementById("div5");
const six = document.getElementById("showMore");
// YOU CAN ADD MORE:
//const seven
//const eight
//const nine

// SET THE EVENT LISTENERS
// variableName.addEventListener("event", functionName)
one.addEventListener("click", randomColorChanger);
two.addEventListener("mouseover", changeRed);
two.addEventListener("mouseout", resetStyle);
three.addEventListener("dblclick", revealImage);
four.addEventListener("mousedown", invertColors);
four.addEventListener("mouseup", resetStyle);
five.addEventListener("click", moveAnimation);
six.addEventListener("click", showMore);

// FUNCTIONS THAT DO FUN THINGS!

// Pick a random color & set it as the background
function randomColorChanger() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  one.style.backgroundColor = "#" + randomColor;
  randomColorId.innerText = "#" + randomColor;
}

// Change background color to red
function changeRed() {
  two.style.backgroundColor = "red";
}

// Reset background color
function resetStyle(e) {
  e.target.style.backgroundColor = "";
  e.target.style.color = "";
}

// Append CSS class img1 to show the image
function revealImage() {
  three.classList.add("img1");
  document.getElementById("p3").classList.add("hidden");
}

// Invert Colors
function invertColors() {
  four.style.backgroundColor = "black";
  four.style.color = "white";
}

// Animation
function moveAnimation() {
  const car = document.getElementById("animatedElement");
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 180) {
      clearInterval(id);
    } else {
      pos++;
      car.style.left = pos + "px";
      car.style.right = pos + "px";
    }
  }
}

// If text is hidden, then show text when button is clicked
function showMore() {
  const theText = document.getElementById("hidden-text");
  if (theText.style.display === "none") {
    theText.style.display = "block";
  } else {
    theText.style.display = "none";
  }
}