const p1 = new Promise(resolve => {
    setTimeout(resolve, 1000, "first")
})
const p2 = new Promise(resolve => {
    setTimeout(resolve, 2000, "second")
})
const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "third")
})
const pXXXX = new Promise((resolve,reject)=>{
    setTimeout(reject, 1000,'Error XD')
})

// const promiseAll = Promise.all([p1,p2,pXXXX]);
// promiseAll.then(values => console.log(values)).catch(err => {throw new Error(err)})

const asyncFunc = async () => {
    try {
        const pp = await pXXXX;
        console.log(pp);
    } catch(err) {
        console.log('err', err);
    } finally {
        console.log('done');
        
    }
}

asyncFunc();