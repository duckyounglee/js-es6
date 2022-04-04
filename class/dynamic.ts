const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

class DynamicUser {
    constructor({name, height = 180}) {
        this.name = name;
        this.height = height
    }
    sayHello() {
        console.log(`Hi, I am ${this.name}`);
        
    }
}

class ExtendsUser extends DynamicUser {
    constructor({name, height = 180, weight = 60}) {
        super({name, height});
        this.weight = weight;
    }
}

const duleeUser = new DynamicUser({name: 'dulee'});
const eunjiUser = new DynamicUser({name: 'eunji', height: 165});
const extendsUser = new ExtendsUser({name: 'jj', weight: 40})
console.log('make dynamic instance with class');
showVariable({duleeUser, eunjiUser, extendsUser})
duleeUser.sayHello();
eunjiUser.sayHello();
extendsUser.sayHello();