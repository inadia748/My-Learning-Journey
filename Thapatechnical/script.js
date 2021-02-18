// Values and Variable in Javascript


//var myName = "Nadia Islam";
//var myAge = 32;
//console.log(myName, myAge);

//var isNadia = true;




// Data Types in Javascript.

// console.log(typeof myName);
// console.log(typeof myAge);
// console.log(typeof true);
// console.log(typeof isNadia);





// Challenge Time


//console.log(10 + "20"); // 1020

//console.log( 9 - "5"); // 4,  Number and String, it is a bug.

//console.log("Java" + "Script"); // JavaScript

//console.log("Nadia" - "Islam"); // NaN

//console.log(" " + 0); // 0

//console.log(true + true);  // 2, In javascript, 1 represent true. thats why it is 2.

//console.log(true + false); // 1, In javascript , 1 represent true and 0 represent false. thats why it is 1.

//console.log(false - true); // -1, In javascript, 0 represents false and 1 represents true. Thats why it is -1.










// Interview Questions 1, Difference between null vs undefined.

//var iAmUseless = null;

//console.log(iAmUseless); // null

//console.log(typeof (iAmUseless)); // object, it is a bug. it cannot be a object.

//var iAmStandby;
//console.log(iAmStandby); // undefined
//console.log(typeof iAmStandby); // undefined


// Interview Question 2, What is NaN?
// In other words, it is a variable  in variable scope.
// The initial value of NaN is Not- a Number.

//var myPhoneNumber = 987643210;
//var myName = "Nadia Islam";
//console.log(myPhoneNumber);
//console.log(myName);
//console.log(isNaN(myPhoneNumber)); // false
//console.log(isNaN(myName)); // true





// Challenge time


//console.log(NaN === NaN); // false,   
//console.log(Number.NaN === NaN); // false
//console.log(isNaN(NaN)); // true
//console.log(isNaN(Number.NaN)); // true
//console.log(Number.isNaN(NaN)); // true













// Expressions and Operators


console.log(20 + 5);


// Assignment Operators
// An assignment assigns a value to its left operand
// based on the value of its right operands.
// The simple assignment operator is equal (=)

var x = 5;
var y = 5;

console.log(`is both the x and y are equal or not: ${x === y}`); // is both the x and y are equal or not: true
console.log(x === y); // true




// Arithmetic Operators
// An arithmetic operator takes numerical values.
// (either literals or variable) as heir operand and returns a single numerical value.

console.log(3 + 3); // 6
console.log((10 - 5)); // 5
console.log(20/5); // 4
console.log(5 * 5); // 25
console.log("Remainder operator " + 81%8); // 1





// Increment and Decrement Operators
// Operators: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example , x++), the increment operator increments and returns the value before incrementing.

//var num = 15;

//var newNum = num++ + 5; // (num + 5)

//console.log(num); // 16
//console.log(num++); // 16
//console.log(newNum);//20



// Postfix increment operator means the expression is evaluated
// first using the original value of the variable and then the variable is incremented.





// Prefix increment operator means the variable is incremented first and then the expression is evaluated using the value of the variable.


// If used prefix, with operator before operand (for example, ++x).
// The increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = ++num + 5 ;
console.log(num); // 16
console.log(newNum); // 16 // 21



// Decrement

var num1 = 15;
var newNum1 = num1-- + 5;
console.log(num1); // 14
console.log(newNum1); // 20

var num2 = 15;
var newNum2 = --num2 + 5;
console.log(num2); // 14
console.log(newNum2); // 19










// Comparison operators

// A comparison operator compares its operands and returns a logical value based on whether the comparison is true.


var a = 30;
//var b =  //30 //10;
var b = 10;

// equal
console.log(a == b); // true// false 


// Not equal
console.log( a != b); //false // true


// greater than (>)
console.log( a > b); // true
console.log( a >= b); // true

// less than (<)
console.log( a < b); // false
console.log( a <= b); // false





// Logical operators
// Logical operators are typically used with Boolean (logical) values; when they are, they are returned with a Boolean value.

var c = 30;
var d = -20;







