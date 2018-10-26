var http = require('http');
var async = require('async');

var url = process.argv[2];
var numbers = ['one', 'two', 'three'];

function getRequest(memo, number, callback) {
    var body = '';
    // Also apparently you need to have ?number and not /number...
    var getURL = url + '?number=' + number;
    http.get(getURL, response => {
        
        response.on('error', err => {
            return err;
        })
        response.on('data', chunk => {
            callback(null, memo + Number(chunk.toString()))
        });
        response.on('end', () => {
            // Turns out it is better practice to do the callback at the 'end'
            // According to the solution
            // callback(null, memo + Number(body));
        });
    }).on('error', err => {
        callback(err);
    });
};

async.reduce(numbers, 0, getRequest, (error, result) => {
    if (error) console.log(error.message);
    console.log(result);
});