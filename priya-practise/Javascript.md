
# difference between call apply bind?
# what is rest operator?
# what is spread operator?
# what is the  difference betwwen []===[]
# Explain async await  
# what is promises ans its status?
# explain oops concept?
# 

#  what are javascript considered as single threaded language
- JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
- The call stack is the same as the stack data structure. Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO (first in last out).


# Q 1 – What is “use strict” and why?  
1.  The "use strict" directive was new in ECMAScript version 5. 
2.  It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. 
3.  The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
4.  With strict mode, you cannot, for example, use undeclared variables. 
5.  All modern browsers support "use strict" except Internet Explorer 9 and lower 
# Why Strict Mode? 
 Strict mode makes it easier to write "secure" JavaScript. 
 Strict mode changes previously accepted "bad syntax" into real errors. 
 As an example, in normal JavaScript, mistyping a variable name creates a new global 
variable. In strict mode, this will throw an error, making it impossible to accidentally create 
a global variable. 
 In normal JavaScript, a developer will not receive any error feedback assigning values to 
non-writable properties. 
 In strict mode, any assignment to a non-writable property, a getter-only property, a non-
existing property, a non-existing variable, or a non-existing object, will throw an error. 
 
 
# Q 2 – What is “this” keyword? 
 
 In JavaScript, the this keyword refers to an object. 
 Which object depends on how this is being invoked (used or called). 
 
The this keyword refers to different objects depending on how it is used: 
 
1. In an object method, this refers to the object.  
2. Alone, this refers to the global object.  
3. In a function, this refers to the global object.  
4. In a function, in strict mode, this is undefined.  
5. In an event, this refers to the element that received the event. Methods like call(), apply(), 
and bind() can refer this to any object. 
 
 
# Q 3 – What are different types in JavaScript? 
# 1] Primitive datatypes
- 1] Number: This data type is used to store numeric values, including integers, floats, and decimals. For example, 5, 3.14, -10, etc.
- 2] Null: This data type is used to represent a variable that has no value. For example, var x = null;
- 3] String: This data type is used to store text values, enclosed in quotes (single or double). For example, "Hello", 'world', "123", etc.
- 4] symbol: 
- 5] Boolean: This data type is used to store true or false values. For example, true, false.
- 6] bigint:
- 7] Undefined: This data type is used to represent a variable that has not been assigned a value. For example, var x;

# 2] Non primitive 

  -1] Object: This data type is used to store collections of related data or functionality. Objects have properties and methods. For example, var person = { name: "John", age: 30, sayHi: function() { console.log("Hi!"); } };


 # what is difference between float and doubble ==> 
 - The main difference between double and float data types is their precision. Double is a 64-bit floating-point data type, while float is a 32-bit floating-point data type. This means that double can represent larger and more precise values than float. However, double requires twice as much memory as float. In general, float is used when the precision is not critical, while double is used for more precise calculations.
 
  # Q 4 - What is == and === in JavaScript? 
 
- The main difference between the == and === operator in JavaScript is that  
- ==  operator check the  two value equal or not
- whereas the === operator compares the values as well as the data types of the operands. 
- For example, 5 == "5" would return true, while 5 === "5" would return false because one is a number and the other is a string. Similarly, 0 == false would return true because both are falsy values, while 0 === false would return false because they are of different types.
 

 
# Q 5 - What is NaN and how can we check for it? 
 
So, NaN is JavaScript stands for Not a Number and typeof(NaN) is a “number” 
 
There are some side effects checking if NaN is equal to NaN, so to avoid that we can make use of 
Object.is() 
Method to check if the two values are same. 
 
Object.is(NaN,NaN) 
 
It is helpfull because it covers even the corner cases like -0 === 0 // true (which should be false in 
this particular case) and it covers the NaN equality quirk as well. 
 
# Q 6 -  What are Scopes in JavaScript? 
 
Scope Determines the accessibility(visibility) of variables. 
- the area of a code where a variable, function or object is accessible.
 
# JavaScript has 3 types of scope: 
- 1.  Block Scope 
- 2.  Function Scope 
- 3.  Global Scope 
 
 
# Block Scope: 
 
 Before ES6 (2015), JavaScript had only Global Scope and Function Scope. 
 ES6 introduced two important new JavaScript keywords: let and const. 
 These two keywords provide Block Scope in JavaScript. 
 Variables declared inside a { } block cannot be accessed from outside the block: 
 
Example: 
{ 
  let x = 2; 
} 
// x can NOT be used here 
 
Variables declared with the var keyword can NOT have block scope. Variables declared inside a { } block 
can be accessed from outside the block. 
 
Example: 
{ 
 
  var x = 2; 
} 
// x CAN be used here 
 
