// ++++++++++ TODO APP ++++++++++++++
/*
  Todo App-
  1) list - to show all todos
  2) add - to add a too
  3) delete - to delete a task
  4) quit - to exit the todo
*/

let todo = [];
let req = prompt("Please enter your request");
// console.log(req);

while (true) {
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------");
        // for(task of todo){
            for(let i = 0; i < todo.length; i++){
            // console.log(task);
            console.log(i, todo[i]);
        }
        console.log("-------------");
    }
    else if(req == "add"){
        let task = prompt("Please enter the task you want to add ");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("Invalid request");
    }
    req = prompt("Please enter your request");
   
  
}