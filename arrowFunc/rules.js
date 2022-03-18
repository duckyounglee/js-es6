const names = ["dulee", "dev", "ej"];

const addHeart = (name) => {
    return name + 'Heart';
}

const nameHearts = names.map(name => {
    return name + '!'})

console.log(names);
console.log(nameHearts);