// The logical AND (&&) operator for a set of operands is true if and only if all of its operands are true.

console.log(c > d); // true
console.log(c > d && d > 0); // false
console.log( c > d && d > -50 && d < 0); // true




// The Logical OR ( || ) operator for a set of operands is true if and only if one or more of its operands is true.

console.log((c > d) || ( c > 0) || (c < 0)); // true




// The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.


console.log( (a > 0) || ( b < 0)); // true
console.log( ! ((a > 0) || (b < 0))); // false
console.log(!true); // false
console.log(!false); // true









// String Operators

// Concatination operator (+) concatenates two string values together returning another string that is the union of the two operand strings.

console.log("hello world"); // hello world
console.log("hello" + " world"); // hello world


var myName = "Nadia";

console.log(myName + " Islam"); // Nadia Islam





// Challenge time

console.log( 3 ** 3); // 27
console.log(3 + "Nadia"); // 3Nadia




// Swapping 2 number

//var p = 20;
//var q = 35;
//var temp = q; // temp = 35
//q = p ; // q = 20
//p = temp;
//console.log(p, q);
//console.log("The value of p is:" + p); // The value of p is:35
//console.log("The value of q is:" + q); // The value of q is:20





// Swapping 2 numbers without using third variables.
var p = 5;
var q = 10;

p = p + q; // p = 15
q = p - q; // q = 5
p = p - q; // p = 10

console.log("The value of p is: " + p);
console.log("The value of q is: " + q);




// Interview Questions, What is the difference between '==' and '==='

// '==' checks the value and '===' checks  the value and the data type of that value also.

var num1 = 5;
var num2 = '5';

console.log(typeof (num1));
console.log(typeof (num2));

console.log(num1 == num2); // true
console.log(num1 === num2); // false















// Conditional Statements



// If...Else
// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed


var tomr = "sunny";

if (tomr === "rain") {
    console.log("take a raincoat");
} else {
    console.log("No need to take raincoat");
}



// Challenge

// If the given year is a leap year or not

var year = 2020;
//debugger;
if (year % 4 === 0) {
    if (year % 100 === 0) {
       if (year % 400 === 0) {
           console.log("The year " + year + " is a leap year");
       } else {
           console.log("The year " + year + " is not a leap year");
       }
    } else  {
        console.log("The year " + year + " is a leap year" );
    }
} else {
    console.log("The year " + year + " is not a leap year");
}



// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript, they are: 0, "", undefined, null, NaN, false** is  false anyway

if (score = 0) {
    console.log('Omg, we loss the game')
} else{
    console.log('Yay, We won the game')
}






// Conditional (ternary) operator.

// The conditional (ternary) operator is the only javascript operator that takes three operands.

// variablename = (condition) ? value1: value2;


//var age = 19;
// if (age >= 18) {
//     console.log("you are eligible to vote");
// } else {
//     console.log("you are not eligible to vote");
// }

var age  = 17;
console.log(( age >=18 )? "You are eligible to vote": "You cannot vote");










// switch Statements
// Evaluate an expression, matching the expression 's value to a case clause, and executes statements associated with that case.
// break
// Terminates the current loop, switch, or label statements and transfers program control to the statement following the terminated statement.




// 1st without break statement.
// Find the Area of circle, triangle and rectangle?

// var area = "triangle";
// var PI = 3.142, l = 5, b = 4, r = 3; 


// Using 'If...elseif'
// if (area == "circle") {
//     console.log("The area of the circle is "+ PI * r**r);
// } else if(area == "triangle") {
//     console.log('The area of the triangle is ' + (l * b)/ 2);

// } else if(area == "rectangle") {
//     console.log('The area of the circle is ' + l * b) ;
// } else {
//     console.log("please enter the valid data");
// }


// using Switch
// switch (area ) {
//     case 'circle': 
//          console.log('The area of the circle is ' + PI * r ** r);
//         break;
//     case 'rectangle':
//          console.log('The area of the circle is ' + l * b);
//         break;
//     case 'triangle':
//         console.log('The area of the triangle is ' + (l * b) / 2);
//         break;
//     default:
//         console.log('please enter the valid data');
// }













