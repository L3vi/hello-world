var http = require('http');

var data = [];
var count = 0;

for (var i = 0; i < 3; i++) {
    getData(i);
};

function getData(index) {
    http.get(process.argv[2 + index], response => {
        response.setEncoding('utf8');
        var rawData = "";
        response.on('data', chunk => {
            rawData += chunk;
        });
        response.on('end', () => {
            data[index] = rawData;
            count++;
            if (count === 3) {
                displayData();
            }
        });
    });
};

function displayData() {
    data.forEach(e => console.log(e));
};