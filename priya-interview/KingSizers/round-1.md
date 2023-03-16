# Round-1

“JavaScript –
Operators,
Conditional statements,
Loops,
Functions,
Objects,
Array and its methods,
Async/Await,
DOM manipulation”,
record the presentation.

# What are operators in JavaScript?

- In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables).
- For example, 2 + 3; // 5. Here + is an operator that performs addition, and 2 and 3 are operands.

There are different types of JavaScript operators:
Type Operators.
Arithmetic Operators.
Assignment Operators.
Comparison Operators.
Logical Operators.
Conditional Operators.

# 1] Arithmetic operators

Arithmetic operators are used to perform arithmetic calculations.

- Addition x + y

* Subtraction x - y

- Multiplication x \* y
  / Division x / y
  % Remainder x % y
  ++ Increment (increments by 1) ++x or x++
  -- Decrement (decrements by 1) --x or x--
  ** Exponentiation (Power) x ** y

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y); // 8

// subtraction
console.log('x - y = ', x - y); // 2

// multiplication
console.log('x _ y = ', x _ y); // 15

// division
console.log('x / y = ', x / y); // 1.6666666666666667

// remainder
console.log('x % y = ', x % y); // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x); // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x); // 5

//exponentiation
console.log('x ** y =', x ** y);

# 2] Assignment operators

- An assignment operator assigns a value to its left operand based on the value of its right operand.

=   Assignment operator a = 7; // 7
+=  Addition assignment a += 5; // a = a + 5
-=  Subtraction Assignment a -= 2; // a = a - 2
_=  Multiplication Assignment a _= 3; // a = a \* 3
/=  Division Assignment a /= 2; // a = a / 2
%=  Remainder Assignment a %= 2; // a = a % 2
**= Exponentiation Assignment a **= 2; // a = a\*\*2

# 3] Comparsion operators

- Comparison operators compare two values and return a boolean value, either true or false. For example,

Comparison operators are used in decision-making and loops. You will learn about the use of comparison operators in detail in later tutorials.

== Equal to: returns true if the operands are equal x == y
!= Not equal to: returns true if the operands are not equal x != y
=== Strict equal to: true if the operands are equal and of the same type x === y
!== Strict not equal to: true if the operands are equal but of different type or not equal at all x !== y

>     Greater than: true if left operand is greater than the right operand	x > y
>
> = Greater than or equal to: true if left operand is greater than or equal to the right operand x >= y
> < Less than: true if the left operand is less than the right operand x < y
> <= Less than or equal to: true if the left operand is less than or equal to the right operand x <= y

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

# 4] Logical operators

- Logical operators perform logical operations and return a boolean value, either true or false. For example,
- Logical operators are used in decision making and loops.

&& Logical AND: true if both the operands are true, else returns false x && y
|| Logical OR: true if either of the operands is true; returns false if both are false x || y
! Logical NOT: true if the operand is false and vice-versa. !x

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

# 5] Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

& Bitwise AND
| Bitwise OR
^ Bitwise XOR
~ Bitwise NOT
<< Left shift

> >     Sign-propagating right shift
> >
> > >     Zero-fill right shift

# JAVASCRIPT CONDITION STATMENT

# 1] If()

- Use if to specify a block of code to be executed, if a specified condition is true
- Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

# syntax

if (condition) {
// block of code to be executed if the condition is true
}

# 2] else()

- Use else to specify a block of code to be executed, if the same condition is false
- The else Statement
  Use the else statement to specify a block of code to be executed if the condition is false.

# Syntax

if (condition) {
// block of code to be executed if the condition is true
} else {
// block of code to be executed if the condition is false
}

# 3] else if()

Use else if to specify a new condition to test, if the first condition is false
The else if Statement
Use the else if statement to specify a new condition if the first condition is false.

# Syntax

if (condition1) {
// block of code to be executed if condition1 is true
} else if (condition2) {
// block of code to be executed if the condition1 is false and condition2 is true
} else {
// block of code to be executed if the condition1 is false and condition2 is false
}

4] Use switch to specify many alternative blocks of code to be executed

# ex =>

let age =24

if(age>=21){
console.log("boys are allowed")
}else if(age>=18){
console.log("girls are allowed")
}else{
console.log("Not allowed")
}

