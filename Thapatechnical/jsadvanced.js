
// Higher Order Function is a function which takes another function as an arguments is called Higher Order Function.

// Callback Function is a function which gets passed as an argument to another function is called call back function. A callback function is a function that is passed as an argument to be "called back" at a later time.

const add = (a, b) => {
    return a + b;
};

const subs = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a*b;
};

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
};

calculator(5, 2, add);



// Interview Questions , Difference between higher order function and call back questions.

