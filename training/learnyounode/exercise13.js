var http = require('http');
var url = require('url');

const options = {
    method: 'GET',
    path: '/api/parsetime'
}

var server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.end("Give me GET requests");
    }

    // parse URL into a URL object
    const myURL = url.parse(request.url, true);
    const date = new Date(myURL.query['iso']);
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // check by the URL pathname
    switch (myURL.pathname) {
        case '/api/parsetime':
            // response.end();
            const parseTime = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            response.end(JSON.stringify(parseTime));
            break;
        case '/api/unixtime':
            const unixTime = {
                "unixtime": date.getTime()
            };
            response.end(JSON.stringify(unixTime));
            break;
        default:
            response.end();
            break;
    }
    response.end();
});

server.listen(process.argv[2]);