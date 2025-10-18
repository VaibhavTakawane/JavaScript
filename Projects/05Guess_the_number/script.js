let randomNumber = Math.floor(Math.random() * 100) + 1;

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#guessSubmit");
const guessSlot = document.querySelector("#guesses");
const resultParas = document.querySelector("#resultParas");
const remaining = document.querySelector("#lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

let prevGuess = [];
let attemptsLeft = 10;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Number must be between 1 and 100");
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (attemptsLeft === 0) {
        displayMessage(`Game Over! The number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again.`);
    } else {
        displayMessage(`Too high! Try again.`);
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    attemptsLeft--;
    remaining.textContent = attemptsLeft;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Start New Game";
    restartBtn.id = "newGame";
    restartBtn.classList.add("button");

    resultParas.appendChild(restartBtn);
    playGame = false;

    restartBtn.addEventListener("click", newGame);
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    attemptsLeft = 10;
    guessSlot.innerHTML = "";
    remaining.textContent = attemptsLeft;
    lowOrHigh.textContent = "";
    userInput.removeAttribute("disabled");

    const restartBtn = document.querySelector("#newGame");
    resultParas.removeChild(restartBtn);

    playGame = true;
}
