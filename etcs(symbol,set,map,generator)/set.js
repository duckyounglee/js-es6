const set = new Set([1,2,3,3,3,3,3,3,4,5])
console.log(set);

console.log(set.has(3));
set.delete(2)
console.log(set);
set.clear()
console.log(set);
set.add("hi")
console.log(set);

const objset = new Set("123112312312")
console.log(objset.values());