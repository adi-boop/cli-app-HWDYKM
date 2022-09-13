var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "Where do I live? ",
  answer: "Kota"
},
{
  question: "My favorite superhero is? ",
  answer: "Batman"
},
{
  question: "Where do I go to college? ",
  answer: "Jaipur"
},
{
  question: "The name of my cat is? ",
  answer: "Rias"
},
{
  question: "My favourite sport is? ",
  answer: "Football"
},
{
  question: "My nickname is? ",
  answer: "Lucky"
},
{
  question: "If i had a superpower, it would be? ",
  answer: "Dying"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to HOW WELL DO YOU KNOW Aditya?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("- - - - - - - - - - - - -")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}

welcome();
game();
showScores();