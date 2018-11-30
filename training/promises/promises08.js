function attachTitle(name) {
    return `DR. ${name}`;
};

var promise = new Promise(fulfill => {
    fulfill("MANHATTAN");
})

promise.then(attachTitle).then(console.log);

// Short way
// Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);