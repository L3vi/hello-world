/* EXERCISE 3 */

var fs = require('fs');
var fileName = process.argv[2];
var buffer = fs.readFileSync(fileName);
// can also be done like so:
// fs.readFileSynce(process.argv[2], 'utf8').split('\n').length - 1
var string = buffer.toString();
var splitString = string.split('\n');
console.log(splitString.length - 1);