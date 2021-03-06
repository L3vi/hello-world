var async = require('async');
var http = require('http');
var urls = process.argv.slice(2);

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

async.each(urls, checkForErrors,
    (error) => {
        if (error) {
            console.error(error);
        };
    });