# Function Scope:  
 
 JavaScript has function scope: Each function creates a new scope. 
 Variables defined inside a function are not accessible (visible) from outside the function. 
 Variables declared with var, let and const are quite similar when declared inside a function. 
They all have Function Scope: 
 
function myFunction() { 
  var carName = "Volvo";   // Function Scope 
} 
 
function myFunction() { 
  let carName = "Volvo";   // Function Scope 
} 
 
function myFunction() { 
  const carName = "Volvo";   // Function Scope 
} 
 
 
 
# Global Scope: 
 
 Variables declared Globally (outside any function) have Global Scope. 
 Global variables can be accessed from anywhere in a JavaScript program. 
 Variables declared with var, let and const are quite similar when declared outside a block. 
They all have Global Scope: 
 
var x = 2;       // Global scope 
let x = 2;       // Global scope 
const x = 2;       // Global scope 
 
# Q 7 - What is hoisting and how to avoid it? 
 
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the 
top of their scope before code execution. Inevitably, this means that no matter where functions  
and variables are declared, they are moved to the top of their scope regardless of whether their 
scope is global or local 
 
 
# Some ways to avoid hoisting are: 
•  Use let or const — As explained above, using let or const instead of var would throw an 
exception and not let the program run, hence helping catch the issue earlier. 
•  Use function expressions instead of function declarations 
 
An example of a function declaration: 
 
console.log(printRandom()); 
function printRandom() { 
   return "Print Random"; 
} 
 
The above function declaration will be hoisted and will print out Print Random. However, a 
function expression like the below snippet will not be hoisted and will throw an error: 
 
console.log(printRandom()); 
var printRandom = function () { 
   return "Print Random"; 
} 
 
Hoisting is a weird concept in JavaScript. It makes code unreadable and unpredictable. Hence, we 
should refrain from using it whenever possible by using the above methods.
# 11] what is difference for and forEach loop 
# 1] what is AJAX 
# 2] what is Jquery 

# paramerters and arguments
- whenerver you creating a function whaterveer you put over here is known as parameters (label and identifiers)
- whenerver you calling a function whaterveer you put over here is known as arguments


#  function statement / function decleration 

- function declartion is that a way of declare funaction 

a() // a is called
b() // type error
function a(){
    console.log("a is called")
}

a()

# function expression 
- function expression is nothing else  is act like as value 
var b = function(){
    console.log("b is called");
}
b()


# anonyms function 
- anonyms function is that function without name 
- it's a dependent function not use independently
- function (){

   }

# First Class Function 
 - the abillity to use function to be used as values is known as first class function in javascript.

- function  is first class citizens in javascript

- var b = function (param1){
    return function(){

    }
 }
 console.log(b()); 
console.log(xyz)  //reference error 

# Arrow function 
- Arrow functions were introduced in ES6.
- Arrow functions allow us to write shorter function syntax 
- limition of  Arrow functions should not be used this keyword and super keyword 
- This arrow function reduces lots of code and makes the code more readable.
- arrow functions do not have their own arguments and it uses the arguments from the outer function.
- It can be used similarly to the way you would use function expressions.

function a() => {

}




# callBack function =>
- callbackfunction is that passed a function inside a  another function as an argument 
- A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

- ex ==> 
function myFunction(callback) {
  // do some work here
  callback();
}
function myCallback() {
  console.log("The callback was called.");
}
myFunction(myCallback);

- In this example, we have two functions: myFunction and myCallback. myFunction takes a function as a parameter and then executes that function as a "callback" after it has done some work.

- In this case, we pass myCallback as the callback function to myFunction. When myFunction is called, it does some work and then executes the callback function. In this case, it calls myCallback, which simply logs a message to the console.

- So when we run myFunction(myCallback), the output would be: "The callback was called."



#  what is call back hell ? how callbacks work? 
- Callback hell is a term used to describe a situation where code contains multiple levels of nested callbacks. This can make the code difficult to read, understand, and maintain.

- The phenomenon which happens when we passed one by one multiple callbacks within a function is called a callback hell.

- The two problems with Call back are :
- 1. Call back hell : Here we pass one call back function into another and that call back into another, thus creating an unreadable and unmaintanable code. This is also known as pyramid of doom. 
- 2. Inversion of control : Here we pass call back into another function. This leads to loss of control of our code. Control moves to the other functon where we used call back.

- ex : const data = ["priya", "riya", "shreya"]
        api.createOrde(data, function(){
            api .proceedTopayment(function(){
                api.showOrderSummry(){
                    function({
                        api.updateWallet()
                    })
                }
            })
        })
       
       -The code defines an array of constant data containing three strings: "priya", "riya", and "shreya". The code then calls the "createOrde" function of an API object with this data as a parameter. The createOrder function takes a callback function as a second parameter.

    - Inside the createOrder function, the code calls the "proceedTopayment" function of the same API object with another callback function as a parameter.

    - Inside the proceedTopayment function, the code calls the "showOrderSummry" function of the API object with another callback function as a parameter.

    - Inside the showOrderSummry function, the code defines a function as a parameter which calls the "updateWallet" function of the API object.

    - Overall, the code is an example of callback hell where multiple nested functions are called with callback functions as parameters.


