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
    if (computerMove === playerChoice) {
        alert("Draw");
    }

    else if (computerMove === "paper") {
        if (playerChoice[0]) {
            alert("Player lost");
        }
        else {
            alert("Player won");
        }
    }
    
    else if (computerMove === "rock") {
        if (playerChoice[1]) {
            alert("Player lost");
        }
        else {
            alert("Player won");
        }
    } 

    else if (computerMove === "scissors") {
        if (playerChoice[2]) {
            alert("Player lost");
        }
        else {
            alert("Player won");
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