// Hoisting in Javascript

// We have a creation phase and an execution phase. Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of the scope before the code executes.


// For example:

console.log(myName);
var myName;
myName = 'thapa';

// // How it will be in the output during creation phase.
// var myName = undefined;
// console.log(myName);
// myName = 'thapa';


// In ES2015, hoisting is avoided by using the 'let' keyword instead of var. (The other difference is that variables declared with 'let' are local to the surrounding block, not the entire function).










//  What is Scope Chain and Lexical Scoping in Javascript?

// // The scope chain is used to resolve the value of variables in JS.

// // scope chain in js is lexically defined, which means that we can see what the scope chain will be looking at the code.

// // At the top, we have the Global Scope, which is the window Object in the browsers.


// Lexical Scoping means Now,  the inner function can get access to their parent functions variables  but the vice-versa is not true. 

// For example:

let a = 'Hello guys'; // global scope.

const first = () => {
    let b = " How are you?";
    
    const second = () => {
        let c = 'Hi, I am fine, thankyou ';
        console.log(a + b + c);
    }
    second(); // it will not work, not be able to access variable 'c' because it is in second() function, which is an inner function.
}

first();








// What is closure in Javascript?

// A closure is the combination of a function bundled together (enclosed ) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an other function 's scope from an inner function.

// In javascript, closures are created everytime a function is created, at function creation time


// For example:

const outerFunc = (a) => {
    let b = 10;
    const innerFunc = () => {
        let sum = a + b;
        console.log(`The sum of two numbers is: ${sum}`);
    }
    //innerFunc();
    return innerFunc;
}
let checkClosure =  outerFunc(5);
console.log(checkClosure);
console.dir(checkClosure);
checkClosure();
//outerFunc(5);









// Interview Questions: what is the difference between synchronous and asynchronous javascript?



// Synchronous Javascript

// const fun2 = () => {
//     console.log(`Function 2 is called`);
// }

// const fun1 = () => {
//     console.log(`Function 1 is called`);
//     fun2();
//     console.log(`Function 1 is called again `);
// }
// fun1();



// Asynchronous Javascript Program

const fun2 = () => {
   setTimeout ( ()=> {
        console.log(`Function 2 is called`);
   }, 2000)
};

const fun1 = () => {
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is called again`);
}

fun1();








// Event Loops in Javascript, check in other youtube videos











// Function Currying
// Currying is a technique of evaluating functions with multiple arguments, into a sequence of function with single argument.


// Interview Questions: Output of sum(5)(3)(8);

// function sum (num1) {
//     //console.log(num1);
//     return function(num2) {
//         //console.log(num1, num2);
//         return function(num3) {
//             console.log(num1 + num2 + num3);
//         }
//     }
// }

// the above code can be written in one line


const sum = (num1) => {
   (num2) => {
        (num3) => {
            console.log(num1 + num2 + num3);
        }
    }
}
sum (5) (3) (8);








// Callback Hell

setTimeout( ()=> {
    console.log(`1️⃣ works is done`);
    setTimeout (()=> {
        console.log(`2️⃣ work is done`)
    }, 1000);

        setTimeout(() => {
          console.log(`3️⃣ work is done`)
        }, 1000);

    setTimeout(() => {
      console.log(`4️⃣ work is done`)
    }, 1000);

    setTimeout(() => {
      console.log(`5️⃣ work is done`)
    }, 1000);

    setTimeout(() => {
      console.log(`6️⃣ work is done`)
    }, 1000);

}, 1000);





// AJAX call using XMLHttprequest.




