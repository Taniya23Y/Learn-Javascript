// Object based syntax getter and setter

const User = {
    _email: 'tea@gmail.com',
    _password: "abc",

    get email(){
      return this._email.toUpperCase()
    },

    set email(value){
       this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);  // TEA@GMAIL