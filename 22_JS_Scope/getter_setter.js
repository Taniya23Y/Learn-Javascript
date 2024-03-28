class User {
    constructor(email, password){
        this.email = email;    
        this.password = password;
    }

    get email(){
        return this.email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this.password.toUpperCase();
        // return this._password.toUpperCase();
        return `${this._password} taniya`;
    }

    set password(value){
    //   this.password = value.toUpperCase();
      this._password = value.toUpperCase();
    }
}

// const taniya = new User("taniya@gmail.com", '123')
const taniya = new User("taniya@gmail.com", 'Abc')
console.log(taniya.password); // 123