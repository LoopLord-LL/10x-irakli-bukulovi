const feedback = document.getElementById("feedback");
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("submit-guess");
const resetButton = document.getElementById("reset-game");

const result = document.querySelector(".result");
const attemptsDisplay = document.querySelector(".attempts");

const highscoreDisplay = document.querySelector(".highscore");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
const levelInfo = document.querySelector(".level-info");

let highscore = localStorage.getItem("highscore") || null;
let secretNumber;
let maxNumber = 50;
const maxAttempts = 10;
let attempts = 0;
let gameOver = false;

if (highscore) {
  highscoreDisplay.innerText = `Highscore: ${highscore} attempts`;
}

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
}

function setLevel(level) {
  if (level === "easy") {
    maxNumber = 10;
    levelInfo.innerText = "Guess a number between 1 and 10";
  } else if (level === "medium") {
    maxNumber = 50;
    levelInfo.innerText = "Guess a number between 1 and 50";
  } else if (level === "hard") {
    maxNumber = 100;
    levelInfo.innerText = "Guess a number between 1 and 100";
  }
  resetGame();
}

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

  if (isNaN(guess) || guess < 1 || guess > maxNumber) {
    feedback.innerText = `Please enter a valid number between 1 and ${maxNumber}.`;
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
    if (!highscore || attempts < highscore) {
      highscore = attempts;
      localStorage.setItem("highscore", highscore);
      highscoreDisplay.innerText = `Highscore: ${highscore} attempts`;
    }
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
  generateSecretNumber();
  attempts = 0;
  gameOver = false;
  feedback.innerText = "";
  result.innerText = "";
  guessInput.value = "";
  attemptsDisplay.innerText = `Attempts left: ${maxAttempts}`;
}

 
easyButton.addEventListener("click", () => setLevel("easy"));
mediumButton.addEventListener("click", () => setLevel("medium"));
hardButton.addEventListener("click", () => setLevel("hard"));

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);


generateSecretNumber();
levelInfo.innerText = "Guess a number between 1 and 50";
