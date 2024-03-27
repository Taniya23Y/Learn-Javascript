const requestURL = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
// for continuously check
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    // state detection
    if(xhr.readyState === 4){
        
        const data = JSON.parse(this.responseText);
        console.log(this.responseText);
        console.log(data);
        // console.log(this.responseText);
        // console.log(typeof data);// string
        console.log(typeof data);// object
        console.log(data.followers);
    }
}

xhr.send();