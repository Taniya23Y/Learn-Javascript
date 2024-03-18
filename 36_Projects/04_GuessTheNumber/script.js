// Variable to store a random number between 1 and 100 for the game
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select DOM elements for the game
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// Create a new paragraph element
const p = document.createElement("p");

// Variables to store previous guesses and the number of guesses
let prevGuess = [];
let numGuess = 1;

// Variable to control the game state
let playGame = true;

// Event listener for the submit button
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  // Check if the input is a number
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  }
  // Check if the input is within the allowed range
  else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    // If the input is valid, push it to the previous guesses array
    prevGuess.push(guess);
    // Check if the number of guesses has reached the limit
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
  // If the guess is correct, display a success message and end the game
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }
  // If the guess is too low, display a message indicating so
  else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  }
  // If the guess is too high, display a message indicating so
  else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// Function to display the user's guess in the DOM
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// Function to display messages in the DOM
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// Function to reset the game
function newGuess() {
  // Reset the game state and DOM elements
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
