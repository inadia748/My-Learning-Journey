// Destructuring in ES6


// The destructuring assignment syntax is a Javascript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.



// Array Destructuring

// position matters a lot in array destructuring.
// we can add values too.

//const myBioData = ['Nadia', 'Islam', 23];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

//let [myFName, myLName, myAge, myDegree="BSc"] = myBioData;
//console.log(myDegree);








// Object destructuring

// const myBioData = {
//     myFName: 'Nadia',
//     myLname: 'Islam',
//     age: 23,
// }

// let age = myBioData.age;
// let myFname = myBioData.myFName;
// console.log(myFname);
// console.log(age);

// let {myFName, myLname, myAge, myDegree="BSc"} = myBioData;
// console.log(myDegree);







// Object Properties

// we can now use Dynamic Properties

// Interview Question: How to get a dynamic data in an object.

// let myName = "Nadia Islam"
// const myBio = {
//     [myName]: 'Hello how are you',
//     [20 + 6]: "is my age",
// }
// console.log(myBio);



// no need to write key and value, if both are same.

// let myName = "Nadia Islam";
// let myAge = 26;

// const myBio = {
//     myName,
//     myAge,
// }









// Spread Operators


// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

// const myFavColors = [...colors, 'yellow', 'black'];
// console.log(myFavColors);



// Go to his youtube channels and check out object oriented javascript, rest operators.









// ES7

// 1. array include

// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// //const isPresent = colors.includes('red');
// const isPresent = colors.includes('purple');
// console.log(isPresent);


// 2. ** Exponential operator

// console.log(2**2);
// console.log(2**3);






// ES8 Features

// String.padding
// Object.values()
// Object.entries(), it gives array of an array.

//const message = "My name is Nadia";
//console.log(message);
//console.log(message.padStart(5)); // it does not work, the output is same as the message.
//console.log(message.padEnd(10)); // it does not work, the output is same as the message.

// inorder  for the above code to work

// const myName = "Nadia Islam".padStart(15);
// const myAge = "23".padEnd(10);
// console.log(myName);
// console.log(myAge);


// const person = {name: 'Red', age:87};
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));











// ES2018

// const person = {name: 'Fred', age: 87};
// const sPerson = {...person};
// console.log(sPerson);




// ES2019

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_9', 'zone_8']]
// ];

// console.log(arr.flat());
// console.log(arr.flat(2)); // depends on the level, for ['zone_9', 'zone_8'].






// ES2020

// 1:  BigInt

// let oldNum = Num.MAX_SAFE_INTEGER;
// console.log(oldNum);


//2. Nullish Coalescing

// const foo = null ?? 'default string';
// console.log(foo);



// ES2014

//"use strict";
// x = 3.14;
// console.log(x);

