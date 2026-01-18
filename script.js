console.log("Hello World!");

// Storing Score variables

let humanScore = 0;
let computerScore = 0;

 // Computer logic for the game using Math.random

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Human choice logic

function getHumanChoice() {
    const choice = prompt("Enter rock paper scissors:");
    return choice;
}
console.log(getHumanChoice());



