console.log(document);
console.log(document.baseURI);
console.log(document.links);
console.log(document.links[2]);

console.dir(document);
document.getElementById(div);
document.getElementById(div).innerHTML = "<h1> Hello !!!! </h1>";

document.getElementById("h1ID");
document.getElementById("h1ID").id;
document.getElementById("h1ID").class;
document.getElementById("h1ID").className;
document.getElementById("h1ID").getAttribute;
document.getElementById("h1ID").getAttribute('id');
document.getElementById("h1ID").getAttribute('className');
document.getElementById("h1ID").getAttribute('class');
document.getElementById("h1ID").setAttribute('class');
document.getElementById("h1ID").setAttribute('class', 'test heading');

const h1Id = document.getElementById("h1ID");
h1ID.style.backgroundColor = 'green';
h1ID.style.padding = "15px";
h1ID.style.borderRadius = "15px";

//Interesting
h1ID.textContent;
h1ID.innerHTML;
h1ID.innerText;

// Difference between innerText and innerContent

h1ID.innerText;
//* 'DOM Learning to master JS'
h1ID.textContent;
//* 'DOM Learning to master JS Test Text'

// what is innerHTML
h1ID.innerHTML;
//* 'DOM Learning to master JS <span style="display: none;">Test Text</span>'

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementsByClassName('heading')
//* HTMLCollection [h1#h1ID.heading, h1ID: h1#h1ID.heading]

// QuerySelectors
document.querySelector('h2'); // it selects first h2 

document.querySelector("#h1ID")
document.querySelector(".heading")

document.querySelector('input[type="password"]')
document.querySelector('p:first-child')

document.querySelector('ul');
const myUl = document.querySelector('ul');
myUl.querySelector('li');
const turnGreen = myUl.querySelector('li');
turnGreen.style.backgroundColor = "green";
turnGreen.style.borderRadius = "15px";

turnGreen.innerText;
turnGreen.innerText = "five";

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// QuerySelectorsAll

document.querySelectorAll('li');
//* NodeList(3) [li, li, li]
/* 
    NodeList(3) [li, li, li]
    0 : li
    1 : li
    2 : li
    length : 3
    [[Prototype]] : NodeList
*/

const tempLiList = document.querySelectorAll('li');
tempLiList.style.color = 'green';
//* Uncaught TypeError: Cannot set properties of undefined (setting 'color') at <anonymous>:2:24

tempLiList[0].style.color = 'green';

const myH1 = document.querySelectorAll('h1');
myH1.style.color = 'green';
myH1[0].style.color = 'green';

tempLiList.forEach(function (l){
  l.style.backgroundColor = 'blue'
});

document.getElementsByClassName('list-item');
/*
  HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
   0 : li.list-item
   1 : li.list-item
   2 : li.list-item
   3 : li.list-item
   length : 4
   [[Prototype]] : HTMLCollection
*/

const tempClassList = document.getElementsByClassName('list-item');
tempClassList.forEach(function (li){
    console.log(li);
});

/* Uncaught TypeError: tempClassList.forEach is not a function
    at <anonymous>:2:15
*/

Array.from(tempClassList);
/* 
   (4) [li.list-item, li.list-item, li.list-item, li.list-item]
*/

const myCoveredArray = Array.from(tempClassList);
myCoveredArray;
myCoveredArray.forEach(function (li){
   li.style.color = "orange"
})

