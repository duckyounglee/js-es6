// all symbols are uniq
// for private obj keys

const us1 = {
    me: {
        age: 12
    },
    me: {
        age: 12
    }
}
const us2 = {
    [Symbol("me")]: {
        age: 12
    },
    [Symbol("me")]: {
        age: 12
    },
}

console.log(us1);
console.log(us2); 