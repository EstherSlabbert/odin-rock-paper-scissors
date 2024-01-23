const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playAgainButton = document.getElementById('again');

const result = document.getElementById('result');
const finalResult = document.getElementById('final');

let playerScore = 0;
let computerScore = 0;
let ties = 0;

let gameContinues = true;

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
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

function outcomeAndTally(playerSelection) {
    let outcome = playRound(playerSelection, getComputerChoice());
    result.innerHTML = outcome;
    if (outcome.startsWith("You win!")) {
        playerScore++;
    } else if (outcome.startsWith("You lose!")) {
        computerScore++;
    } else {
        ties++;
    }

    if (playerScore === 5 || computerScore === 5) {
        gameContinues = false;
    }
}

function playAgain() {
    // Reset scores and display
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    displayScores();

    // Enable buttons again
    gameContinues = true;

    // Remove the last final result & round result
    finalResult.innerHTML = '';
    result.innerHTML = '';

    // Add event listeners for the new round
    if (gameContinues) {
        again.style.display = 'none';
        rockButton.addEventListener('click', rockButtonHandler);
        paperButton.addEventListener('click', paperButtonHandler);
        scissorsButton.addEventListener('click', scissorsButtonHandler);
        playAgainButton.removeEventListener('click', playAgain);
    }
}

const buttonHandler = (playerSelection) => {
    // the game is played, the outcome is determined and the scores are tallied
    outcomeAndTally(playerSelection);
    displayScores();
    // game loop until player/computer have won 5 times
    if (!gameContinues) {
        displayFinalResults();
    }
}

const rockButtonHandler = () => buttonHandler('rock');
const paperButtonHandler = () => buttonHandler('paper');
const scissorsButtonHandler = () => buttonHandler('scissors');

function displayScores() {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('ties').innerHTML = ties;
}

function displayFinalResults() {
    if (playerScore === 5) {
        finalResult.innerHTML = "You won the game! Congratulations!";
    } else {
        finalResult.innerHTML = "You lost the game! Better luck next time!";
    }

    again.style.display = 'block';

    rockButton.removeEventListener('click', rockButtonHandler);
    paperButton.removeEventListener('click', paperButtonHandler);
    scissorsButton.removeEventListener('click', scissorsButtonHandler);
    playAgainButton.addEventListener('click', playAgain);
}

if (gameContinues) {
    rockButton.addEventListener('click', rockButtonHandler);
    paperButton.addEventListener('click', paperButtonHandler);
    scissorsButton.addEventListener('click', scissorsButtonHandler);
}
