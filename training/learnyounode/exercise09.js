var http = require('http');

var data = [];
var count = 0;

// Loop through each input (minus the 2 first inputs) and extract data
for (var i = 2; i < process.argv.length; i++) {
    getData(i);
};

function getData(index) {
    http.get(process.argv[index], response => {
        response.setEncoding('utf8');
        var rawData = "";
        // When data is received, add it to the "rawData" variable
        response.on('data', chunk => {
            rawData += chunk;
        });

        // Once it's done add it to an array of data in the proper position.
        response.on('end', () => {
            data[index - 2] = rawData;
            // Need this external count variable to keep things in order.
            count++;
            // Once we've hit the max amount of inputs (3 in this case) and we know we've extracted all the data (in order)
            // THEN we display the data (see the IF statement below)
            if (count === (process.argv.length - 2)) {
                displayData();
            }
        });
    });
};

function displayData() {
    data.forEach(e => console.log(e));
};