var http = require('http');
var map = require('through2-map');

var server = http.createServer((request, response) => {
    // Ensure the request method is POST
    // My original solution for it to be post.
    // request.method = 'POST';

    if (request.method != 'POST') {
        response.end("I want POOOOST. Please.");
    }
    
    request.pipe(map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(process.argv[2]);