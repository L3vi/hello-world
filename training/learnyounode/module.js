/* EXERCISE 6 */
// WIP
var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (error, data) => {
        if (!error) {
            var filteredData = data.filter(file => path.extname(file) === ('.' + extension));
            callback(null, filteredData);
        } else {
            callback(error);
        }
    });
};