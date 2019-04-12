"use strict";

var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var buttonNewgame = document.getElementById("btn-new-game");
var playerChoices = ["rock", "scissors", "paper"];
var playerScore = 0;
var computerScore = 0;
var numberOfrounds = 0;

function playerScoreincrease() {
    if (playerScore < numberOfrounds) {
        playerScore = playerScore +1;
        document.getElementById("player-score").innerHTML = "Player score: " + playerScore;
    }  
};

function computerScoreincrease() {
    if (computerScore < numberOfrounds) {
        computerScore = computerScore +1;
        document.getElementById("computer-score").innerHTML = "Computer score: " + computerScore;
    }
};

function computerChoicedraw() {
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

function playerMove(playerChoice) {
    var computerMove = computerChoicedraw();
    
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
            computerScoreincrease();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played SCISSORS, computer played PAPER!";
            playerScoreincrease();
        }
    } 
    else if (playerChoice === "paper") {
        if (computerMove === "scissors") {
            document.getElementById("output").innerHTML = "You LOOSE: you played PAPER, computer played SCISSORS!";
            computerScoreincrease();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played PAPER, computer played ROCK!";
            playerScoreincrease();
        }
    }   
};


function newGameStarter () {
    numberOfrounds = prompt("How many won rounds will end the game?");
    document.getElementById("header").innerHTML = "Game will end after winning " + numberOfrounds + " rounds.";
}
newGameStarter ();

function gameWinnerVerifier () {
    if (playerScore == numberOfrounds) {
        document.getElementById("final-score").innerHTML = "YOU WON THE ENTIRE GAME!!!";
    }
    else if (computerScore == numberOfrounds) {
        document.getElementById("final-score").innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
    }
};

function newGameEnforcer () {
    if (playerScore >= numberOfrounds) {       
       hideButtons ();
    }
    else if (computerScore >= numberOfrounds) {
        hideButtons();
    }         
};

function hideButtons () {
    var element = document.getElementsByClassName("buttton-holder");
    element.classList.add("btn-hide"); 
    // console.log("hi"); 
};



function gameScoreCleaner () {
    document.getElementById("player-score").innerHTML = "Player score: " + (playerScore = 0);
    document.getElementById("computer-score").innerHTML = "Computer score: " + (computerScore = 0);
};



buttonRock.addEventListener('click', function() {
    playerMove(playerChoices[0]);
    gameWinnerVerifier();
    newGameEnforcer ();
}
);
buttonScissors.addEventListener('click', function() {
    playerMove(playerChoices[1]);
    gameWinnerVerifier();
    newGameEnforcer ();
}
);
buttonPaper.addEventListener('click', function() {
    playerMove(playerChoices[2]);
    gameWinnerVerifier();
    newGameEnforcer ();
}
);

buttonNewgame.addEventListener('click', function() {
   newGameStarter();
    gameScoreCleaner();
}
);