# how  event loop  works and node.js works?
- Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task. The event loop allows us to use callbacks and promises

- 1)In event loop all application code that is inside callback functions.(non-top-level code)

- 2)Node js is event-driven architecture.event emitted,event loops picks them up and callbacks are called.

- ex: ==> 

const funct2 = () => {
    setTimeout(() => {
        console.log("func2 is starting")
    }, 3000);
}

const func1 = () => {
    console.log('func1 is starting')
    funct2();
    console.log("func1 is ending");
}

func1();

- output ==> 
- func1 is starting
- func1 is ending
- func2 is starting


#  digram of event loop 

- 1] excution stack / call stack
- create a global wxcution context

- 2] web API 
- settimeout()
- DOM
- AJAX/API Calls

- 3] message queue

- 4] event loop

# what is the promise and give one example?

What is Promise?
- Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

- A container for a future value.

- A Promise is an object representing the eventual completion or failure of an asynchronous operation.

 - ex => 
  const promise = new Promise( (resolve, rejected) => {
    setTimeout(() => {
       resolve("promise resolved");   //promise resolved
     },5000);
  },
   (rejected) => {
   console.log("promise rejected")
 }
 );
 promise.then((value) =>
 console.log(value));


# what are the closures with examples 

- closures is that the function bundled together with lexical envirnoment is known as closures 

function outer(){
    var a=20;
    function inner(){
        console.log(a)
    }
    console.log(inner);
}
console.log(outer);



# Advantages of Closure:

- Module Design Pattern
- Currying
- Memoize
- Data hiding and encapsulation
- setTimeouts etc.
- event handlers and callback  - - functions, and in partial 

# Disadvantages of Closure:

- Over consumption of memory
- Memory Leak
- Freeze browser


# 6] higher order functions ? with an example 

 -  A Higher-Order function is a function that receives a function as an argument or returns the function as output.

  - ex => map, filter, reduce 

  # filter arr =>
  -  filter function is used to filter the value in an array. 
  -  The filter() method creates a new array filled with elements that pass a test provided by a function.
  -  The filter() method does not execute the function for empty elements.
  -  The filter() method does not change the original array.

let arr = [1,4,7,2,9,4,9,2,5]

  let filterarr = arr.filter((e) => {
    if(e%2==0){
        return true;
    }else{
        return false;
    }
  })
  console.log(filterarr, "filterArr")

   # map arr =>
   - map() transforms every element in an array individually and creates a new array.
   - map() loop through the elements allocates memory and stores return values by iterating main array

   let arr = [1,4,7,2,9,4,9,2,5]

  let maparr = arr.map((e) => {
  return e 
  })
  console.log(maparr, "mapArr")

  # forEach() =>

 - forEach() just loop through the elements. It's throws away return values and always returns undefined.The result of this method does not give us an output .

  let arr = [1,4,7,2,9,4,9,2,5]

  let forEacharr = arr.forEach((e) => {
  return e 
  })
  console.log(forEacharr, "forEachArr") //undefined

  # difference betweeen map and forEach ==> 
  - The forEach() method does not return a new array, whereas the map() method returns a new array. 
     The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.


 # reduce() =>
- Reduce is perfect for summarizing the total of an array.
- A good example of reduce operation is calculating the sum of an array, where the accumulative operation is the addition of items.
  let myarray = [1,4,7,2,9,4,9,2,5]
  - let reducefunc = myarray.reduce((accl, curr) =>accl+curr, 0);
  - let reducefunc = myarray.reduce((a,b) => a+b, 0)
  // 36 + 25 + 6 + 15 = 82
  console.log("reduceArray", reducefunc) //82


# setTInterval  and claearInterval=>
- The setTimeout() method executes a block of code after the specified time

- The setInterval() method calls a function at specified intervals (in milliseconds).

- setTimeout() calls a passed-in function once after a specified delay, while setInterval() invokes one continuously at a designated time. As JavaScript is a singly-threaded language, both methods allow your code to run asynchronously.

function printingnum(from, to){
   let curr = from;
   let timer  = setInterval(() => {
       console.log(curr);
       curr++;
       if(curr>to){
           clearInterval(timer);
       }
   }, 1000)
}
printingnum(0, 5)

function print(from, to){
    let curr= from; 
    setTimeout(go = () => {
        console.log(curr);
        curr++;
        if(curr<=to){
            setTimeout(go, 1000)
        }
    },1000)
}
print(0,5)



