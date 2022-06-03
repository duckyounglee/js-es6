function* listPeople() {
    yield "Dal";
    yield "fin";
    yield "tan";
}

const listG = listPeople();

console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());