'use strict';

/* console.log(document.querySelector('.message').textContent);

// 1) Selecting and manipulating elements
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// 2) Handling click events

// Generate a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variable to hold the score data
let score = 20;

// Variable to hold the highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Select the 'Check' button -> use and event listener to attach an event handler (the function expression)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Conditions evaluating the input number against the random generated number

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // When the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Select the body of the page -> apply the background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Change the width of the number
    document.querySelector('.number').style.width = '30rem';

    // Implement the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      // Decrease the score by 1 and display the new score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost!';
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // This section was refactored above

  //   // When the guess is too high
  // } else if (guess > secretNumber) {
  //   // While the guess is higher and the score reaches 0, display the 'You lost!' message
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';

  //     // Decrease the score by 1 and display the new score
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   // While the guess is higher and the score reaches 0, display the 'You lost!' message
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';

  //     // Decrease the score by 1 and display the new score
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

////////////////////////////////////////////
// Challenge 1
// Reset the score, the secret number, the message, the number, the input value, the backgroung color, and the width of the number
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
