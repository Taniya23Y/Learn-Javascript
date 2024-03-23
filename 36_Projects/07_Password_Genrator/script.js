const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
const copyBtn = document.querySelector(".copyBtn");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector(".upperCase");
const lowercaseCheck = document.querySelector(".lowerCase");
const numbersCheck = document.querySelector(".numbers");
const symbolsCheck = document.querySelector(".symbols");
const indicator = document.querySelector(".indicator");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
// set strength circle color to grey

// set passwordLength
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}
handleSlider();

inputSlider.addEventListener("input", (event) => {
  passwordLength = event.target.value;
  handleSlider();
});

// --------------------------------------

// Set Indicator
// Strength Color Based on Password
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
  indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}
// Default Indicator
setIndicator("#ccc");

// --------------------------------------

// Generate Random Letters and Number and Symbols

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Random Lowercase Letter
function generateRandomLowercase() {
  return String.fromCharCode(generateRandomInteger(97, 123));
}

// Random Uppercase Letter
function generateRandomUppercase() {
  return String.fromCharCode(generateRandomInteger(65, 91));
}

// Random Number
function generateRandomNumber() {
  return generateRandomInteger(0, 9);
}

// Generate Symbol
function generateRandomSymbol() {
  let index = generateRandomInteger(0, symbols.length);
  return symbols.charAt[index];
}

// console.log(generateRandomLowercase());
// console.log(generateRandomUppercase());
// console.log(generateRandomNumber());
// console.log(generateRandomSymbol());

// --------------------------------------

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNumber = true;
  if (symbolsCheck.checked) hasSymbol = true;

  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

// -----------------------------------

// Copy Message
//* await navigator.clipboard.writeText(passwordDisplay.value) is a statement that uses the clipboard
//* API to write the generated password to the clipboard.
//*
//* The writeText() method of the clipboard interface writes the provided text to the clipboard. It returns a
//* Promise that resolves when the text has been successfully written to the clipboard.
//*
//* By using the await keyword before the navigator.clipboard.writeText(passwordDisplay.value)
//* statement, the code waits until the promise resolves before moving on to the next line of code. This ensure
//* that the password is successfully written to the clipboard before any further actions are taken.

// Why we use it - https://stackoverflow.com/questions/45071353/copy-text-string-on-click#:~:text=15-,Use%20the%20Clipboard,-API!
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "Copied";
  } catch (e) {
    // alert("Something went wrong in CopyContent");
    copyMsg.innerText = "Failed";
  }
  //to make span(copy) visible
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});

// ------------------------------------

// shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
// Shuffle the array randomly - Fisher Yates Method
function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

//---------------------------------------

// CheckBox - Handle

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });

  //special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

generateBtn.addEventListener("click", () => {
  // none of the checkbox are checked
  if (checkCount == 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // Remove Previous Password
  password = "";

  let arrayOfCheckedFunction = [];

  if (uppercaseCheck.checked)
    arrayOfCheckedFunction.push(generateRandomUppercase);

  if (lowercaseCheck.checked)
    arrayOfCheckedFunction.push(generateRandomLowercase);

  if (numbersCheck.checked) 
    arrayOfCheckedFunction.push(generateRandomNumber);

  if (symbolsCheck.checked) 
    arrayOfCheckedFunction.push(generateRandomSymbol);

  // Compulsory Addition
  for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
    password += arrayOfCheckedFunction[i]();
  }

  // console.log("Password: " + password);

  // Additional addition | remaining addition
  for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
    let randIndex = generateRandomInteger(0, arrayOfCheckedFunction.length);
    password += arrayOfCheckedFunction[randIndex]();
  }
  // console.log("Password: " + password);

  // Shuffle Password
  password = shufflePassword(Array.from(password));

  // show in UI
  passwordDisplay.value = password;

  // calculate strength
  calcStrength();
});





