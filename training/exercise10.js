var net = require('net');

var server = net.createServer(function (socket) {
    var currentDate = new Date();
    var displayedDate = stringifyDate(currentDate);
    socket.end(displayedDate);

});
server.on('error', error => {
    console.log(error);
});

server.listen(process.argv[2]);

function stringifyDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    var minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
};