function all(fetch1, fetch2) {
    // Internal Promise
    new Promise((resolve, reject) => {
        // Counter with initial value of 0
        var count = 0;
        var promises = [];

        fetch1.then(value => {
            promises.push(value);
            count++;
        });
        fetch2.then(value => {
            promises.push(value);
            count++;
            if (count >= 2) {
                resolve(promises);
            }
        });
    }).then(value => {
        console.log(value);
    }, error => {
        console.log(error.message);
    });
}

all(getPromise1(), getPromise2());