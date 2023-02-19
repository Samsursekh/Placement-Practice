// 1. function Statement or function declaration
// => function starts with function keyword followed by name and body
function name(params) {
  console.log("function statement");
}

// 2. function Expression
// => treating function as a value ,just like other variables in javascript
// => it undergoes thro hosting
var b = function () {
  console.log("function expression");
};

// 3.  ANONYMOUS FUNCTION
// function(){console.log('anonymous')}

//
// 4. NAMED FUNCTION EXPRESSION
// => a function expression with a named function
var c = function xyz() {
  console.log("named function");
};

//5. DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS
function diff(param1, param2, param3) {
  // parameters
  console.log("first");
}

diff(12, "shridhar", 43); // arguments

// 6. FIRST CLASS FUNCTION
// => ability of these functions to use as an value and assign it to a variable and can be passed into another and can be returned out of another functions this ability all together is called as FIRST CLASS FUNCTION

let a = function (paramfun) {
  // function like variable
  return function xyz() {
    // return function
    console.log("inner functions");
  };
};

let person = function () {
  console.log("first");
};
a(person); // function as argument

// ARROW FUNCTION
// => new ECMAscript 2015 or ES6 syntax
let s = () => {
  console.log("arrow function");
};
