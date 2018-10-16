var directory = process.argv[2];
var extension = process.argv[3];
var myModule = require('./module');
var path = require('path');

function callback(error, data) {
    if (!error) {
        data.forEach(file => {
            console.log(file);
        });
    } else {
        console.log(error);
    }
};

myModule(directory, extension, callback);