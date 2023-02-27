<!-- https://docs.google.com/document/d/1E299icTnP9XV1dgCyAe-gm1UdchJ3OFrPAWVAXL8rdE/edit?usp=sharing -->


# callBack function =>
# callback=>
 - the function which can be passed as an argument inside another function and called later, to get async behavior

- callbackfunction is that passed a function inside a  another function as an argument 
- A callback is a function passed as an argument to another function. 
- This technique allows a function to call another function. A callback function can run after another function has finished.
- they work asyrnomsly.

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
# callback hell =>
-  function inside function like nested callback. which blocks our code of execution inside call stack . that is called as callback hell
- Callback hell is a term used to describe a situation where code contains multiple levels of nested callbacks.
-  This can make the code difficult to read, understand, and maintain.

- The phenomenon which happens when we passed one by one multiple callbacks within a function is called a callback hell.

- The two problems with Call back are :
- 1. Call back hell : Here we pass one call back function into another and that call back into another, thus creating an unreadable and unmaintanable code. This is also known as pyramid of doom. 
- 2. Inversion of control : Here we pass call back into another function. This leads to loss of control of our code. Control moves to the other functon where we used call back.

- ex : const data = ["priya", "riya", "shreya"]
        api.createOrder(data, function(){
            api.proceedTopayment(function(){
                api.showOrderSummry(){
                    function({
                        api.updateWallet()
                    })
                }
            })
        })
       
       -The code defines an array of constant data containing three strings: "priya", "riya", and "shreya". The code then calls the "createOrder" function of an API object with this data as a parameter. The createOrder function takes a callback function as a second parameter.

    - Inside the createOrder function, the code calls the "proceedTopayment" function of the same API object with another callback function as a parameter.

    - Inside the proceedTopayment function, the code calls the "showOrderSummry" function of the API object with another callback function as a parameter.

    - Inside the showOrderSummry function, the code defines a function as a parameter which calls the "updateWallet" function of the API object.

    - Overall, the code is an example of callback hell where multiple nested functions are called with callback functions as parameters.


# how  event loop  works and node.js works?
- Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. 
- The event loop executes tasks from the event queue only when the call stack is empty.
- i.e. there is no ongoing task. The event loop allows us to use callbacks and promises.

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
- create a global excution context

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
const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("promise is resolve")
    }, 1000)
}, 
(rejected) => {
    console.log("promise is rejected")
})
promise.then((value) => console.log(value));


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


# what is MERN ?
- MERN is a technology stack used for building web applications. It is an acronym that stands for:

- MongoDB: a popular NoSQL database that stores data in a flexible, JSON-like format.

- Express: a web application framework for Node.js that provides a set of tools for building web applications, including routing and middleware.

- React: a JavaScript library for building user interfaces. React is often used to build the client-side of web applications.

- Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows developers to run JavaScript code on the server-side of web applications.

- Together, these four technologies form the MERN stack, which is often used to build full-stack web applications. MongoDB is used to store data, Express is used to build the server-side of the application, React is used to build the client-side of the application, and Node.js is used to run the server-side code. The MERN stack has become increasingly popular in recent years due to its flexibility, scalability, and ease of use.


# How to declare a variable?

To declare a variable, you need to follow these steps:

Choose a variable name. The name should be descriptive and should reflect the purpose of the variable.

Choose a data type for the variable. The data type determines the kind of values the variable can store, such as integer, float, or string.

Use the syntax appropriate to the programming language you are using. In most programming languages, you declare a variable by using the keyword "var" or "let", followed by the variable name, an equal sign (=), and the initial value of the variable. For example, in JavaScript, you can declare a variable like this:

# How many types of components are there in React?
There are two types of components in React: functional components can also have state and lifecycle methods, making them more powerful and similar to class components

- There are two types of components in React: functional components and class components. Functional components are simple functions that return JSX, while class components are JavaScript classes that extend React.Component and have a render method that returns JSX.

# How to declare a state in React?


In order to declare a state in React, you can use the useState() hook or declare a state variable in a class component. Here is an example using the useState() hook:

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
In this example, the count state variable is declared using the useState() hook with an initial value of 0. The setCount function is used to update the state variable when the button is clicked.

