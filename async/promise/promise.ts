const mySuccessPromise = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000, ':)')
    setTimeout(reject,1000, 'XD')
})
mySuccessPromise.catch((err)=>{console.log('err', err)}).then(ok=>console.log('ok',ok)).catch((err)=>{console.log('err', err)});

// const myErrPromise = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'XD')
// })
// myErrPromise.then(value=>console.log(value)).catch((err)=>{console.log('err', err)});