/* EXERCISE 6 */
// WIP
var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, (error, list) => {
    if (error) console.log(error);
});