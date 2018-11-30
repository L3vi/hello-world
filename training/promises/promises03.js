var promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
})


promise.then((value) => {

}, (error) => {
    console.log(error.message);
});