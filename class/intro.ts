const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

class User {
    constructor() {
        this.userName = 'dulee';
    }
    sayHello() {
        console.log('hi');
        
    }
}

const newUser = new User();
console.log('make instance with class');
showVariable({newUser})
newUser.sayHello();