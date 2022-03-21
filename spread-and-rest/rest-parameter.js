const showVariable = (objOfVars) => {
    const keyArray = Object.keys(objOfVars);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, objOfVars[key]);
    })
}

const logger = (a, ...rest) => console.log(rest);
const args = ['aaa', 'bbb', 'ccc']
logger(...args);