const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ".";
    } else {
        return "You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + ".";
    }
}

rockButton.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
});

paperButton.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
});

scissorsButton.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
});
