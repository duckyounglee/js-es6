const showVariable = (varAsObj) => {
    const keyArray = Object.keys(varAsObj);
    keyArray.forEach((key) => {
        console.log(`${key}:\t`, varAsObj[key]);
    })
}

const ints = [1,2,3]
const dulee = { height: 180, name: 'dulee', width: 70}

ints.forEach((int,index,ints)=>{
    ints[index] = int + 1;
})
showVariable({ints});

for (const int of ints) {
    console.log(int);
}
for (const char of "string") {
    console.log(char + 'a');
}
for (const int of ints) {
    if (int === 3) break;
    console.log(int);
    
}