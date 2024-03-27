fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


// Reference Revise -> Event loop app1.js
// then

response = fetch('Something');
//*          ||
//*   --------------------
//*  ||                  ||
//*  Data-:              Web-browser / node
//* onfulfilled[]         |
//* onRejection[]         network request

// Understanding:-
// fetch works on two things Data and web browser / node
// Data manages space on memory 
// Two array:- onRejection[] , onfulfilled[]
// The two are promise resolution and promise rejection
// We can not directly push data on array(onRejection[] , onfulfilled[]) because they are private field
