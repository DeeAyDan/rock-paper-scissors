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

let scoreCheck;
let playerPick = prompt(`Choose your weapon`, ``);

// Plays 1 round of rock paper scissors
function playRound(playerSelection = playerPick, computerSelection = computerPlay()){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === `rock` && computerSelection === `scissors` || playerSelection === `paper` && computerSelection === `rock` || playerSelection === `scissors` && computerSelection === `paper`){
        scoreCheck = 1
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === computerSelection){
        scoreCheck = 2
        return `It's a tie between ${playerSelection} and ${computerSelection}`
    }
    else {
        scoreCheck = 0
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }
}

// Plays 5 rounds of rock paper scissors and sums the score at the end
function game(){   
    let playerScore = 0;
    let computerScore = 0;
    for(i = 0 ; i < 5 ; i++){
       playRound()
       console.log(playRound())
        if (scoreCheck === 1){
            playerScore = playerScore + 1;
        }
        else if (scoreCheck === 0){
            computerScore = computerScore + 1;
        } 
    }

    if(playerScore > computerScore){
        return `You won the 5 round game! The score is ${playerScore} - ${computerScore}`
    }
    else if (playerScore < computerScore){
        return `You lost the 5 round game! The score is ${playerScore} - ${computerScore}`
    }
    else {
        return `It's a tie! The score is ${playerScore} - ${computerScore}`
    }
}