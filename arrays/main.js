const logTester = (targetStr) => {
    console.log(`${targetStr}:`,eval(targetStr));
}

const newArrUsingArray = Array(3);
logTester("newArrUsingArray");
const newArrUsingArrayOf = Array.of(3);
logTester("newArrUsingArrayOf");

const testArray = [1,2,3,4,5];
logTester("testArray");
const reduced = testArray.reduce((pre,cur)=>{
    return pre * cur
})
logTester("reduced")

console.log(`${(16).toString(2)}`);