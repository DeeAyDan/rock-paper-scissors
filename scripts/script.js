function aiPlay() {
    const aiPick = Math.floor(Math.random() * 3) + 1;
    if (aiPick === 1){
       return `rock`;
    }
    else if (aiPick === 2){
       return `paper`
    }
    else{
       return `scissors`
    }

}
const buttons = document.querySelectorAll('.player-button');
const aiRock = document.querySelector('#ai-rock');
const aiPaper = document.querySelector('#ai-paper');
const aiScissors = document.querySelector('#ai-scissors');
const score = document.querySelector('#score');
const outcomeMessage = document.querySelector('#outcome-message');
const picture = document.querySelector('#winner-picture');
let playerPick;
let playerScore = 0;
let aiScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        playerPick = button.id;
        playRound();
    })
    
})

function playRound(playerSelection = playerPick, computerSelection = aiPlay()){
    if (playerSelection === `player-rock` && computerSelection === `scissors`){
        playerScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `Player wins!`;
        aiScissors.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: #03256c;');
        picture.setAttribute('src', 'imgs/rock.png');
    }
    else if (playerSelection === `player-paper` && computerSelection === `rock`){
        playerScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `Player wins!`;
        aiRock.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: #03256c;');
        picture.setAttribute('src', 'imgs/paper.png');
    }
    else if (playerSelection === `player-scissors` && computerSelection === `paper`){
        playerScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `Player wins!`;
        aiPaper.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: #03256c;');
        picture.setAttribute('src', 'imgs/scissors.png');
    }
    else if (playerSelection === `player-rock` && computerSelection === `paper`){
        aiScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `AI wins!`;
        aiPaper.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: brown;');
        picture.setAttribute('src', 'imgs/paper.png');
    }
    else if (playerSelection === `player-paper` && computerSelection === `scissors`){
        aiScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `AI wins!`;
        aiScissors.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: brown;');
        picture.setAttribute('src', 'imgs/scissors.png');
    }
    else if (playerSelection === `player-scissors` && computerSelection === `rock`){
        aiScore++;
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `AI wins!`;
        aiRock.setAttribute('class', 'hover-effect');
        picture.setAttribute('style', 'background-color: brown;');
        picture.setAttribute('src', 'imgs/rock.png');
    }
    else if (playerSelection === computerSelection){
        score.textContent = `${playerScore} - ${aiScore}`;
        outcomeMessage.textContent = `It's a tie!`;
        aiRock.setAttribute('class', 'hover-effect'); 
        picture.setAttribute('src', 'imgs/tie.png');
    }
}