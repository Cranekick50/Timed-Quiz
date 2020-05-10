var navDiv = document.getElementById("nav");
var mainDiv = document.getElementById("main");
var hsEl = document.getElementById("highScore");
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("button");
var qTitleEl = document.getElementById("qTitle")
var answerEl = document.querySelector("answerContainer");
var secondsLeft = 60;

var questionEl = document.getElementById("questionContainer");
var answer1 = document.querySelector("answerOne")
var answer2 = document.querySelector("answerTwo")
var answer3 = document.querySelector("answerThree")
var answer4 = document.querySelector("answerFour")

// var scoreEl = document.

//add styling to the page
navDiv.setAttribute("style", "color:blue; display:flex; justify-content:space-between; padding:25px")

mainDiv.style.padding = "200px";

//make a questions array
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
      setInterval(function () {
      secondsLeft = secondsLeft --;
      timerEl.textContent="Time:  " + secondsLeft;
    }, 1000);
    
    // renderQuestion()
  }

// start button function must move to first question and start the timer
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

// function renderQuestion() {
//     let q = question[runningQuestionIndex];
//     question.innerHTML = "<p>"+q.question+"</p>"
//     choiceA.innerHTML = q.chioiceA;
//     choiceB.innerHTML = q.chioiceB;
//     choiceC.innerHTML = q.chioiceC;
//     choiceD.innerHTML = q.chioiceD;
//     } 
    

// }
// make an array of questions and answers
// add end timer function to lose the game if out of time.

// create function for right and wrong answers. create alert to reveal if right or wrong
// create function to tally score and enter name
// last page will be the list of top scores after name is submitted.
// create an end game function if time runs out
function endGame() {
    mainDiv.textContent = "You failed :("
}









