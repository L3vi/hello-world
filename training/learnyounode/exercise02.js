/* EXERCISE 2 */

// Using typical for loop
let i = 2;
let sum = 0;
for (i; i < process.argv.length; i++) {
    sum += +process.argv[i];
}
console.log(sum);

// Using Array Methods
// let sum = process.argv
//     .filter((e, i) => i > 1)
//     .reduce((sum, entry) => sum += +entry, 0);
// console.log(sum);