// While Loop Statement.
// The while statements creates a loop that executes a specified statement as long as the test condition evaluates to true.


// var num = 0;

// Block scope
// while(num <= 10) {
//     console.log(num);
//     num++;
// }




// Do-While Loop Statements
// They will check the conditions later and will directly executes the output without following the conditions.


// var num = 0;

// do {
//     //debugger;
//     console.log(num);
//     num++;
// } while(num <= 10);









// for loop

// for (intialize; condition; iteration) { // Code to be executed};



for (var num = 1; num <=10; num++) {
    console.log(num);
}





// Challenges

// Javascript program to print table for a given number (8,9,12,15) using for loop



//var multiplier = 8;

for (var num = 1; num <=10; num++) {
    var tableOf = 8;
    console.log(tableOf + ' * ' + num + " = " + tableOf * num);
}





















// Functions in Javascript

// A javascript function is a block of code designed to perform a particular task



// Function Defination

// Before we use a function, we need to define it.

// A function defination (also called a function declaration, or a function statements) consists of the function keyword, followed by:     1) The name of the function.   2) A list of parameters to the function, enclosed in parenthesis and separated by commas.
// The javascript statements that define the function, enclosed in a curly braces.

// function functionName() {      }




// var a = 10;
// var b = 20;

// var sum = a + b;
// console.log(sum);


// Calling Functions
// Defining a function does dont execute it. A Javascript is executed when "something" invokes it or calls it.

// function sum() {
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }

// sum(); // defined






// What is the difference between function parameters and function arguments.
// Functions parameters are the names listed in the function 's defination.
// Function arguments are the real values passed  to the function.



// function sum(a = 10, b = 3) {
//     var total = a + b;
//     console.log(total);
// }

// sum();
// sum(20, 30);
// sum(540,50);






// Interview Questions.

// Why use Functions?

// You can reuse code: Define the code once, and use it many times. You can use the same code many times with different arguments to produce different results 
// or A function is a group of reusable code which can be placed anywhere in your program. This eliminates the need of writing the same code again and again.




// DRY--> Do not repeat yourself



// Function Expressions.
// " Function expressions simply means create a function and put it into a variable"

// function sum(a = 5,b = 1) {
    
//     return total = a + b;
// }

// Return Keyword
// When Javascript reaches a return statement, the function will stop executing. Functions often compute a return value. The return value is "returned" back to the caller;

// var funExp = sum(5, 10);
// console.log(" The sum of two numbers is "+ funExp);







// Anonymous Function
// A function expression is similar to and has the same syntax as a function declaration One can define "named" function expressions (where the name of expression might be used in the call stack for example ) or "anonymous"  function expressions.


// var funExp = function(a = 5, b = 7) {
//     return total = a + b;
// }

// console.log(funExp(5,15));
// var sum = funExp(15, 15);
// var sum1 = funExp(20, 15);

// console.log('The sum of two number is ' + sum);
// console.log(sum > sum1);




