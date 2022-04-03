// const mySuccessPromise = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000, ':)')
//     setTimeout(reject,1000, 'XD')
// })
// mySuccessPromise.catch((err)=>{console.log('err', err)}).then(ok=>console.log('ok',ok)).catch((err)=>{console.log('err', err)});

// const myErrPromise = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'XD')
// })
// myErrPromise.then(value=>console.log(value)).catch((err)=>{console.log('err', err)});

const newchainingPromise = new Promise((resolve, reject) => {
    resolve(2);
})

newchainingPromise
.then(resolvedNumber => {
    console.log(resolvedNumber);
    return (resolvedNumber * 2)
})
.then(()=>{
    throw new Error("hi")
})
.then(resolvedNumber => {
    console.log(resolvedNumber);
    return (resolvedNumber * 2)
})
.then(resolvedNumber => {
    console.log(resolvedNumber);
    return (resolvedNumber * 2)
}).catch(err => console.log(err.message))

