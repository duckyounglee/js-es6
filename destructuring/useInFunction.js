const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

const configObj = {
    notification: {
        follow: true,
        alertt: false,
        mkt: false,
    },
    color: {
        theme: "blue"
    }
}

const saveUserSetting = (configObj) => {
    const { notification: { alerttt = true }, color } = configObj;
    showVariable({alerttt, color})
}
saveUserSetting(configObj);