let secretNumber;

function startGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('gameArea').classList.remove('hidden');
  document.getElementById('result').textContent = '';
  document.getElementById('guessInput').value = '';
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('result');

  if (guess === secretNumber) {
    result.textContent = "🎉 Correct! You guessed the number!";
    result.style.color = "green";
  } else if (guess > secretNumber) {
    result.textContent = "Too high! Try again.";
    result.style.color = "red";
  } else {
    result.textContent = "Too low! Try again.";
    result.style.color = "red";
  }
}