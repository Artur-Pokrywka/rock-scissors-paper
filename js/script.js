"use strict";

var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var buttonNewGame = document.getElementById("btn-new-game");
var playerChoices = ["rock", "scissors", "paper"];
var playerScore = 0;
var computerScore = 0;
var numberOfRounds = 0;
var buttonsArray = document.getElementsByClassName("player-move");

function increasePlayerScore() {
    if (playerScore < numberOfRounds) {
        playerScore = playerScore +1;
        document.getElementById("player-score").innerHTML = "Player score: " + playerScore;
    }  
};
function increaseComputerScore() {
    if (computerScore < numberOfRounds) {
        computerScore = computerScore +1;
        document.getElementById("computer-score").innerHTML = "Computer score: " + computerScore;
    }
};

function drawComputerChoice() {
    var number = Math.floor(Math.random() * 3) + 1;  
    var computerMove;
    if (number === 1) {
        computerMove = "paper";
    } else if (number === 2) {
        computerMove = "rock";
    } else {
        computerMove = "scissors";
    }
    return computerMove;
};


function getPlayerChoice(buttonsArray) {
    
    var playerPick = buttonsArray.getAttribute("data-move"); 
    
    chooseRoundWinner();
    return playerPick;
   
};





function chooseRoundWinner(playerChoice) {
    var computerMove = drawComputerChoice();

    var playerPick = getPlayerChoice();  
    console.log(playerPick);

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
    if (playerScore == numberOfRounds) {
        document.getElementById("final-score").innerHTML = "YOU WON THE ENTIRE GAME!!!";
        hideButtons();
    }
    else if (computerScore == numberOfRounds) {
        document.getElementById("final-score").innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
        hideButtons();
    }
};

function hideButtons() {
    for (var i = 0; i < buttonsArray.length; i++) { 
        buttonsArray[i].classList.add("btn-hide");
    }       
};
function showButtons() {
    for (var i = 0; i < buttonsArray.length; i++) { 
        buttonsArray[i].classList.remove("btn-hide");
    }       
};

function startNewGame() {
    numberOfRounds = prompt("How many won rounds will end the game?");
    document.getElementById("header").innerHTML = "Game will end after winning " + numberOfRounds + " rounds.";
    showButtons();
}

function cleanGameScore () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("player-score").innerHTML = "Player score: " + (playerScore = 0);
    document.getElementById("computer-score").innerHTML = "Computer score: " + (computerScore = 0);
    document.getElementById("final-score").innerHTML = "";
};

buttonRock.addEventListener('click', function() {
    getPlayerChoice(buttonsArray[0]);
    chooseRoundWinner(playerChoices[0]);
}
);
buttonScissors.addEventListener('click', function() {
    getPlayerChoice(buttonsArray[1]);
    chooseRoundWinner(playerChoices[1]);
}
);
buttonPaper.addEventListener('click', function() {
    getPlayerChoice(buttonsArray[2]);
    chooseRoundWinner(playerChoices[2]);
}
);

buttonNewGame.addEventListener('click', function() {
    startNewGame();
    cleanGameScore();
}
);

