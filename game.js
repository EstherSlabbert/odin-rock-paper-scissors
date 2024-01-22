function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get a computer choice (Rock, Paper, or Scissors)
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play a single round of Rock Paper Scissors
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
  
// Play a best-of-five game where we account for TIES by re-playing the round
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    while (i < 5) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.startsWith("You win!")) {
            playerScore++;
            i++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
            i++;
        } else {
            i;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

game();
