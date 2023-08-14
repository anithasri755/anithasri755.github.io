let secretNumber;
let attempt = 1;
let score = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const messageElement = document.getElementById("message");

    if (attempt <= 3) {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 0 || guess > 9) {
            messageElement.textContent = "Please enter a valid number between 0 and 9.";
            return;
        }

        if (!secretNumber) {
            secretNumber = generateRandomNumber();
        }

        if (guess === secretNumber) {
            switch (attempt) {
                case 1:
                    score += 100;
                    break;
                case 2:
                    score += 70;
                    break;
                case 3:
                    score += 40;
                    break;
            }
            messageElement.innerHTML = `Congratulations! You guessed the secret number <span style="color: green">${secretNumber}</span>. Your score: <span style="color: green">${score}</span>`;
            secretNumber = undefined; 
            attempt = 1; 
            document.getElementById("score").textContent = score;
        } else {
            messageElement.textContent = `Try again! Attempt ${attempt} of 3.`;
            attempt++;
            document.getElementById("attempt").textContent = attempt;
        }
    } else {
        messageElement.textContent = `Sorry, you failed to guess the secret number in 3 attempts. The secret number was ${secretNumber}.`;
        secretNumber = undefined; 
        attempt = 1; 
        score = 0; 
        document.getElementById("score").textContent = score;
        document.getElementById("attempt").textContent = attempt;
    }
    guessInput.value = ""; // Clear the input field
}
