const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

let wrongInputA = 'b';
let wrongInputB = 'a';

showVariable({wrongInputA,wrongInputB});
[ wrongInputA, wrongInputB ] = [ wrongInputB, wrongInputA ];
showVariable({wrongInputA,wrongInputB});

const numbers = [1,2,3,4,5,6];

const [,,,, five, six] = numbers;
showVariable({five,  six})