# What is React?

React is an open-source JavaScript library for building user interfaces. It was created by Facebook and is now maintained by a community of developers. React allows developers to create reusable UI components and manage the state of their applications, making it easier to build complex and dynamic web applications. React uses a declarative syntax and a virtual DOM to optimize the rendering of components and improve the performance of the application. It can be used with other libraries and frameworks, such as Redux, to build full-stack web applications

# What is the MERN stack, and why is it used?

The MERN stack is a collection of technologies used to develop web applications. MERN is an acronym that stands for:

MongoDB: A NoSQL document database that stores data in JSON-like documents.
Express.js: A lightweight web application framework for Node.js that provides an easy-to-use set of tools for building web APIs and web applications.
React: A popular JavaScript library for building user interfaces.
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server side.
MERN stack is often used for building scalable and high-performance web applications, especially for applications with complex user interfaces that require frequent updates.

Here's a brief overview of the role of each technology in the MERN stack:

MongoDB provides a flexible and scalable database solution that can store and manage large amounts of data.
Express.js is used as a web application framework to create a back-end API for the application. It provides a simple and intuitive way to define routes, handle requests and responses, and interact with the database.
React is used for building the user interface of the web application. It provides a flexible and powerful library for creating reusable UI components that can be used across the entire application.
Node.js is used as the server-side runtime environment for the application. It allows the back-end code to be written in JavaScript, which helps to streamline the development process.
Overall, the MERN stack is used for developing full-stack web applications, which means applications that have a front-end user interface, a back-end API, and a database. It provides developers with a powerful set of tools that can help them to build highly scalable and responsive web applications quickly and efficiently.

# Why is React used in web applications?

React is a popular JavaScript library that is widely used in web development for creating complex and dynamic user interfaces. The primary reasons why React is used in web applications are:

Modular design: React enables developers to break down the user interface into smaller, reusable components. This modular approach makes the code more manageable and easier to maintain.

Virtual DOM: React uses a virtual DOM, which is a lightweight representation of the actual DOM. It allows React to quickly update and render changes to the user interface without reloading the entire page.

Performance: React's virtual DOM and component-based architecture make it highly performant, enabling fast and efficient rendering of large and complex user interfaces.

Cross-platform development: React is compatible with multiple platforms, including web, mobile, and desktop, making it an ideal choice for developing cross-platform applications.

Large community and ecosystem: React has a vast community of developers who actively contribute to the library's growth and development. This vibrant community provides extensive support, resources, and third-party libraries, making it easier to build complex web applications with React.

# What are useState, useEffect, and fetch in React?

useState is a built-in React hook that allows functional components to have state. It takes an initial value and returns an array with two items: the current state value and a function to update it.

useEffect is another built-in React hook that allows functional components to have side effects such as updating the DOM, fetching data, and subscribing to events. It takes a function as its first argument and an array of dependencies as its second argument. The function will be called after the component has been rendered and whenever one of the dependencies changes.

fetch is a method that is used to fetch data from an API endpoint. It returns a Promise that resolves to the response of the request. It can be used with the useEffect hook to fetch data and update the state of a component based on that data

# React provides a simple way to make API requests using the built-in fetch() method or third-party libraries like Axios or jQuery. Here's an example of using fetch() to make a GET request:

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

This code sends a GET request to the specified URL and then logs the response data to the console. The .json() method is used to convert the response data to a JavaScript object.

# What are the advantages of React?
Reusability of code: React allows the creation of reusable components that can be shared across multiple projects. This results in faster development and easier maintenance of code.

Improved performance: React uses a virtual DOM (Document Object Model) which minimizes the need for direct manipulation of the actual DOM, resulting in improved performance and faster rendering.

Flexibility: React is highly flexible and can be used with other libraries and frameworks. This means developers can choose the best tools for their project and easily integrate them with React.

Easy to learn: React has a relatively low learning curve, making it easy for new developers to get started. Its component-based architecture also makes it easy to understand and maintain code.

Large community and support: React has a large community of developers and a strong support system. This means developers can easily find help and resources to solve any problems they may encounter.

Cross-platform development: React can be used to develop applications for multiple platforms, including web, mobile, and desktop. This makes it a versatile tool for developers.

