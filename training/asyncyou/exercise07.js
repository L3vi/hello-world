var async = require('async');
var http = require('http');

var responseBody = '';
count = 0;
async.whilst(() => responseBody != 'meerkat', callback => {
    count++;
    http.get(process.argv[2], response => {
        response.on('data', chunk => {
            responseBody = chunk.toString();
        });
        response.on('end', () => {
            callback(null, count);
        })
    })
}, (error, results) => {
    if (error) console.log(error);
    console.log(results);
});