# loops in javascript =>

# Loops

- Loops are handy, if you want to run the same code over and over again, each time with a different value.

JavaScript supports different kinds of loops:

1] for - loops through a block of code a number of times
for (Initialization; Condition; Iterator){
statements;
}

2] for/in - loops through the properties of an object

3] for/of - loops through the values of an iterable object

4] while - loops through a block of code while a specified condition is true

if(Condition){
statements;
}
while(Condition){
statements;
}

5] do/while - also loops through a block of code while a specified condition is true

do{
statements;
}
while(Condition);
statement gets executed one time if the condition is false

# Function =>

A JavaScript function is a block of code perform a particular task.

# function statement / function decleration

- function declartion is that a way of declare funaction

a() // a is called
b() // type error
function a(){
console.log("a is called")
}

a()

# function expression

- function expression is nothing else is act like as value
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

- function is first class citizens in javascript

- var b = function (param1){
  return function(){

      }

  }
  console.log(b());
  console.log(xyz) //reference error

# Arrow function

- Arrow functions were introduced in ES6.
- Arrow functions allow us to write shorter function syntax
- limition of Arrow functions should not be used this keyword and super keyword
- This arrow function reduces lots of code and makes the code more readable.
- arrow functions do not have their own arguments and it uses the arguments from the outer function.
- It can be used similarly to the way you would use function expressions.

function a() => {

}

# callBack function =>

- callbackfunction is that passed a function inside a another function as an argument
- A callback is a function passed as an argument to another function.
- This technique allows a function to call another function.
- A callback function can run after another function has finished.

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

# objects=>

1. The object is an instance of a class.
2. Object is a physical entity
3. Object allocates memory space whenever they are created.
4. You can create more than one object using a class.
5. Objects provide life to the class.

# Class:

1. A class is a template for creating objects in program.
2. A class is a logical entity
3. A class does not allocate memory space when it is created.
4. You can declare class only once.
5. Class generates objects

# Creating Objects in JavaScript

- There are 3 ways to create objects.
  1] By object literal
  2] By creating instance of Object directly (using new keyword)
  3] By using an object constructor (using new keyword)

# Array and its methods =>

- An array is a collection of items stored at contiguous memory locations.
- array is a linear data str
- The idea is to store multiple items of the same type together.
- each data element can be randomly accessed by using its index number.

[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n \* 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7

# Async Await =>

- async and await make promises easier to write
- async makes a function return a Promise
- await makes a function wait for a Promise
- he await keyword can only be used inside an async function.

- The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function getData(){
let res = await fetch('https/:pppp/tttttt.com")
let data = await res.json()
console.log(data)
}
getData()

# DOM manipulation

- DOM - Document Object Model - is a programming interface for HTML documents. It is used to represent the page so that programs can change the document structure, style, and content
  - DOM is created by the browser when a web page is loaded. In graphical form, it's like a tree of elements also called nodes, which are used to represent every single element on the page. All the DOM of our webpage sits inside the document object. Programmatically, this model allows us to read or even change the content of our page via JavaScript.

# 7 different ways in javascript => 

# 1] object literals 

let obj1 ={}
let obj2={
    name:'Priya'
};

let obj3 = {
    name:"Reddy",
    show:function(){
        return this.name;
    }
}
console.log(obj1);  //{}
console.log(obj2)  // {name:"priya"}
console.log(obj3.show()) // Reddy

# 2] object create

var car ={
  model:"bmw",
  color:"red",

};

var electricCar = Object.create(car)
console.log(electricCar.model) //-------------bmw

# 3] object constrctor 
// let obj = new Object()
// console.log(obj)


# 4] function constructor 

// function employee(name, age){
//     this.name = name;
//     this.age=age;
// }
// let obj1 = new employee("priya", 23)
// console.log(obj1)     //-----------------employee { name: 'priya', age: 23 }

# 5] Function constructor and protoptype 

function Person(){}
    Person.prototype.name="priya";
    
    let obj1 = new Person();
    console.log(obj1.name)   //priya

# 6] Es6 class  syntax
class Person{
  constructor(name){
    this.name=name
  }
}
let obj1 = new Person("priya");
console.log(obj1.name)  //priya

