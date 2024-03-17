// Edit and remove elements in DOM

const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day1 = document.querySelector('.day');
console.log(day1); 
console.log(day1.parentElement); 
console.log(day1.nextElementSibling); 

console.log("NODES: ", parent.childNodes);
//* Nodes: NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]