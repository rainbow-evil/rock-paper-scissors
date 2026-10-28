let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let gameInProgress = false;
const paraPlayerScore = document.querySelector('#paraPlayerScore');
paraPlayerScore.textContent = humanScore;

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click' , getHumanChoice);
});


function getComputerChoice() {
    let odds = Math.random();
    return odds < 0.33 ?
    'ROCK' : odds < 0.66 ? 'PAPPER'
    : 'SCISSORS';
}

function getHumanChoice(e) {
    if (!gameInProgress){
        gameInProgress = !gameInProgress;
        humanScore = 0;
        computerScore = 0;
    }
    humanChoice = e.target.id.toUpperCase();
}
function play(){
    function playRound(getComputerChoice, getHumanChoice){
        humanChoice = getHumanChoice().toUpperCase();
        computerChoice = getComputerChoice();
        /* Winning scenarios*/
        if ((humanChoice == 'ROCK' && computerChoice == 'SCISSORS')||(humanChoice == 'SCISSORS' && computerChoice == 'PAPPER')||(humanChoice == 'PAPPER' && computerChoice == 'ROCK'))
        {
            console.log(`${humanChoice} vs ${computerChoice}! You win!`);
            humanScore += 1;
            /*SCORE FUNCTION*/}
        /* Losing scenarios*/
        else if ((humanChoice == 'ROCK' && computerChoice == 'PAPPER')||(humanChoice == 'SCISSORS' && computerChoice == 'ROCK')||(humanChoice == 'PAPPER' && computerChoice == 'SCISSORS'))
        {
            console.log(`${humanChoice} vs ${computerChoice}! You lose!`);
            computerScore += 1;
            /*SCORE FUNCTION*/}
        else {
            console.log(`${humanChoice} vs ${computerChoice}! It's a tie!`);
            /*SCORE FUNCTION*/
        }
        return console.log(`Your score: ${humanScore} -- Computer score: ${computerScore}`);
    }

    playRound(getComputerChoice,getHumanChoice);
    playRound(getComputerChoice,getHumanChoice);
    playRound(getComputerChoice,getHumanChoice);
    playRound(getComputerChoice,getHumanChoice);
    playRound(getComputerChoice,getHumanChoice);

    return humanScore>computerScore ? 'You are the WINNER! Congratulations!' : humanScore<computerScore ? "You LOST! Try again to reclaim your family's honor!" : "It's a sneaky, cheeky TIE. Neither you nor the chip box have proven themselves on the battlefield of rock, papper, scissors. Try again?";
}
