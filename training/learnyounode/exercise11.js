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

    fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(process.argv[2]);