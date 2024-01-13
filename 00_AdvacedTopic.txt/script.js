function abcd(){
    for (var i = 1; i < 12; i++) {
       console.log(i);  
    }
    console.log("this is");
    console.log(i);
}

abcd();

var obj  = {
    name: "Anya",
    Age: 5,
    city: "Ostania"
};

for(var key in obj){
    console.log(`Key : ${key} , Value : ${obj[key]}`);
}