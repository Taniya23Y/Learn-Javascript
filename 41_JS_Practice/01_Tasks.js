/**
 * Create an HTML Page with a button. When the button is clicked,
 * change the text of a paragraph element
 */

const btn = document.querySelector("button");
const p = document.querySelector("p");
btn.addEventListener("click", function () {
  p.textContent = "Okay I understand";
});

//-------------------------------------------------------------
/**
 * Create a page with two images and a button. when the button is clicked,
 * swap the source attribute of the images.
 */

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
document.querySelector("button").addEventListener("click", function () {
  var src1 = img1.src;
  var src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});

//--------------------------------------------------------------------------
/**
 * Create a form with input fields and a submit button.
 * Use js to validate teh form and display an error message
 * if the input is invalid.
 */

const form = document.querySelector("form");
//*const input1 = document.querySelector('#input1');
//*const input2 = document.querySelector('#input2');
const inputs = document.querySelector('input[type="text"]');
const submit = document.querySelector("#submitBtn");
const h4 = document.querySelector("h4");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(input1.value, input2.value)
  // if(input1.value === '' || input2.value === ''){
  // console.error("This is Blank");
  //     h4.textContent = "Error, Input fields are blanks"
  //     h4.style.color = 'red';
  // } else {
  //     h4.textContent = '';
  //     h4.style.color = 'black'
  // }

  // inputs.forEach(function(elems){
  //     if(elems.value = ''){
  //         h4.textContent = "Error, Some fields are blank";
  //         h4.style.color = 'red';
  //     } else {
  //         h4.textContent = '';
  //         h4.style.color = 'black'
  //     }
  // })

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      h4.textContent = "Error, Some fields are blank";
      break;
    }
  }
});

//----------------------------------------------------------------
/**
 * Create an unordered list. Allow users to add and remove
 * list items dynamically using button
 */

const add1 = document.querySelector("#add1");
const remove1 = document.querySelector("#remove1");
const input = document.querySelector("#ip1");
const ul = document.querySelector("ul");

var li;

add1.addEventListener("click", function () {
  if (input.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});

remove1.addEventListener("click", function () {
  ul.removeChild(li);
});

//------------------------------------------------------------------
/**
 * Build a countdown timer that starts when a button is clicked and updates the display in real-time
 */

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const heading3 = document.querySelector("#heading3");

var int;
startBtn.addEventListener("click", function () {
  var count = 0;
  // setInterval(callback, timer)
  int = setInterval(function () {
    heading3.textContent = count;
    count++;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(int);
});

//-------------------------------------------------------------------------
/**
 * Create a tabbed interface where clicking on tabs displays different
 * content sections without page reload.
 */

const home = document.querySelector("#home");
const navigate = document.querySelector("#navigate");
const maps = document.querySelector("#maps");

const homeText = document.querySelector(".homeText");
const navigateText = document.querySelector(".navigateText");
const mapsText = document.querySelector(".mapsText");

homeText.style.display = "block";
homeText.style.width = "50%";

home.addEventListener("click", function () {
  removealls();
  homeText.style.display = "block";
  homeText.style.width = "50%";
});

navigate.addEventListener("click", function () {
  removealls();
  navigateText.style.display = "block";
  navigateText.style.width = "50%";
});

maps.addEventListener("click", function () {
  removealls();
  mapsText.style.display = "block";
  mapsText.style.width = "50%";
});

function removealls() {
  document.querySelectorAll("#h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
//---------------------------------------------------------------------------
/**
 * Display a progress bar that updates in real-time, showing the progress of a task,
 * download, or form submission.
*/
const progress = document.querySelector('#progress')
const h41 = document.querySelector('#h41');
var count1 = 0;
var int = setInterval(function(){
  if(count1 === 100){
    h41.style.opacity = 1;
    clearInterval(int);
  }
  count1++;
  progress.style.width = count1+'%';
}, 100)

//------------------------------------------------------------------------------------
/**
 * Create a search bar that displays live search results as users type, uploading the results requiring
 * a full page reload
*/

//-----------------------------------------------------------------------------------------------
/**
 * Build a character counter for a text area or input field, which updates in real-time as
 * types and enforces a character limit.
 */

//-------------------------------------------------------------------------------------------------
/**
 * Show a progress bar which shows how much has been scrolled.
 */
