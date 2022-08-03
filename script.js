function begin() {
    showInputs();
    document.querySelector("#score-player").textContent = "0";
    document.querySelector("#score-cpu").textContent = "0";
    document.querySelector(".choices").textContent = "First to five wins!"
    document.querySelector(".result").textContent = "Make your choice below.";
    document.querySelector(".result").style.color = "black";
}

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
    result = getRoundResult(playerSelection, computerSelection)
    document.querySelector(".choices").textContent = `${getEmojiFromWord(playerSelection)} vs. ${getEmojiFromWord(computerSelection)}`;

    if (result === "You win the round!") {
        increasePlayerScore();
    } else if (result === "You lose the round!") {
        increaseCpuScore();
    }
    
    let resultPara = document.querySelector(".result");
    if (getPlayerScore() === 5) {
        resultPara.textContent = "Congrats! You win the game!";
        resultPara.style.color = "green";
        document.querySelector("#start").style.display = "block";
        hideInputs();
    } else if (getCpuScore() === 5) {
        resultPara.textContent = "Oh no! You lose the game.";
        resultPara.style.color = "darkred";
        document.querySelector("#start").style.display = "block";
        hideInputs();
    } else {
        resultPara.textContent = result;
        resultPara.style.color = "black";
    }
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
                || (playerSelection === "paper" && computerSelection === "rock") 
                || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win the round!";
    } else { //must be loss
        return "You lose the round!";
    }
}

function getEmojiFromWord(word) {
    if (word === "rock") {
        return "🪨"
    } else if (word === "paper") {
        return "📜"
    } else if (word === "scissors") {
        return "✂️"
    }
    return "";
}

function getPlayerScore() {
    return parseInt(document.querySelector("#score-player").textContent);
}

function getCpuScore() {
    return parseInt(document.querySelector("#score-cpu").textContent)
}

function increasePlayerScore() {
    document.querySelector("#score-player").textContent = getPlayerScore() + 1;
}

function increaseCpuScore() {
    document.querySelector("#score-cpu").textContent = getCpuScore() + 1;
}

function isGameOver() {
    return document.querySelector("#score-player") === "5" || document.querySelector("#score-cpu") === "5";
}

function showInputs() {
    document.querySelectorAll(".buttons button").forEach(button => {
        button.style.display = "block";
    });
}

function hideInputs() {
    document.querySelectorAll(".buttons button").forEach(button => {
        button.style.display = "none";
    });
}

document.querySelector("#start").addEventListener("click", e => {
    e.target.style.display = "none";
    begin();
});

document.querySelectorAll(".buttons button").forEach(
    button => button.addEventListener("click", e => {
        playRound(e.target.id, getComputerChoice());
    }));
