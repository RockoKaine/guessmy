const againBtn = document.getElementById('again');
const theNumber = document.getElementById('number');
const playerGuess = document.getElementById('player-guess');
const checkBtn = document.getElementById('check');
const gameMessage = document.getElementById('message');
const playerScore = document.getElementById('score'); 
const highScore = document.getElementById('highscore');
const startingScore = 20;
let secretNumber;
let guesses = [];

const allTd = document.querySelectorAll('td');
console.log("All TDs",allTd);

playerScore.textContent = startingScore;
highScore.textContent = 0;
function randomNumber(){
    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log(secretNumber)
}

function checkGuess () {
    theNumber.textContent = playerGuess.value;
    // here we check if playerGuess is a number the + turns the value to a number
    if(!isNaN(+playerGuess.value)){
        if(!guesses.indexOf(+playerGuess.value)){
            gameMessage.textContent = `You already guessed that. Try Again.`
        } else {
            if(secretNumber == playerGuess.value ){
                gameMessage.textContent = `You Guessed Correct!`
                if(+playerScore.textContent > +highScore.textContent){
                    highScore.textContent = playerScore.textContent;
                }
    
            } else {
                playerScore.textContent--;
                document.getElementById(`board-number-${playerGuess.value}`).classList.add('wrong-guess');
                guesses.push(playerGuess.value); 
                gameMessage.textContent = `Wrong! Guess Again.`
                console.log(document.getElementsByClassName('wrong-guess'))
            }
        }
        
        
    } else {
        gameMessage.innerHTML = `<p class="not-a-number">You Didn't Guess A Number</p>`
    }

    
}


function playAgain(){
    randomNumber();
    playerScore.textContent = startingScore;
    theNumber.textContent = "?";
    gameMessage.textContent = "";
    let wrongGuessesClass = document.getElementsByClassName('wrong-guess');
    for(wrong of wrongGuessesClass){
        wrong.classList.remove('wrong-guess');
    }
}



againBtn.addEventListener('click', playAgain);

checkBtn.addEventListener('click', checkGuess);


randomNumber();