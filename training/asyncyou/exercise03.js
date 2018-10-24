var async = require('async');
var http = require('http');

async.each([process.argv[2], process.argv[3]], (item, callback) => {
    checkForErrors(item, callback);
}, (error, data) => {
    if (error) {
        console.log(error);
    };
});

function checkForErrors(url, callback) {
    http.get(url, response => {
        var content = '';
        response.on('data', chunk => { 
            content += chunk.toString();
        });
        response.on('end', () => {
            return callback();
        });
        response.on('error', err => {
            callback(err.message);
        });
    }).on('error', err => {
        callback(err.message);
    });
};

// Current ISSUE is that it returns an error... but the program doesn't expect/want an error...