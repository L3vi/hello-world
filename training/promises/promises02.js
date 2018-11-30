var promise = new Promise((fulfill, reject) => {
    fulfill("FULFILLED!");
    reject(error);
}).then((value) => {
    setTimeout(() => {
        console.log(value);
    })
}, (error) => {

})