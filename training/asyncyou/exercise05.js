var http = require('http');
var async = require('async');

var url = process.argv[2];
var port = process.argv[3];
// console.log('http://' + url + ':' + port + '/users/create');

function postRequest(id, done) {
    postData = JSON.stringify({
        "user_id": id
    });

    var options = {
        hostname: url,
        port: port,
        method: 'POST',
        path: '/users/create',
        headers: {
            'Content-Length': postData.length
        }
    };

    var request = http.request(options, response => {
        response.on('data', chunk => { });
        response.on('end', () => {
            // console.log('No more data here...');
        })
    });
    request.on('error', e => {
        done(e);
    });
    request.write(postData);
    // console.log(id);
    request.end(() => {
        done(null, postData);
    });
    
};

function getRequest(done) {
    var options = {
        hostname: url,
        port: port,
        method: 'GET',
        path: '/users'
    };
    var body = '';
    http.get(options, response => {
        response.on('error', err => {
            done(err);
        })
        response.on('data', chunk => {
            body += chunk.toString();
            // To properly display the information as an object, use line below
            // console.log(JSON.parse(chunk.toString()));
        });
        response.on('end', () => {
            done(null, body);
        });
    });
};

async.series({
    post: done => {
        async.times(5, (n, next) => {
            postRequest(n + 1, (error, userData) => {
                next(error, userData)
            });
        }, (error, users) => {
            if (error) console.log(error.message);
            done(null, users);
        });
    },
    get: done => { getRequest(done) }
}, (error, results) => {
    if (error) console.log(error.message);
    console.log(results.get);
});