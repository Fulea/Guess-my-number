"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variable to hold the score data
let score = 20;

// Variable to hold the highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("No number!");

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Change the width of the number
    document.querySelector(".number").style.width = "30rem";

    // Implement the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      // Decrease the score by 1 and display the new score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reset the score, the secret number, the message, the number, the input value, the backgroung color, and the width of the number
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
