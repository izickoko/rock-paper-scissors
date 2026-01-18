console.log("Hello World!");

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