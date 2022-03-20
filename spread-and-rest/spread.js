const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

