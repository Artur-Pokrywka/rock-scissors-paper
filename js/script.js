"use strict";

var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var buttonNewgame = document.getElementById("btn-new-game");
var playerChoices = ["rock", "scissors", "paper"];
var playerScore = 0;
var computerScore = 0;
var numberOfrounds = 0;

function increasePlayerScore() {
    if (playerScore < numberOfrounds) {
        playerScore = playerScore +1;
        document.getElementById("player-score").innerHTML = "Player score: " + playerScore;
    }  
};
function increaseComputerScore() {
    if (computerScore < numberOfrounds) {
        computerScore = computerScore +1;
        document.getElementById("computer-score").innerHTML = "Computer score: " + computerScore;
    }
};

function drawComputerChoice() {
    var number = Math.floor(Math.random() * 3) + 1;  
    var computerMove;
    if (number === 1) {
        computerMove = "paper";
        console.log (computerMove)
    } else if (number === 2) {
        computerMove = "rock";
        console.log (computerMove)
    } else {
        computerMove = "scissors";
        console.log (computerMove)
    }
    return computerMove;
};

function chooseRoundWinner(playerChoice) {
    var computerMove = drawComputerChoice();   
    if (playerChoice === computerMove) {
        document.getElementById("output").innerHTML = "It's a DRAW!";
    }
    else if (playerChoice === "rock") {
        if (computerMove === "paper") {
            document.getElementById("output").innerHTML = "You LOOSE: you played ROCK, computer played PAPER!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played ROCK, computer played SCISSORS!";
            increasePlayerScore();
        }
    }   
    else if (playerChoice === "scissors") {
        if (computerMove === "rock") {
            document.getElementById("output").innerHTML = "You LOOSE: you played SCISSORS, computer played ROCK!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played SCISSORS, computer played PAPER!";
            increasePlayerScore();
        }
    } 
    else if (playerChoice === "paper") {
        if (computerMove === "scissors") {
            document.getElementById("output").innerHTML = "You LOOSE: you played PAPER, computer played SCISSORS!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played PAPER, computer played ROCK!";
            increasePlayerScore();
        }
    }
    verifyGameWinner();   
};

function verifyGameWinner() {
    if (playerScore == numberOfrounds) {
        document.getElementById("final-score").innerHTML = "YOU WON THE ENTIRE GAME!!!";
        hideButtons();
    }
    else if (computerScore == numberOfrounds) {
        document.getElementById("final-score").innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
        hideButtons();
    }
};

function hideButtons() {
    var elements = document.getElementsByClassName("btn");
    for (var i = 0; i < elements.length; i++) { 
        elements.classList.add("btn-hide");
    }   
    console.log(i);    
};

function startNewGame() {
    numberOfrounds = prompt("How many won rounds will end the game?");
    document.getElementById("header").innerHTML = "Game will end after winning " + numberOfrounds + " rounds.";
}

function cleanGameScore () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("player-score").innerHTML = "Player score: " + (playerScore = 0);
    document.getElementById("computer-score").innerHTML = "Computer score: " + (computerScore = 0);
    document.getElementById("final-score").innerHTML = "";
};

buttonRock.addEventListener('click', function() {
    chooseRoundWinner(playerChoices[0]);
}
);
buttonScissors.addEventListener('click', function() {
    chooseRoundWinner(playerChoices[1]);
}
);
buttonPaper.addEventListener('click', function() {
    chooseRoundWinner(playerChoices[2]);
}
);

buttonNewgame.addEventListener('click', function() {
    startNewGame();
    cleanGameScore();
}
);

