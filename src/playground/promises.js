const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is resolved data');
        reject('rejected');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error)
});

console.log('after');