document.addEventListener('DOMContentLoaded', function () {
    var guessInput = document.getElementById('guess-input');
    var submitButton = document.getElementById('submit-btn');
    var resultDisplay = document.getElementById('result');
    var attemptsDisplay = document.getElementById('attempts');
    var resetButton = document.getElementById('reset-btn');
    var randomNumber;
    var attempts;
    var startGame = function () {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 0;
        guessInput.value = '';
        resultDisplay.textContent = '';
        attemptsDisplay.textContent = 'Attempts: 0';
        submitButton.disabled = false;
        resetButton.style.display = 'none';
    };
    var checkGuess = function () {
        var userGuess = parseInt(guessInput.value);
        attempts++;
        if (userGuess === randomNumber) {
            resultDisplay.textContent = "Congratulations! You guessed the right number: ".concat(randomNumber);
            submitButton.disabled = true;
            resetButton.style.display = 'block';
        }
        else if (userGuess < 1 || userGuess > 10) {
            resultDisplay.textContent = 'Please guess a number between 1 and 10.';
        }
        else {
            resultDisplay.textContent = "You lost! The correct number was ".concat(randomNumber, ".");
            submitButton.disabled = true;
            resetButton.style.display = 'block';
        }
        attemptsDisplay.textContent = "Attempts: ".concat(attempts);
        guessInput.value = '';
    };
    // Start the game on page load
    startGame();
    // Event listeners
    submitButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', startGame);
});
