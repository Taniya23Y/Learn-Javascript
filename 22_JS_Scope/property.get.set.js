// Function based syntax getter and setter

function User(email, password){
    this.email = email
    this.password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this.email.toUpperCase()
        },
        set: function(value){
            this._email = value;
        }
    })

    
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value;
        }
    })
}

const tea = new User('tea@tea.com', 'tea')
console.log(tea.email);