'use strict';

let setNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Input //
  if (!guess) {
    displayMessage('No number. Try again');

    // Win the game //
  } else if (guess === setNumber) {
    displayMessage('You won !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = setNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // Not equal //
  } else if (guess !== setNumber) {
    if (score > 1) {
      displayMessage(guess > setNumber ? 'Too high !' : 'Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('Game Over');
    }
  }
});

// Again //

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  // Style //
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
