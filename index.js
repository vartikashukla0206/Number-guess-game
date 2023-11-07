let randomNumber = parseInt(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.result');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100');
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is Too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is Too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // Implement logic for ending the game.
  userInput.value= ''
  userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML= `<h2 id="newGame">Start new Game</h2>`
   startover.appendChild(p)
   playgame= false;
   newGame();
   

}
function newGame() {
  // Implement logic for starting a new game.
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function() {
    randomNumber = parseInt(Math.random() * 100) + 1;
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML =''
    remaining.innerHTML = `${11-numGuess} `;
    userInput.removeAttribute('disabled')
    startover.removeChild(p);
    playgame= true;
  })
}

  