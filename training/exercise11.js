var http = require('http');
var fs = require('fs');



// fs.readFile(process.argv[3], 'utf8', (error, data) => {
//     console.log(data);
// });

var server = http.createServer((request, response) => {

    request.on('error', (error) => {
        console.error(error);
        response.end();
    });
    response.on('error', (error) => {
        console.error(error);
    });
    request.on('readable', () => {
        console.log("Request received");
        var src = fs.createReadStream(process.argv[3]);
        src.pipe(response);
    });

    response.on('pipe', data => {
        console.log(data);
    });

    response.end();
});
server.listen(process.argv[2]);