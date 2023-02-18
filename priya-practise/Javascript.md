
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


# callback function 

- callbackfunction is that passed a function inside a  another function as an argument 

function x(){

}

x(function y(){
    
})

# paramerters and arguments
- whenerver you creating a function whaterveer you put over here is known as parameters (label and identifiers)
- whenerver you calling a function whaterveer you put over here is known as arguments



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

