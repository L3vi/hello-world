var http = require('http');
var chars = process.argv[2];

http.get(chars, response => {
    response.setEncoding('utf8');
    var rawData = "";
    var charNum = 0;
    response.on('data', chunk => {
        rawData += chunk;
        charNum += chunk.length;
    });
    response.on('end', () => {
        console.log(charNum);
        console.log(rawData)
    });
});