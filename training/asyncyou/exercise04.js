var async = require('async');
var http = require('http');

var urls = process.argv.slice(2);

function getData(url, callback) {
    http.get(url, response => {
        var content = '';
        response.on('data', chunk => {
            content += chunk.toString();
        });
        response.on('end', () => {
            return callback(null, content);
        });
        response.on('error', err => {
            callback(err.message);
        });
    }).on('error', err => {
        callback(err.message);
    });
};

async.map(urls, getData,
    (error, results) => {
        if (error) {
            console.error(error);
        };
        console.log(results);
    });