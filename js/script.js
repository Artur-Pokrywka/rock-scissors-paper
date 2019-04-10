"use strict";

var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var playerChoice = ["rock", "scissors", "paper"];

function playerMove(playerChoice) {
    var number = Math.floor(Math.random() * 3) + 1;  
    if (number == 1) {
        var computerMove = "paper";
        console.log (computerMove)
    } else if (number == 2) {
        var computerMove = "rock";
        console.log (computerMove)
    } else  {
        var computerMove = "scissors";
        console.log (computerMove)
    }

            // sporo wątpliwości 
    if (playerChoice === computerMove) {
        document.getElementById("output").innerHTML = "It's a DRAW!";
    }
    else if (playerChoice === "rock") {
        if (computerMove === "paper") {
            document.getElementById("output").innerHTML = "You LOOSE: you played ROCK, computer played PAPER!";
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played ROCK, computer played SCISSORS!";
        }
    }   
    else if (playerChoice === "scissors") {
        if (computerMove === "rock") {
            document.getElementById("output").innerHTML = "You LOOSE: you played SCISSORS, computer played ROCK!";
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played SCISSORS, computer played PAPER!";
        }
    } 
    else if (playerChoice === "paper") {
        if (computerMove === "scissors") {
            document.getElementById("output").innerHTML = "You LOOSE: you played PAPER, computer played SCISSORS!";
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played PAPER, computer played ROCK!";
        }
    }     
};

buttonRock.addEventListener('click', function() {
    playerMove(playerChoice[0]);
}
);
buttonScissors.addEventListener('click', function() {
    playerMove(playerChoice[1]);
}
);
buttonPaper.addEventListener('click', function() {
    playerMove(playerChoice[2]);
}
);

