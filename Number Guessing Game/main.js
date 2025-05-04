const feedback = document.getElementById("feedback");
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("submit-guess");
const resetButton = document.getElementById("reset-game");

const result = document.querySelector(".result");
const attemptsDisplay = document.querySelector(".attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10;
let attempts = 0;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const inputValue = guessInput.value.trim();
  if (inputValue.startsWith("0") && inputValue !== "0") {
    feedback.innerText =
      "Leading zeros are not allowed. Please enter a valid number.";
    feedback.style.color = "red";
    return;
  }

  const guess = parseInt(inputValue, 10);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.innerText = "Please enter a valid number between 1 and 100.";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  const attemptsLeft = maxAttempts - attempts;

  if (guess === secretNumber) {
    feedback.innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
    feedback.style.color = "green";
    gameOver = true;
    result.innerText = "You win!";
  } else if (attempts >= maxAttempts) {
    feedback.innerText = `Game over! The correct number was ${secretNumber}.`;
    feedback.style.color = "red";
    gameOver = true;
    result.innerText = "You lose!";
  } else if (guess > secretNumber) {
    feedback.innerText = "Too high! Try again.";
    feedback.style.color = "blue";
  } else {
    feedback.innerText = "Too low! Try again.";
    feedback.style.color = "blue";
  }

  attemptsDisplay.innerText = `Attempts left: ${attemptsLeft}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  feedback.innerText = "";
  result.innerText = "";
  guessInput.value = "";
  attemptsDisplay.innerText = `Attempts left: ${maxAttempts}`;
}

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