// Template literals

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${num * tableOf}`);
// }









// Arrow Functions
// Normal way of writing functions



// function sum() {
//     let a = 5, b = 6;
//     let total = a + b;
//     return  `The sum of the two numbers is ${sum}`;
// }

// console.log(sum());












// ECMASCRIPT


// 1. Let, Const , Var

// let and const is block scope while var is function scope. You cannot change in const.


// Default Parameters
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// function mult(a = 3, b = 5) {
//     return a * b;
// }
// console.log(mult(5, 2));
// console.log(mult(10));




// Arrow functions

// Normal way of writing functions

// console.log(sum());

// function sum() {
//     let a = 5, b = 6;
//     let sum = a + b;
//     return `The sum of the two numbers is ${sum}`;
// }

// Converting it into arrow function

// const sum =  () => {
//     let a = 5, b = 10;
//     let sum = a + b;
//     return `The sum of the two number is ${sum}`;
// }

// console.log(sum());


// const sum = () => `The sum of the two number is ${(a = 1) + (b = 5)}`;











// Arrays in Javascript
// Storing multiple values in one variable.

var friend1 = 'Ramesh';
var friend2 = 'Arjun';
var friend3 = 'Vishal';


var friends = ['Ramesh', 'Arjun', 'Vishal'];
console.log(friends);

var names = ['Vinod', 'Arjun', 'Ali', 'Zanab'];
console.log(names);


var myNumbers = new Array(23,15, 19, 2020);
console.log(myNumbers);




// Traversal of an Array
// If we want to get the single data at a time and if we want to change the data.

var myColleagues = ['Xavier', 'Harami', 'Jaime', "Lisa", "Jonas", "Alexia"];

// console.log(myColleagues[3]);
// console.log(myColleagues[1]);
// console.log(myColleagues[myColleagues.length - 1]); // last element of an array.


// if we want to chect the length of an elements of an array.

//console.log(myColleagues.length);




// Traversal in the array
// We use for loop to navigate.

// Difference between for in loop and for of loop


// for (let i = 0; i < myColleagues.length; i++) {
//     console.log(myFriends[i]);
// }

// for (let elements in myColleagues) {
//     console.log(elements);
// }

// for in loop gives you the index number




// for of loops gives you only the elements of your array.
// for (let elements of myColleagues) {
//     console.log(elements);
// }


// Array.prototype.forEach()
// Calls a function for each element in the array.
// You cannnot 'break' in forEach loop


// myColleagues.forEach(function (element, index, array) {
//     console.log(element + " index: " + index + "  " + array);
// }) ;


// myColleagues.forEach((element, index, array) => {
//     console.log(element + ' index: ' + index + '  ' + array);
// });








// Searching and Filter in an Array.

//Array.prototype.indexOf()
// Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search an element from the 0th index number.

var myFriendsNames = ['Sarah', "Oishi", "Rabeya", "Samia", "Irfan", "Rony", "Samia"];

//console.log(myFriendsNames.indexOf("Samia", 4));



// Array.prototype.lastIndexOf()
// Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element last ot first

console.log(myFriendsNames.lastIndexOf('Samia', 5))




// Interview Question: difference between indexOf and lastIndexOf, both of returns the index of an element, indexOf does forward search, lastIndexOf does backward search.





// Array.prototype.includes()
// Determines whether the array contains a value, returning true or false as appropriate.
// It does forward search

console.log(myFriendsNames.includes('Samia', 3));






// Array.prototype.find()
// arr.find(callback(element[, index[,array]])[, thisArg) returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. Only problem is that it returns only one element.

const prices = [200, 300, 350, 400, 450, 500, 600];

// const findElem = prices.find((currVal) => {
//    // return currVal < 400;
// });

// console.log(findElem);

// In shorter way again, const findElem = price.find((currVal) => currVal < 400)


// the above 'findElem can be written in one line.
//console.log(  prices.find((currVal) => currVal < 400));






// Array.prototype.findIndex()
// Returns the found index in the array, if an element in an array satisfies the testing function, or -1 if not found.

//console.log(  prices.findIndex((currVal) => currVal < 400));





// Array.protype.filter()
// Returns a new array containing all elements of the calling array for which the provided filtering function is true.


// const newPriceTag = prices.filter( (element, index) => {return element > 1400 });
// console.log(newPriceTag);






//How to sort and compare an array.


// Array.prototype.sort()

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending , built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov', 'April'];

// console.log(months.sort());


// const array1 = [1, 30, 4, 21, 100000, 99];

// console.log(array1.sort());

// However, if the numbers are sorted as strings, '25' is bigger than '100', because '2'  is bigger than '1'. Because of this, the sort() method will produce an incorrect result when sorting number.







// Performing CRUD

// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the new length of an array.

const animals = ['dogs', 'cats', 'cows'];
// const count = animals.push('chicken');
// console.log(count);
// animals.push('monkeys', 'rooster', 'tiger');
// console.log(animals);



// Array.prototype.unshift()
// The unshift() method adds one or meore elements at the start of an array and returns the new length of an array.

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);


// Another example

// const myNumbers1 = [1, 2, 3, 5];

// myNumbers1.unshift(4, 6);
// console.log(myNumbers1);






// Array.prototype.pop()

// The pop() method removes the last element from an array and returns that array. This method changes the length of an array.


// const plants = ['brocolli', 'cauliflower', 'kale', 'tomato', 'carrot'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);




// Array.prototype.shift()
// the shift() method removes the first element from an array and returns that array. This method changes the length of an array.

// const plants = ['brocolli', 'cauliflower', 'kale', 'tomato', 'carrot'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);







// Challenge time

// 1. Add December at the end of an array.
// 2. What is the return value of splice method?
// 3. Update march to March(update)
// 4. Delete June form an array.


//const months = [ 'Jan', 'march', 'April', 'June', 'July'];

// Array.prototype.splice
// it adds or removes elements from an array.

//1.
//const newMonth = months.splice(4, 0, 'Dec'); // starting from 4th position and no elements to delete.
//const newMonth = months.splice(5, 0, 'Dec');
// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);

//2.
//console.log(newMonth); // gives an empty array because it only shows deleted element in an array.


// 3. 

// const indexOfMonth = months.indexOf('march');
// console.log(indexOfMonth);
// if (indexOfMonth !== -1) {
//     const monthUpdate = months.splice(indexOfMonth, 1, 'March');
//     console.log(months)
// } else {console.log('No such data found');}

// 4:
// const indexOfMonth = months.indexOf('June');
// console.log(indexOfMonth);

// if (indexOfMonth !== -1) {
//     const monthUpdate = months.splice(indexOfMonth, 1);
//     console.log(months);
//     console.log(monthUpdate);
// } else {
//     console.log('No such data is found');
// }


// to delete elements in an array after 'April'.

// const indexOfMonth = months.indexOf('April')
// console.log(indexOfMonth)

// if (indexOfMonth !== -1) {
//   const monthUpdate = months.splice(indexOfMonth, Infinity);
//   console.log(months);
//   console.log(monthUpdate);
// } else {
//   console.log('No such data is found')
// }











//  Map and Reduce Method.

// Array.prototype.map()
// let newArray = arr.map(callback(currentValue[, index[, array]]) // returns element for the newArray, after executing something)
// Returns a new array containing the results of calling a function on every element  in this array. It returns array without mutating the original array.


//const array1 = [1, 4, 9, 16, 25];

// num > 9

// let newArr = array1.map( (currElem, index, arr)=> { return currElem > 9});

// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currElem, index, array) => { return `Index no = ${index} and the value is ${currElem} belong to ${array}`});
// console.log(newArr);


// let newArrfor = array1.forEach( (currElem, index, arr) => { return `Index no= ${index} and the value is ${currElem} belong to ${arr}`});
// console.log(newArrfor);





// Reduce Method.

// flatten an array means to convert the 3d or 2d array into a single dimensional array.

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: Accumulator, CurrentValue, CurrentIndex, SourceArray.

// Out of 4 subject, 1 subject mark is known by you that is it is 7 and the rest 3, arr = [5, 6, 2]; subject is added by the teacher, how to add that 1 subject.

// let arr = [5, 6, 2];

// let sum = arr.reduce( (  accumulator,currElem, index, arr) => {
//     return accumulator += currElem;
// }, 7);
// console.log(sum);




// How to flatten an array. Converting 2d and 3d array into one dimensional array.

const arr = [['zone_1', 'zone_2'], ['zone_3', 'zone_4'], ['zone_5', 'zone_6'], ['zone_7', ['zone_8', 'zone_9']]];

let flatArr = arr.reduce((accumulator, currentValue)=>{ 
    return accumulator.concat(currentValue);
});

console.log(flatArr);










// Challenges
//1. Find the square root of each element in the array.

// let arr = [25, 36, 49, 64, 81];

// let arrSqroot = arr.map( (curElm) => { return Math.sqrt(curElm);});

// console.log(arrSqroot);


//2. Multiply each element by 2 and return those elements which are greater than 10.
//3. Now, find the average of those elements.

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map( (curElm) => { return curElm * 2}).filter( (curElem) => {return curElem > 10}).reduce( (accumulator, currElem, index, array) => {  accumulator+= currElem; return accumulator/arr.length});

// console.log(arr);
// console.log(arr2);


