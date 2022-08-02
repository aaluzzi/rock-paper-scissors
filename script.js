function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
        console.log("Tie!");
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") //win
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else { //loss
        console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
        return 2;
    }
}
   
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
       let playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
       while (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors")) {
          playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
       }
       let computerSelection = getComputerChoice();
       console.log(`You chose ${playerSelection}! CPU chose ${computerSelection}`);
       let result = playRound(playerSelection, computerSelection);
       if (result === 1) {
          playerScore++
       } else if (result === 2) {
          computerScore++
       }
    }

    if (playerScore === 3) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}
game();