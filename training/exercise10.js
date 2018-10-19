var net = require('net');


var server = net.createServer(function (socket) {
    var currentDate = new Date();
    var displayedDate = stringifyDate(currentDate);
    socket.end(displayedDate);

});

// If error, errorify me cap'n
server.on('error', error => {
    console.log(error);
});

// actually accesses the server at a specific port
server.listen(process.argv[2]);

// Adds leading zero to the number if it's less than 10
const addLeadingZero = (number) => (number < 10) ? '0' + number : number;

// Displays the date in a string format.
function stringifyDate(date) {
    var year = date.getFullYear();
    var month = addLeadingZero(date.getMonth() + 1);
    var day = addLeadingZero(date.getDate());
    var hour = addLeadingZero(date.getHours());
    var minute = addLeadingZero(date.getMinutes());
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
};