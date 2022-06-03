const userObj = {
    name: 'nico',
    age: 12,
    pw: 123213
}

const userFilter = {
    get: (target, prop, receive) => {
        console.log("get intercept");
        console.log(target);
        console.log(prop);
        console.log(receive);
        return "Nothing" + prop
    }
};

const filter = new  Proxy(userObj, userFilter)

console.log(filter.age);