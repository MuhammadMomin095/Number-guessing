document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input') as HTMLInputElement;
    const submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
    const resultDisplay = document.getElementById('result') as HTMLDivElement;
    const attemptsDisplay = document.getElementById('attempts') as HTMLDivElement;
    const resetButton = document.getElementById('reset-btn') as HTMLButtonElement;

    let randomNumber: number;
    let attempts: number;

    const startGame = () => {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 0;
        guessInput.value = '';
        resultDisplay.textContent = '';
        attemptsDisplay.textContent = 'Attempts: 0';
        submitButton.disabled = false;
        resetButton.style.display = 'none';
    };

    const checkGuess = () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess === randomNumber) {
            resultDisplay.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
            submitButton.disabled = true;
            resetButton.style.display = 'block';
        } else if (userGuess < 1 || userGuess > 10) {
            resultDisplay.textContent = 'Please guess a number between 1 and 10.';
        } else {
            resultDisplay.textContent = `You lost! The correct number was ${randomNumber}.`;
            submitButton.disabled = true;
            resetButton.style.display = 'block';
        }
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
    };

    // Start the game on page load
    startGame();

    // Event listeners
    submitButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', startGame);
});
