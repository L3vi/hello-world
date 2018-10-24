var async = require('async');
var http = require('http');

async.series({
    requestOne: finished => {
        http.get(process.argv[2], response => {
            var content = '';
            response.on('data', chunk => {
                content += chunk;
            });
            response.on('end', data => {
                finished(null, content);
            });
        }).on('error', e => {
            finished(e);
        });
    },
    requestTwo: finished => {
        http.get(process.argv[3], response => {
            var content = '';
            response.on('data', chunk => {
                content += chunk;
            });
            response.on('end', data => {
                finished(null, content);
            });
        }).on('error', e => {
            finished(e);
        });
    }
}, (error, results) => {
    console.log(results);
});