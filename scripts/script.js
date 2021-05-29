// Chooses rock paper or scissor for the computer
function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if (computerPick === 1){
       return `rock`;
    }
    else if (computerPick === 2){
       return `paper`
    }
    else{
       return `scissors`
    }

}
let playerPick;
let scoreCheck;
let playerScore = 0;
let computerScore = 0;

const para = document.querySelector('.resultText');
const runningScore = document.querySelector('.runningScore');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        playerPick = button.id;
        console.log(playRound());
        para.textContent = playRound();
        if(scoreCheck === 1){
            ++playerScore;
            runningScore.textContent = `${playerScore} - ${computerScore}`
        }
        else if(scoreCheck === 2){
            ++computerScore;
            runningScore.textContent = `${playerScore} - ${computerScore}`
        }

        if(playerScore === 5){
            runningScore.textContent = `You won the game!`
        }
        else if (computerScore === 5){
            runningScore.textContent = `You lost the game!`
        }
        

    })
    
})



// Plays 1 round of rock paper scissors
function playRound(playerSelection = playerPick, computerSelection = computerPlay()){
        scoreCheck = 0
    if (playerSelection === `rock` && computerSelection === `scissors` || playerSelection === `paper` && computerSelection === `rock` || playerSelection === `scissors` && computerSelection === `paper`){
        scoreCheck = 1
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === computerSelection){
        scoreCheck = 0
        return `It's a tie between ${playerSelection} and ${computerSelection}`
    }
    else {
        scoreCheck = 2
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }
}