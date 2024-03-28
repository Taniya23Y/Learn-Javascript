// react

class React {
    constructor(){
        this.library = 'React'
        this.server = 'https://local:3000'

        // requirements
        document.querySelector('button')
        .addEventListener('click', this.handleClick.bind(this))
    }
    handleClick(){
        console.log('Button Clicked');
        console.log(this);
        console.log(this.server);
    }
}

const app = new React();