var navDiv = document.getElementById("nav");
var mainDiv = document.getElementById("main");
var hsEl = document.getElementById("highScore");
var highScoresEl = document.getElementById("highScores");
var scored = document.getElementById("scoreBox");
var hsList = document.querySelector("#hsList");

var timerEl = document.getElementById("timer");
var startEl = document.getElementById("button");
var restEl = document.getElementById("restButton");
var qTitleEl = document.getElementById("qTitle");
var answerEl = document.querySelector("answerContainer");
var secondsLeft = 60;

var questionEl = document.getElementById("question");
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var choiceCEl = document.getElementById("choiceC");
var choiceDEl = document.getElementById("choiceD");
var A = "A";
var B = "B";
var C = "C";
var D = "D";

// var scoreEl = document.

//add styling to the page
navDiv.setAttribute(
  "style",
  "color:blue; display:flex; justify-content:space-between; padding:25px"
);

mainDiv.style.padding = "200px";

// make an array of questions and answers
let questions = [
  {
    question: "What does JS stand for?",
    choiceA: "Juice Stand",
    choiceB: "JavaStudio",
    choiceC: "Jam Session",
    choiceD: "JavaScript",
    correct: "D",
  },
  {
    question: "If you create a function in JS, what must you do to use it?",
    choiceA: "Jumpstart the function",
    choiceB: "Call the function",
    choiceC: "PM the function",
    choiceD: "Make the function constant",
    correct: "B",
  },
  {
    question: "What is an object that holds multiple values?",
    choiceA: "Array",
    choiceB: "Unordered List",
    choiceC: "Alphanumeric",
    choiceD: "Script Bundle",
    correct: "A",
  },
];

// add timer function to chain questions
startEl.addEventListener("click", startTimer);
hsEl.addEventListener("click", topScores);
function topScores() {
  highScoresEl.textContent="";
  var count = 0
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  highScores.forEach(function (row) {
    if (count < 5){
      var li = document.createElement("li");
      li.textContent = row.initials + " - " + row.score;
      highScoresEl.appendChild(li);
      count++;
    }
    
  });
}

function startTimer() {
  startEl.style.display = "none";
  qTitleEl.style.display = "none";
  tempScore = 0;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time:  " + secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("You Failed.");
      questionEl.textContent = "Replay?";
      choiceAEl.innerHTML = null;
      choiceBEl.innerHTML = null;
      choiceCEl.innerHTML = null;
      choiceDEl.innerHTML = null;
      secondsLeft = 60;
      startEl.style.display = "block";
      runningQuestionIndex = 0;
    }
  }, 1000);

  renderQuestion();
}

// start button function must move to first question and start the timer
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let tempScore = 0;
let score = [];
let playerName = [];
// create function for right and wrong answers. create alert to reveal if right or wrong

function answerCheck(answer) {
  let q = questions[runningQuestionIndex];
  if (answer === q.correct) {
    alert("correct");
    tempScore++;
  } else {
    alert("wrong");
    secondsLeft = secondsLeft - 5;
  }
  runningQuestionIndex++;
  if (runningQuestionIndex >= questions.length) {
    var nameHS = prompt("Your score is " + tempScore + ".  Enter your name.");
    questionEl.textContent = "Replay?";
    choiceAEl.innerHTML = null;
    choiceBEl.innerHTML = null;
    choiceCEl.innerHTML = null;
    choiceDEl.innerHTML = null;
    secondsLeft = 60;
    startEl.style.display = "block";
    runningQuestionIndex = 0;

    if (nameHS != null) {
      var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      var newScores = { score: tempScore, initials: nameHS };
      highScores.push(newScores);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      console.log(playerName);
      console.log(score);
      // var hsText = hsInput.value.trim() tempScore;
      // hig tempScore.push(hsText)
      // hsInput.value = "" tempScore;
    }
    clearInterval(timerInterval);
  } else {
    renderQuestion();
  }
}

function renderQuestion() {
  let q = questions[runningQuestionIndex];
  questionEl.style.fontSize = "40px";
  questionEl.textContent = q.question;
  choiceAEl.innerHTML =
    "<button onClick='answerCheck(A)'>" + q.choiceA + "</button>";
  choiceBEl.innerHTML =
    "<button onClick='answerCheck(B)'>" + q.choiceB + "</button>";
  choiceCEl.innerHTML =
    "<button onClick='answerCheck(C)'>" + q.choiceC + "</button>";
  choiceDEl.innerHTML =
    "<button onClick='answerCheck(D)'>" + q.choiceD + "</button>";
}
