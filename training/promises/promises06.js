function nextThingToRun(value) {
    console.log(value);
}

var promise = Promise.resolve('haha').then(nextThingToRun).catch('Failed.');

var promise2 = Promise.reject("Error!");