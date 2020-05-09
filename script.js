var navDiv = document.getElementById("nav");
var mainDiv = document.getElementById("main");
var hsEl = document.getElementById("highScore");
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("button");
var secondsLeft = 120;
// var scoreEl = document.

//add styling to the page
navDiv.style.color = "blue";
navDiv.style.display = "flex";
navDiv.style.justifyContent = "space-between";
navDiv.style.padding = "25px";

mainDiv.style.padding = "250px";

// add timer function to chain questions
startEl.addEventListener("click", startTimer);
timerEl.textContent = "Time:  " + secondsLeft;
function startTimer() {
      var timerInterval = setInterval(function () {
      secondsLeft = secondsLeft - 1;
    }, 1000);

    startQ()
  }


// add end timer function to lose the game if out of time.
// start button function must move to first question and start the timer
// create function for right and wrong answers. create alert to reveal if right or wrong
// create function to tally score and enter name
// last page will be the list of top scores after name is submitted.









