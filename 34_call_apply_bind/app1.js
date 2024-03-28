// call

function setUsername(username) {
  // complex DVB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername(username);
  setUsername.call(username);
  setUsername.call(this, username);
  //   (this.username = username),
  (this.email = email), (this.password = password);
}

const another = new createUser("another", "another@gmaiol.com", "123");
console.log(another); // createUser { email: 'another@gmaiol.com', password: '123' }
