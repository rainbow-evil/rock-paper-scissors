//Initialisation
let humanScore = 0;
let aiScore = 0;
let humanChoice;
let aiChoice;
let roundCount = 0;

function resetGame(){
    humanScore = 0;
    paraPlayerScore.textContent = humanScore;
    aiScore = 0;
    paraAiScore.textContent = aiScore;
    roundCount = 0;
    roundCounter.textContent = `Rounds: ${roundCount}/5`;
    gameComment.textContent = 'Choose your WEAPON!';
    gameComment.style.color = 'white';
    //Potential line about game progress
}

function getHumanChoice(e) {
    //Potential line about game progress
    humanChoice = e.target.id.toUpperCase();
    getAiScore();
}

function getAiScore (){
    let chance = Math.random();
    console.log(chance);
    if(chance <= 0.33){
        aiChoice = 'ROCK';
        console.log(aiChoice); //Replace with HAPTICS
    } else if (chance <= 0.66){
        aiChoice = 'PAPER';
        console.log(aiChoice); //Replace with HAPTICS
    } else {
        aiChoice = 'SCISSORS';
        console.log(aiChoice); //Replace with HAPTICS
    }
    results();
}

function results(){
    //Winning cases
    if ((humanChoice == 'ROCK' && aiChoice == 'SCISSORS') ||
        (humanChoice == 'PAPER' && aiChoice == 'ROCK') ||
        (humanChoice == 'SCISSORS' && aiChoice == 'PAPER')){
            humanScore += 1;
            roundCount += 1;
            roundCounter.textContent = `Rounds: ${roundCount}/5`;
            paraPlayerScore.textContent = humanScore;
            gameComment.textContent = `Your ${humanChoice} destroyed AI's paltry ${aiChoice}!`;
            gameComment.style.color = 'green';
            //HAPTICS
        }else
    //Losing cases
    if ((humanChoice == 'ROCK' && aiChoice == 'PAPER')||
        (humanChoice == 'PAPER' && aiChoice == 'SCISSORS') ||
        (humanChoice == 'SCISSORS' && aiChoice == 'ROCK')){
            aiScore += 1;
            roundCount += 1;
            paraAiScore.textContent = aiScore;
            roundCounter.textContent = `Rounds: ${roundCount}/5`;
            gameComment.textContent = `Your ${humanChoice} is blasted by AI's superior ${aiChoice}!`;
            gameComment.style.color = 'red';
            //HAPTICS
        } else {
            //HAPTICS
            roundCount += 1;
            roundCounter.textContent = `Rounds: ${roundCount}/5`;
            gameComment.textContent = `Your ${humanChoice} is a match to AI's ${aiChoice}. Amusing...`;
            gameComment.style.color = 'yellow';
        };
    checkScore();
}

function checkScore(){
    if (roundCount == 5){
        declareWinner();
    } else if (roundCount != 0){
        mainDisplay.textContent = 'Rock Paper Scissors';
        mainDisplay.style.color = 'white';
    };
}

function declareWinner(){
    if (humanScore < aiScore){
        mainDisplay.textContent = `You lose ${humanScore} - ${aiScore} to AI overlords! The Basilisk will feed upon you! Run away?`;
        mainDisplay.style.color = 'red';
        resetGame();
    } else if(humanScore > aiScore){
        mainDisplay.textContent = `You win ${humanScore} - ${aiScore}! The calculators are on fire! Kick them while they are down?`;
        mainDisplay.style.color = 'green';
        resetGame();
    } else {
        mainDisplay.textContent = `With ${humanScore} - ${aiScore}, a tie. The zealous roombas regroup even as we speak... face them again?`;
        mainDisplay.style.color = 'yellow';
        resetGame();
    }
    //Needs haptics, display place, and logic
}

//HTML elements
const paraPlayerScore = document.querySelector('#paraPlayerScore');
paraPlayerScore.textContent = humanScore;
paraPlayerScore.style.fontSize = '36px';
paraPlayerScore.style.color = 'green';

const paraAiScore = document.querySelector('#paraAiScore');
paraAiScore.textContent = aiScore;
paraAiScore.style.fontSize = '36px';
paraAiScore.style.color = 'red';

const roundCounter = document.querySelector('#roundCounter');

const mainDisplay = document.querySelector('h1');

const gameComment = document.querySelector('#gameComment');
gameComment.textContent = 'Choose your Weapon';

const buttons = document.querySelectorAll('.rps');
buttons.forEach( (button) => {
    button.addEventListener('click', getHumanChoice);
});

//Human choice

//Computer choice

//Result

