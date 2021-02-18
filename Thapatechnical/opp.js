// Object Oriented Javascript



// What is Object Literal ?
// Object literal is simply a key: value pair data structure. Storing variables and functions together in one container, we can refer this as an Objects.



// How to create an Object?


// 1st way

// let bioData = {

//     myName: "Nadia Islam",
//     myAge: 23,

//     getData: function() {
//         console.log(`My name is ${bioData.myName}`);
//         console.log(`My age is ${bioData.myAge}`);
//     }
// }

// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();



// 2nd way no need to write functions as well after ES6.

// let bioData = {
//   myName: 'Nadia Islam',
//   myAge: 23,

//   getData () {
//     console.log(`My name is ${bioData.myName}`)
//     console.log(`My age is ${bioData.myAge}`)
//   },
// }
// bioData.getData();





//  What if we want object as a value inside an Object.

// let bioData = {
//   myName: {
//       realName: 'Nadia',
//       channelName: 'My learning process',
//   },
//   myAge: 23,

//   getData: function () {
//     console.log(`My name is ${bioData.myName}`)
//     console.log(`My age is ${bioData.myAge}`)
//   },
// };

// console.log(bioData.myName.channelName);
// bioData.getData();








// What is 'this' Object?
// The defination of 'this' object is that it contains the current context. The 'this' object can have different values depending on where it is placed.


// for example 1   Questions? what is context here?
//console.log(this);
// it refers to the current context  and that is  window object.



// example 2
// function myName () {
//     console.log(this); // still a window object, which is global.
// }
// myName();



// example 3

// let myNames = "nadia";
// function myName() {
//     console.log(this.myNames); // due to global object myNames, it is global object.
// }





// example 4

// const obj = {
//     myAge: 26,
//     myName() {
//         console.log(this.myAge); // this points to 'obj' properties 
//     }
// }
// obj.myName();







//  example 5
// this object will not work with arrow functions because arrow function is bound to class


// const obj = {
//     myAge: 26,
//     myName: () => {
//         console.log(this); // it gives us window object.
//     }
// };
// obj.myName();





// example 6

// let biodata = {
//     myName: {
//         realName: 'Nadia Islam',
//         channelName: 'I am bored',
//     },

//     myAge: 24,
//     getData() {
//         console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
//     }
// }
// biodata.getData();












