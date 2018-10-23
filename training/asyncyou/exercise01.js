var http = require('http');
var fs = require('fs');
var async = require('async');

async.waterfall([
    function(callback) {
        fs.readFile(process.argv[2], 'utf8', (error, data) => {
            if (error) {
                callback(error);
            }
            callback(null, data);
        });
    },
    function(data, callback) {
        var content = '';
        http.get(data.toString().trimRight(), response => {
            response.on('data', chunk => {
                content += chunk;
            });
            response.on('end', chunk => {
                callback(null, content);
            });
        }).on('error', err => {
            callback(err);
        });
    }
], function callback(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
});


// Original Work (without async...)
// var file = process.argv[2];
// var path = fs.readFileSync(file, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     };
//     return data;
// });

// http.get(path, response => {
//     var rawData = '';
//     response.on('data', chunk => {
//         rawData += chunk.toString();
//     });
//     response.on('end', () => {
//         console.log(rawData);
//     });
// });