"use strict";

var button = document.getElementsByClassName("btn");
var buttonRock = document.getElementById("btn-rock");
var buttonScissors = document.getElementById("btn-scissors");
var buttonPaper = document.getElementById("btn-paper");

var number = Math.floor(Math.random() * 3) + 1;  

if (number == 1) {
    console.log ("rock")
}
if (number == 2){
    console.log ("scissors")
}
if (number == 3) {
    console.log ("paper")
}


function playerMove() {
    alert("alert");
};

playerMove();

button.addEventListener('click', function() {
    playerMove();
}
);
