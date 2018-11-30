function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(arg) {
    console.log(arg);
    return ++arg;
}

function onRejected(error) {
    console.log(error.message);
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, onRejected); // should probably be catch