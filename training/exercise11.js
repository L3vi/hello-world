var http = require('http');
var net = require('net');
var fs = require('fs');

// fs.readFile(process.argv[3], 'utf8', (error, data) => {
//     console.log(data);
// });

var server = http.createServer((request, response) => {
    var src = fs.createReadStream(process.argv[3]);

    response.end();
});
server.listen(process.argv[2]);