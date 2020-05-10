var navDiv = document.getElementById("nav");
var mainDiv = document.getElementById("main");
var hsEl = document.getElementById("highScore");
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("button");
var qTitleEl = document.getElementById("qTitle")
var answerEl = document.querySelector("answerContainer");
var secondsLeft = 5;

var questionEl = document.getElementById("question");
var choiceAEl = document.getElementById("choiceA")
var choiceBEl = document.getElementById("choiceB")
var choiceCEl = document.getElementById("choiceC")
var choiceDEl = document.getElementById("choiceD")

// var scoreEl = document.

//add styling to the page
navDiv.setAttribute("style", "color:blue; display:flex; justify-content:space-between; padding:25px")

mainDiv.style.padding = "200px";

// make an array of questions and answers
let questions = [
  {
    question: "What does JS stand for?",
    choiceA: "Juice Stand",
    choiceB: "JavaStudio",
    choiceC: "Jam Session",
    choiceD: "JavaScript",
    correct: "D"
  },
  {
    question: "If you create a function in JS, what must you do to use it?",
    choiceA: "Jumpstart the function",
    choiceB: "Call the function",
    choiceC: "PM the function",
    choiceD: "Make the function constant",
    correct: "B"
  },
  {
    question: "What is an object that holds multiple values?",
    choiceA: "Array",
    choiceB: "Unordered List",
    choiceC: "Alphanumeric",
    choiceD: "Script Bundle",
    correct: "A"
  }
]

// add timer function to chain questions
startEl.addEventListener("click", startTimer);

function startTimer() {
      startEl.style.display="none";
      qTitleEl.style.display="none";
      timerInterval=setInterval(function () {
      secondsLeft--;
      timerEl.textContent="Time:  " + secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("You Failed.");
      }
    }, 1000);
    
    renderQuestion()
  }

// start button function must move to first question and start the timer
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    questionEl.textContent = q.question;
    choiceAEl.innerHTML = "<button>" + q.choiceA + "</button>";
    choiceBEl.innerHTML = "<button>" + q.choiceB + "</button>";
    choiceCEl.innerHTML = "<button>" + q.choiceC + "</button>";
    choiceDEl.innerHTML = "<button>" + q.choiceD + "</button>";
    } 
    

// }

// add end timer function to lose the game if out of time.

// create function for right and wrong answers. create alert to reveal if right or wrong
// create function to tally score and enter name
// last page will be the list of top scores after name is submitted.
// create an end game function if time runs out











