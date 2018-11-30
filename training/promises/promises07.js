first().then(function(value) {
    return second(value);
}).then(console.log);