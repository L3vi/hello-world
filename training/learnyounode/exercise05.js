/* EXERCISE 5 */

var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], (error, list) => {
    var extension = "." + process.argv[3];
    var filteredList = list.filter(file => path.extname(file) === extension).forEach(element => {
        console.log(element);
    });
});