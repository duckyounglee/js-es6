const logTester = (targetStr) => {
    console.log(`${targetStr}:`,eval(targetStr));
}

const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}