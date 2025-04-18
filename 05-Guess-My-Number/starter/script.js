'use strict';
let score;
let toGuess;
let highscore;
const scoreVal = document.querySelector('.score')

setup();

function setup() {
    score = 20;
    toGuess = generateRandomNum(20);
    highscore = highscore > 0 ? highscore : 0;
    console.log(`Score: ${score}`);
    console.log(`To guess ${toGuess}`)
    scoreVal.textContent = score;
}


document.querySelector('.check').addEventListener('click', () => {
  const  guess = Number(document.querySelector('.guess').value);
  updateScore(guess);
});

document.querySelector('.again').addEventListener('click', () => {
    setup()
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
})

function updateScore(guess) {
  const msg = document.querySelector('.message');
  switch (true) {
    case !validateGuess(guess):
      msg.textContent = `Your guess ${guess} should be a whole number!`;
      score--;
      break;
    case guess === toGuess:
      msg.textContent = 'You guessed it 🎉🎉';
      document.querySelector('.number').textContent = guess;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      break;
    case guess !== toGuess && score > 0:
      msg.textContent = guess > toGuess ? '📈 Too high!' : '📉 Too low!';
      score--;
      break;
    case guess !== toGuess && score <= 0:
      msg.textContent = '💥 You lost the game!';
      score = 0;
      break;
  }
  scoreVal.textContent = score;
}

function generateRandomNum(max) {
  return Math.floor(Math.random() * max + 1);
}

function validateGuess(guess) {
  return guess % 1 == 0;
}
