/* EXERCISE 1 */
// console.log("HELLO WORLD");

/* EXERCISE 2 */
// Using typical for loop
// let i = 2;
// let sum = 0;
// for (i; i < process.argv.length; i++) {
//     sum += +process.argv[i];
// }

// Using Array Methods
// let sum = process.argv
//     .filter((e, i) => i > 1)
//     .reduce((sum, entry) => sum += +entry, 0);
// console.log(sum);

/* EXERCISE 3 */
// var fs = require('fs');
// var fileName = process.argv[2];
// var buffer = fs.readFileSync(fileName);
// // can also be done like so:
// // fs.readFileSynce(process.argv[2], 'utf8').split('\n').length - 1
// var string = buffer.toString();
// var splitString = string.split('\n');
// console.log(splitString.length - 1);

/* EXERCISE 4 */