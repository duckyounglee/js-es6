// Freeze
// cannot change value of obj

const obj = { name: "dulee" }
console.log(obj);
Object.freeze(obj);
obj.name = "change"
console.log(obj);