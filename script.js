const againBtn = document.getElementById('again');
const theNumber = document.getElementById('number');
const playerGuess = document.getElementById('player-guess');
const checkBtn = document.getElementById('check');
const gameMessage = document.getElementById('message');
const playerScore = document.getElementById('score'); 
const highScore = document.getElementById('highscore');
const startingScore = 20;
let secretNumber = 0;
let guesses = [];

//
playerScore.textContent = startingScore;
highScore.textContent = 0;


function randomNumber(){
    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log(secretNumber)
}





function checkGuess() {
    theNumber.textContent = playerGuess.value;
    if(isNaN(playerGuess.value)){
        gameMessage.innerHTML = `<p class="not-a-number">You Didn't Guess A Number</p>`;
    } else {
        if(Number(playerGuess.value) === secretNumber){
            console.log('winner winner chicken dinner!')
            Number(playerScore.textContent) > Number(highScore.textContent) ? highScore.textContent = playerScore.textContent : playerScore.textContent = playerScore.textContent;
        } else {
            if(guesses.includes(Number(playerGuess.value))){
                console.log('you guessed that already');
            } else {
                let el = document.getElementById(`board-number-${Number(playerGuess.value)}`);
                guesses.push(Number(playerGuess.value));
                el.classList.toggle('wrong-guess');
                playerScore.textContent--;
                console.log(guesses)
                
            }
        }

    }
    playerGuess.value = '';
}


function playAgain(){
    randomNumber();
    playerScore.textContent = startingScore;
    theNumber.textContent = "?";
    gameMessage.textContent = "";
    console.log(document.getElementsByClassName('wrong-guess'))
    let wrongGuessesClass = document.getElementsByClassName('wrong-guess');
    for(wrong of wrongGuessesClass){
        wrong.classList.toggle('wrong-guess');
    }
}



againBtn.addEventListener('click', playAgain);

checkBtn.addEventListener('click', checkGuess);


randomNumber();