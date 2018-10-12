// Array Methods
// Levi Stum

/* 
    1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    2. Does it edit the current array?
    3. What does it return?
    4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    5. Build your real world example.
*/

/*
PUSH
1. Adds elements to the end of the array
2. Yes, adds elements to the array
3. Returns the new length of the array.
4. Adds an item to the end of our grocery list.
5. See Below.
*/
var groceries = ["Bread", "Butter", "Cheese"];
groceries.push("Milk");
// Adds milk to the array and returns 4 (length of the new array)

/*
POP
1. Removes element from end of array.
2. It changes the length of the array by removing an item.
3. Returns the item removed (more specifically just returns the last item of the array).
4. When you need to remove an element from an array. Assuming you are buying things from the end of the array...
5. See Below
*/
var groceries = ["Eggs", "Milk", "Cheese"]
groceries.pop();
// Returns Cheese

/*
SHIFT
1. Removes element(s) to the beginning of the array
2. Yes, adds elements to the array
3. Returns the new length of the array.
4. Add two new students to a class.
5. See Below.
*/
var customers = ["customer01", "customer02", "customer03"];
// Removes customer01 from the customers array and sets "firstCustomr" to that value.
var firstCustomer = customers.shift();
// should output "customer01 has been served."
console.log(`${firstCustomer} has been served.`);

/*
UNSHIFT
1. Adds elements to the beginning of the array
2. Yes, adds elements to the array
3. Returns the new length of the array.
4. Add two new students to a class.
5. See Below.
*/
var studentList = ["Levi", "Ashley", "Ben"];
var amountOfStudents = studentList.unshift("Seth", "Theron");
// adds to the beginning of the array, specifically returns the new length of the array (5)
console.log(`There are now ${amountOfStudents} students in this class.`);
// should output "There are now 5 students in this class."

/*
SORT
1. Sorts the elements of an array "in place", default order is according to string unicode points. \n
So essentially all elements are treated as strings and organized alphabetically as such (including numbers)
2. Yes, it sorts the array in a specified order.
3. Returns the new array.
4. Organize a list of names alphabetically.
5. See Below. First example is without a compare function, second is with compare function that reverses the alphabetical order.
*/
var listOfNames = ["Zed", "Harrison", "Billy", "George"];
listOfNames.sort();
console.log(listOfNames);
// Outputs the newly sorted array, which is organized alphabetically

// Using a function to organize a line from "Africa" by Toto in REVERSE alphabetical order
var lyrics = ["I", "miss", "the", "rains", "down", "in", "Africa"];
lyrics.sort(function(first, second) {
    // Creates variables with the uppercase words stored so that they are organized correctly according to their unicode code points
    var firstWord = first.toUpperCase();
    var secondWord =  second.toUpperCase();
    // If the first element is "less" than the second one it comes first
    if (firstWord < secondWord) {
        return 1;
    }
    // If the first element is "greater" than the second one it comes last
    if (firstWord > secondWord) {
        return -1;
    }
    // Otherwise they are left in the same order
    return 0;
});

/*
CONCAT
1. CONs a CAT into merging two or more arrays. Can also concatenate values.
2. Doesn't actually change the arrays, simply makes a new one.
3. Returns the new combined array.
4. You and your wife have two shopping lists and want to condense them into one.
5. See Below.
*/
// To explain object references, when you call concat it copies a reference to the original elements in the array so if those original elements change so will the concatted array?
var husbandList = ["protein", "eggs", "twinkies"];
var wifeList = ["salad", "jewelry", "mirror"];
var newShoppingList = wifeList.concat(husbandList);
// Returns a new array that has all of the elements of wifeList and husbandList in it. (and in that order)

/*
forEach
1. Executes a function for every element in an array.
2. Does not change the array.
3. Returns whatever you set the function to return.
4. For every student on a waitlist, send out an email. Pretending that console.log is actually magically putting that in an email and sending it.
5. See Below.
*/
var waitList = ["Laight Seinup", "Proke Rastinator", "George Clooney"];
waitList.forEach(function(name) {
    console.log(`Dear ${name},`);
    console.log("We're sorry to inform you that the class is full and that there is no more room.\nPlease drop the class.\n");
});

/*
INCLUDES
1. Determines if an array includes the paramter element
2. Does not change the array.
3. Returns true or false based on whether or not the array includes that element.
4. Check to see if a specific course is included in a list of courses.
5. See Below.
*/
var courseList = ["CHEM101", "CS124", "FDMAT108"]
if (courseList.includes("CS124")) {
    console.log("Yes, CS 124 is offered in this list of courses.")
} else {
    console.log("No, CS 124 is not offered in this list of courses.")
}
// if this list contains "CS124" it will say "Yes, etc. etc."

