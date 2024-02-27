// Singleton(constructor)

//Singleton Object
const instaUser = new Object();
console.log(instaUser); // {}

//Non-Singleton Object
const instaUser2 = {};
console.log(instaUser2); // {}

//+++++++++++++++++++++++++++++++++++++
instaUser.id = "xyz234", 
instaUser.name = "Annie",
instaUser.isLoggedIn = false;
console.log(instaUser);
/* 
  Answer is: 
  { id: 'xyz234', name: 'Annie', isLoggedIn: false }
*/

const regularUser = {
    email: "lissa@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Lissa",
            lastName:"Doe"
        }
    }
}
console.log(regularUser.fullname); // { userFullname: { firstName: 'Lissa', lastName: 'Doe' } }
console.log(regularUser.fullname.userFullname); // { firstName: 'Lissa', lastName: 'Doe' }
console.log(regularUser.fullname.userFullname.firstName);//Lissa

//++++++++++++++++++++++++++++++++++++++++++++
// Combining object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2};
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = Object.assign({}, obj1, obj2); // here {} it is optional 
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2};
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const users = [
    {
        id: 1,
        email: "user1@gmail.com",
        password: 123
    },
    {
        id: 1,
        email: "user1@gmail.com",
        password: 123
    },
    {
        id: 1,
        email: "user1@gmail.com",
        password: 123
    },
    {
        id: 1,
        email: "user1@gmail.com",
        password: 123
    }
]

console.log(users[1].email); // user1@gmail.com
console.log(instaUser); //{ id: 'xyz234', name: 'Annie', isLoggedIn: false }

console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)); // [ 'xyz234', 'Annie', false ]
console.log(Object.entries(instaUser));
/*
   Answer is:
   [ [ 'id', 'xyz234' ], [ 'name', 'Annie' ], [ 'isLoggedIn', false ] ]
*/

// If value is present or not
console.log(Object.hasOwnProperty('isLoggedIn')); // false