"use strict";

var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var playerChoices = ["rock", "scissors", "paper"];
var playerScore = 0;
var computerScore = 0;

function playerScoreincrease() {
    playerScore = playerScore ++;
    console.log(playerScore)
};
document.getElementById("result").innerHTML = "Player score: " + playerScore;


function computerScoreincrease() {
    computerScore = computerScore ++;
};
document.getElementById("result").innerHTML = "Player score: " + computerScore;


function computerChoice() {
    var number = Math.floor(Math.random() * 3) + 1;  
    if (number === 1) {
        var computerMove = "paper";
        console.log (computerMove)
    } else if (number === 2) {
        var computerMove = "rock";
        console.log (computerMove)
    } else  {
        var computerMove = "scissors";
        console.log (computerMove)
    }
    return computerMove;
};

function playerMove(playerChoice) {
    var computerMove = computerChoice();
    
    if (playerChoice === computerMove) {
        document.getElementById("output").innerHTML = "It's a DRAW!";
    }
    else if (playerChoice === "rock") {
        if (computerMove === "paper") {
            document.getElementById("output").innerHTML = "You LOOSE: you played ROCK, computer played PAPER!";
            computerScoreincrease();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played ROCK, computer played SCISSORS!";
            playerScoreincrease();
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
    playerMove(playerChoices[0]);
}
);
buttonScissors.addEventListener('click', function() {
    playerMove(playerChoices[1]);
}
);
buttonPaper.addEventListener('click', function() {
    playerMove(playerChoices[2]);
}
);

