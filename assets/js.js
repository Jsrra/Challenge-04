// Selectors
var startButton = document.querySelector('#start');
var startScreen = document.querySelector(".start-screen");
var questionsScreen = document.querySelector(".questions-screen");
var scoreScreen = document.querySelector(".score-screen");
var timerElement = document.querySelector('.timer-count')
var quiz = document.querySelector("quiz")
var questionText = document.getElementById("displayQuestion")
var answerButtons = document.getElementById("choices") 

var highScores = []



// Variables
var timer;
var timerCount = 3;
var questions = ["Commonly used Data Types DO NOT include?","The Condition in an if / else statement is enclosed with ____.","Arrays in JavaScript can be used to store ____.", "String values must be enclosed with ____ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is:"]
var choices = ["strings", "booleans", "alerts[]", "numbers"]
// alert string boolean numbers

// start code

startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    startGame()
    showQuestion()
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            
            endGame();
        }
    }, 1000);
});

answerButtons.addEventListener("click",function (event)
{
    userChoice= event.target.getAttribute('data-button')
    console.log(userChoice)
})

function next() {

}

// function showQuestion(){
//     questionText.textContent = questions[0]
//     answerButtons.textContent = choices[0]

// }

function endGame() {
  clearInterval(timer);
  scoreScreen.classList.remove("hide");
  questionsScreen.classList.add("hide");
}



function startGame() {
}
//var scores = document.querySelector('.scores')
// var scoreContainer = document.querySelector('.score-container')

// scores.addEventListener('click',function() {
//     quiz.style.display = "none";
// })

// keep scores hidden until highscores is clicked, display none the quiz and display the scores, button toggle
// function high() {
//     var scoreS = document.querySelector("score-container");
//     if (scoreContainer.style.display === "none") {
//       scoreContainer.style.display = "block";
//     } else {
//       scoreContainer.style.display = "none";
//     }
//   }


