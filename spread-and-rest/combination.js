const showVariable = (objOfVars) => {
    const keyArray = Object.keys(objOfVars);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, objOfVars[key]);
    })
}

const user = {
    name: 'nico',
    age: 24,
    password: 1234
};

const killKey = ({ password, ...rest}) => rest;
const resultUser = killKey(user)
showVariable({user, resultUser});

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = (objs) => (objs);
const mergedObj = merge ({...obj1, ...obj2});
showVariable({mergedObj})

const killkey = ({ foo, ...rest }) => rest;
const rest = killkey({...obj1, ...obj2})
showVariable({rest})

const addKey = ({country = "kr",...rest}) => ({country, ...rest})
const krUser = addKey(user);
showVariable({krUser})

const changeKey = ({age: Age, ...rest}) => ({Age, ...rest})
const ChangedKeyUser = changeKey(user)
showVariable({changedKeyUser})