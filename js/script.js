"use strict";

var buttonsArray = document.getElementsByClassName("player-move");
var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");
var buttonNewGame = document.getElementById("btn-new-game");
var gameStatus = {
    playerScore : 0,
    computerScore : 0,
    numberOfRounds : 0,
    currentRoundNumber : 0,
    roundResult : "", 
    playerCurrentResult : 0,
    computerCurrentResult : 0,
};
//  var currentResult = gameStatus.playerCurrentResult + " : " + gameStatus.computerCurrentResult;
var gameStatusProgress = [];
var modal = document.getElementById("modal-overlay");
var resultTable = document.getElementById("score");


function roundCounter() {
    gameStatus.currentRoundNumber = gameStatus.currentRoundNumber +1;
};

function roundResultAnouncer(winner) {
    if (winner != "Draw"){
        gameStatus.roundResult = winner + " won";
    }
    else {
        gameStatus.roundResult = winner;
    }    
}

function updateRoundState(winner) {
    roundCounter();
    roundResultAnouncer(winner);
}

function increasePlayerScore() {
    if (gameStatus.playerScore < gameStatus.numberOfRounds) {
        gameStatus.playerScore = gameStatus.playerScore +1;  
        gameStatus.playerCurrentResult = gameStatus.playerScore;
        document.getElementById("player-score").innerHTML = "Player score: " + gameStatus.playerCurrentResult;
    }  
    updateRoundState("Player");
};
function increaseComputerScore() {
    if (gameStatus.computerScore < gameStatus.numberOfRounds) {
        gameStatus.computerScore = gameStatus.computerScore +1;
        gameStatus.computerCurrentResult = gameStatus.playerScore;
        document.getElementById("computer-score").innerHTML = "Computer score: " + gameStatus.computerCurrentResult;
    }
    updateRoundState("Computer");
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

function getPlayerChoice(buttonsArrayElement) {
    var playerPick = buttonsArrayElement.getAttribute("data-move"); 
    return playerPick;
};

function chooseRoundWinner(element) {
    var computerMove = drawComputerChoice();
    var playerPick = getPlayerChoice(element);  
    if (playerPick === computerMove) {
        document.getElementById("output").innerHTML = "It's a DRAW!";
        updateRoundState("Draw");
    }
    else if (playerPick === "rock") {
        if (computerMove === "paper") {
            document.getElementById("output").innerHTML = "You LOOSE: you played ROCK, computer played PAPER!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played ROCK, computer played SCISSORS!";
            increasePlayerScore();
        }
    }   
    else if (playerPick === "scissors") {
        if (computerMove === "rock") {
            document.getElementById("output").innerHTML = "You LOOSE: you played SCISSORS, computer played ROCK!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played SCISSORS, computer played PAPER!";
            increasePlayerScore();
        }
    } 
    else if (playerPick === "paper") {
        if (computerMove === "scissors") {
            document.getElementById("output").innerHTML = "You LOOSE: you played PAPER, computer played SCISSORS!";
            increaseComputerScore();
        }
        else {
            document.getElementById("output").innerHTML = "You WON: you played PAPER, computer played ROCK!";
            increasePlayerScore();
        }
    }
    var currentResult = gameStatus.playerCurrentResult + " : " + gameStatus.computerCurrentResult;
    gameStatusProgress.push({
        currentRoundNumber: gameStatus.currentRoundNumber,
        playerPick: playerPick,
        computerMove: computerMove,
        roundResult: gameStatus.roundResult,
        currentResult: currentResult
    });
    console.log(currentResult)
    verifyGameWinner();   
};

function verifyGameWinner() {
    if (gameStatus.playerScore == gameStatus.numberOfRounds) {
        document.getElementById("game-result").innerHTML = "YOU WON!";  
        modal.classList.add("show");
        resultTableBuilder();
        hideButtons();
    }
    else if (gameStatus.computerScore == gameStatus.numberOfRounds) {
        document.getElementById("game-result").innerHTML = "YOU LOOSE!";
        modal.classList.add("show");
        resultTableBuilder();
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
    gameStatus.numberOfRounds = prompt("How many won rounds will end the game?");
    document.getElementById("header").innerHTML = "Game will end after winning " + gameStatus.numberOfRounds + " rounds.";
    showButtons();
}

function cleanGameScore () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("player-score").innerHTML = "Player score: " + (gameStatus.playerScore = 0);
    document.getElementById("computer-score").innerHTML = "Computer score: " + (gameStatus.computerScore = 0);
    gameStatusProgress = [];
    gameStatus.playerCurrentResult = 0;
    gameStatus.computerCurrentResult = 0;
};

buttonRock.addEventListener('click', function() {
    chooseRoundWinner(buttonsArray[0]);
}
);
buttonScissors.addEventListener('click', function() {
    chooseRoundWinner(buttonsArray[1]);
}
);
buttonPaper.addEventListener('click', function() {
    chooseRoundWinner(buttonsArray[2]);
}
);

buttonNewGame.addEventListener('click', function() {
    startNewGame();
    cleanGameScore();
}
);

function resultTableTemplate(historyStatus) {
    return `
            <td>${historyStatus.currentRoundNumber}</td>
            <td>${historyStatus.playerPick}</td>
            <td>${historyStatus.computerMove}</td>
            <td>${historyStatus.roundResult}</td>
            <td>${historyStatus.currentResult}</td>
            `
};

function resultTableBuilder() {
    for (var i = 0; i < gameStatusProgress.length; i++) {
        var historyStatus = gameStatusProgress[i];
        var singleResultRow = resultTableTemplate(historyStatus);
        var rowElement = document.createElement("tr");
        rowElement.innerHTML = singleResultRow;
        resultTable.appendChild(rowElement);
    }
};


// MODALS
(function() { 

	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	// Stosujemy kod dla wielu linków. W ten sposób trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	var modalLinks = document.querySelectorAll('.show-modal');
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Funkcja zamykająca modal - przywiązujemy ją do kliknięć na elemencie z klasą "close". 
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Zamykania modala poprzez kliknięcie w overlay. 
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Blokowanie propagacji kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	var modals = document.querySelectorAll('.modal');
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})(); 