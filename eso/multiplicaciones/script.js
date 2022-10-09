// Normally there are sounds for right and wrong answers, but related files are unable to be used in CodePen. 

// DOM elements
const numContainer = document.getElementById("num-display");
const submitBtn = document.getElementById("enter-btn");
const input = document.getElementById("answer-input");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const timerContainer = document.getElementById("timer");
const scoreContainer = document.getElementById("score");

const correctSound = new Audio("ding.wav");
const incorrectSound = new Audio("wrong.wav");
// const timesUpSound = new Audio("timesup.wav");

let currentScore = 0;
let secs = 60;
let secondsDisplay = document.getElementById("seconds-display");
secondsDisplay.textContent = `${secs}`;
const addPoint = () => (currentScore += 1);


//Generate two random numbers between 0 and 12
function generateNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = () => generateNum(0, 12);
const b = () => generateNum(0, 12);

//Store numbers from current question
let getNumsFromQuestion = []; 


//Timer function
function interval() {
  setInterval(() => {
    secs--;
    if (secs >= 0) { 
      secondsDisplay.textContent = `${secs}`;
    } else {
      clearInterval();
      numContainer.innerHTML = `Se acabo el tiempo!<br>Score: ${currentScore}`;
      numContainer.style = 'font-size: 1em';
    }
  }, 1000);
}

//Hide start button and display question
startBtn.addEventListener("click", function() {
  scoreContainer.textContent = `Score: ${currentScore}`;
  startBtn.display = "hidden";
  interval();
  displayQuestion();
});

//Display question using generated numbers 
function displayQuestion() {
  let num1 = a();
  let num2 = b();
  let nums = `${num1} x ${num2}`;
  getNumsFromQuestion.push(num1, num2);
  return (numContainer.textContent = nums);
}

//Assess user answer, play corresponding sound and update score
function result() {
  let userAnswer = document.getElementById("answer-input").value;
  if (
    parseInt(userAnswer) ===
    getNumsFromQuestion[0] * getNumsFromQuestion[1]
  ) {
    correctSound.play();
    addPoint();
    scoreContainer.textContent = `Score: ${currentScore}`;
  } else {
    incorrectSound.play();
  }
}

//Restart button event - Reset timer and score
restartBtn.addEventListener("click", function() {
  secs = 60;
  secondsDisplay.textContent = `${secs}`;
  currentScore = 0;
  scoreContainer.textContent = `Score: ${currentScore}`;
  clearInterval();
  displayQuestion();
});


//Enter key event - Accept user input and empty imput value for next question
input.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    result();
    getNumsFromQuestion = []; //reset array
    input.value = '';
    if (secs < 1) {
      correctSound.pause();
      incorrectSound.pause();
      return;
    }
    return displayQuestion();
  }
});

//Click event - Accept user input and empty imput value for next question
submitBtn.addEventListener("click", function() {
  result();
  getNumsFromQuestion = []; //reset array
  input.value = '';
  if (secs < 1) {
    correctSound.pause();
    incorrectSound.pause();
    return;
  }
  return displayQuestion();
});