const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

const duleeInfo = {
    name: "dk",
    age: 31,
}
const duleeState = {
    tall: 180
}
const dulee = {...duleeInfo, ...duleeState}
showVariable(dulee);

const array1 = [1, 2];
const array2 = [3, 4];
const arraySum = [...array1, ...array2];
showVariable(arraySum);

const textInput = "";
const optionalObjProperty = {
    name: "dulee",
    age: 31,
    ...(textInput && textInput !== "" && { textInput })
};
showVariable({optionalObjProperty})