var queryList = [];
courseList.forEach((course) => course.includes("CS") ? queryList.push(course) : '');
// Just a little test to see if any of the items in the array contain "CS"

/*
EVERY
1. Tests if every element in an array passes a given test provided within a function
2. Does not change the array.
3. Returns true or false based on whether or not the array element(s) pass the test.
4. Check to see if every "grade item" has received above a 70% grade
5. See Below.
*/
var grades = [73, 80, 99, 100];
grades.every(function(e) {
    return e > 70;
});
// Checks if every element is greater than 70 (should return true)

/*
SOME
1. Tests to see if at least one element passes the test.
2. Does not change the array.
3. Returns true or false based on whether or not at least one array element passes the test.
4. Check to see the ages of the members of a YSA branch to see if any are older than 31.
5. See Below.
*/
var members = [{name: "Levi", age: 23}, {name: "George", age: 32}, {name: "Daniel", age: 25}];
if (members.some(element => element.age > 30)) {
    console.log("Someone in this group needs to be kicked out of the YSA");
} else {
    console.log("Everybody is still young and not a menace to society.")
}
// Checks if at least one of the ages is above 30, if so prmopts removal.
// Could use includes or more complicated code to find which exact member needs to be removed.

/*
FILTER
1. Creates a new array of all elements that pass a designated test.
2. Does not change the array.
3. Returns the new array created by filtering through the old one
4. Filters through the list of classes to find a specified class, number, department (cs, sci, etc.)
5. See Below.
*/
var classes = ["chem101", "cs124", "fdmat108", "fdsci101", "cs235"];
var result = classes.filter(function(query) {
    // Also here is an example of using the includes method with specific elements versus a whole array.
    return query.includes("cs");
});

// Same thing with arrow functions
var result = classes.filter((query) => query.includes("cs"));
// Returns cs124 and cs235

/*
MAP
1. Creates a new array with each element being returned from a specified function
2. Does not change the array.
3. Returns the new array created by applying the specified function to each element
4. Curves everybody's grade by adding more points (5 to be specific) to each of their scores.
5. See Below.
*/
var scores = [90, 77, 42, 89, 80, 100];
var curvedScores = scores.map(score => score + 5);
// Adds five to each element in the array. Stores in curvedScores

/*
REDUCE
1. Applies a function to each element and gives you the result at the end
2. Does not change the array.
3. Returns a single result of applying a function on each element (e.g. adding each element together)
4. You have multiple classes and their sizes and you want to know how many students are enrolled in total.
5. See Below.
*/
// Has starting accumulator value. Works!
var classSizes = [{course: "chem101", size: 40}, {course: "fdmat108", size: 80}, {course: "cs124", size: 32}, {course: "fdsci101", size: 75}];
var totalStudents = classSizes.reduce((total, course) => total + course.size, 0);

// Does not have starting accumulator. Does NOT work. Takes first item of array as a whole object and thus concatonates the rest of class sizes as strings.
// Results in [object Object]803275
var classSizes = [{course: "chem101", size: 40}, {course: "fdmat108", size: 80}, {course: "cs124", size: 32}, {course: "fdsci101", size: 75}];
var totalStudents = classSizes.reduce((total, course) => total + course.size);

//
//--
//----
/* ---*---*---*---EXTRA ARRAY METHODS---*---*---*--- */
//----
//--
//

/*
SPLICE
1. Can remove, replace, or add elements to an array.
2. Changes by removing/adding elements.
3. Returns an array containing the deleted elements.
4. Oh no! Somebody messed up the countdown for a our world-destruction device. The splice function will fix the countdown in the array.
5. See Below. Replacing the middle element, 6, with 3 so the countdown goes properly.
*/
var countDown = [5, 4, 6, 2, 1];
countDown.splice(2, 1, 3);
// Replace the middle element, 6, with 3

/*
indexOf
1. Returns the index at which a specified element is.
2. Does not change the array.
3. Returns the index of specified element, -1 if the element is not found.
4. You have a list of buttons and you want to find out the index of the fastForward button. You can then deal with this index/element individually later.
5. See Below.
*/
var buttonNames = ["start", "stop", "pause", "fastForward", "rewind"];
var forwardIndex = buttonNames.indexOf("fastForward");
// Saving that button as an index, we can use a splice function to replace it with "forward"
buttonNames.splice(forwardIndex, 1, "forward");

/*
JOIN
1. Creates new string by concatenating all of the elements of the array, separated by a specified parameter.
2. Does not change the array.
3. Returns a string of the concatenated elements.
4. Here are a list of superheroes that you wanted to display in a pretty format.
5. See Below.
*/
var superHeroes = ["Spiderman", "Ironman", "Hulk", "Thor"];
console.log((superHeroes).join(", "));