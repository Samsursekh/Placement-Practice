
# express.urlencoded
express.urlencoded() is a built-in middleware in Express.js. The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.

This method returns the middleware that parses all the urlencoded bodies.
// cors
# What is CORS in web API?
CORS is a security mechanism that allows a web page from one domain or Origin to access a resource with a different domain (a cross-domain request). CORS is a relaxation of the same-origin policy implemented in modern browsers.

Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.

# What is JWT?

- JSON Web Token (JWT) is an open standard 
-  for securely transmitting information between two parties as JSON object.
-  It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)

// .use in express
# package.json

The package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies. The file provides the npm package manager with various information to help identify the project and handle dependencies.


# node modules

- The node modules folder is located at the root of the project.

#  package.lock json

package-lock. json file is essentially used to lock dependencies to a specific version number.

lock. json is generated to have the same results in any environment. It should be in source control with the package. json file so if any other user clones the project and install dependencies; then it will install the same dependencies as in package.

To avoid differences in installed dependencies on different environments and to generate the same results on every environment we should use the package-lock. json file to install dependencies. Ideally, this file should be on your source control with the package

# what is node js?

- Node.js is an open-source, cross-platform, server-side runtime environment that allows developers to build fast and scalable network applications with JavaScript. 
- It is built on the V8 JavaScript engine, which is used in Google Chrome, and provides an event-driven, non-blocking I/O model that makes it ideal for building real-time applications and APIs.
-  Node.js offers a rich set of modules and libraries that help developers build a wide range of applications, from simple command-line tools to complex web applications. 
- It is widely used for developing server-side applications, microservices, and APIs, and has become an essential tool for modern web development.

# how to deploy your mern projcet?

Choose a hosting service: Select a hosting service provider like AWS, Heroku, or Digital Ocean.
Create a production build: Create a production-ready build of your MERN project using the npm run build command.
Set up the server: Set up your server, including installing any dependencies and setting environment variables.
Deploy your code: Upload the production build to your server or hosting provider.
Run your server: Start your server by running the command for your specific hosting service.
Verify deployment: Test your deployment by visiting the URL of your server and making sure everything is working as expected.
Note: Before deploying, make sure to thoroughly test your application to ensure it works properly in a production environment.

# what is node modules 

- Node modules provide a way to re-use code in your Node application.
- it just a directory created by npm and a way of tracking each packages you install locally via package.json .
- A set of function you want to include in your application 
- Node.js has a set of built-in modules which you can use without an installation.

# bycrypt => 
Bcrypt is a library to help you hash passwords. It uses a password-hashing function

# What is meant by process env in node JS?

- In Node. js, process. env is a global variable injected during runtime.
-  It is a view of the state of the system environment variables.
 Create an .env file. ...
 Install the dotenv library: npm install dotenv.
 Require dotenv as early as possible (e.g. in app. ...
 Wherever you need to use environment variables you need to add your environment variables. 




#  what are javascript considered as single threaded language

- JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
- The call stack is the same as the stack data structure. Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO (first in last out).

# Why node JS is a single threaded language?

- A Node. js application runs on single thread and the event loop also runs on the same thread. Hence, we can say Node. js is single-threaded but the catch is that there are some libraries in Node.

- It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

# what is node.js ?

- node js not  language 
- this is server envirnoment 
- node.js can connect with database 
- code and syntax is very simillar to javascript 
- but not exactly the same 
- node js free open sourse 
- node is use chrome v8 engine to excute code 

# why do we use node ?

- Node js mostly used for API 
- so we can connect the same database with webapp, mobile app 
- node is used create a rest api 
- node is easy to understand who know javascript 
- node.js is super-fast for API 
- you can not connect javascript to DataBase 
- Node can connect with db 
- node is run server side 
- javascript run is broweser side 


# what are client and server side?

client ==>  requset ==> server 
client <== requset <== server 
cliend side ==>javascript html css dispay on browser


It means connectivity. 
I mean API is the messenger that takes requests and 
tells a system what you want to do and then returns the response back to you

What is JSON? JavaScript Object Notation 
It's a key value pair. its popular light-weight way of transferring data

What is Postman is a Client tool to work with APIs 
to send requests get response. Organize the requests  
Collection in Postman is a top level folder 

Header: exists in both request and response, 

is metadata about the request. It's a key value pair 

Content Type: in request header: to specify what kind of data 
we are sending to the server 

in response header: what was the contenttype we got as response 

# what is difference between single threded and multi threaded?
Single-threaded refers to a programming model or application where only one thread of execution is active at a time. This means that only one sequence of instructions is being executed by the CPU at any given moment. In a single-threaded program, all tasks must be performed sequentially, one after the other, which can lead to slower execution times, especially when performing complex tasks.

On the other hand, multi-threaded programming allows an application to perform multiple tasks concurrently, using multiple threads of execution. This means that different parts of the application can execute simultaneously, improving the overall performance and responsiveness of the program. By breaking up complex tasks into smaller sub-tasks that can be executed concurrently, a multi-threaded application can complete tasks faster and more efficiently than a single-threaded one.

In summary, the main difference between single-threaded and multi-threaded programming is that single-threaded programs can only execute one sequence of instructions at a time, while multi-threaded programs can execute multiple sequences of instructions concurrently.

# what is difference between sql and mysql database

SQL stands for Structured Query Language and is a programming language used to manage relational databases. It provides a standard way to create, read, update, and delete data from databases. SQL is used by many different database systems, including MySQL.

MySQL is a specific type of database management system that uses SQL as its programming language. MySQL is an open-source relational database management system that is widely used for web applications, content management systems, and other software that requires a database. It is compatible with many operating systems and programming languages and is known for its high performance and reliability.

In summary, SQL is a programming language used to manage relational databases, while MySQL is a specific type of database management system that uses SQL as its programming language.


# what is api  and how to work in backend 

API stands for Application Programming Interface. It is a set of protocols, routines, and tools that allow different software applications to communicate with each other. APIs provide a way for developers to interact with backend services or databases without having to know the details of how those services are implemented.

In the context of backend development, APIs are often used to expose the functionality of a web application to other systems or applications. For example, a backend developer might create an API that allows a mobile app to retrieve user data from a web application. The mobile app would send a request to the API, and the API would return the requested data in a format that the mobile app could use.

To create an API in a backend system, a developer typically follows these steps:

Design the API: This involves deciding on the endpoints that the API will expose, the data formats that will be used, and any authentication or security measures that will be required.

Implement the API: This involves writing the code that handles incoming requests, retrieves data from databases or other services, and formats the response.

Test the API: This involves using tools like Postman or Swagger to send requests to the API and verify that the responses are correct.

Deploy the API: This involves configuring the backend server to expose the API to the outside world, often through a specific URL or endpoint.

Once the API is deployed, it can be used by other systems or applications to interact with the backend service.

# what is middleware? explain with an example

- Middleware is software that different applications use to communicate with each other. intersecptor between reqest and response.

- Middleware is software and cloud services that provide common services and capabilities to applications and help developers and operators build and deploy applications more efficiently.

-  Middleware acts like the connective tissue between applications, data, and users.

- ex: a web server is middleware that connects websites to the backend database. 
- When you submit a form on a website, your computer sends the request in XML or JSON to the web server.

- API management are all commonly handled by middleware.

# Why middleware is used in Express?

- Middleware can also send the response to the server before the request. 
 The next middleware function is commonly represented as a variable named next.
 Simply middleware is a function that can only be applied using routes.
 We can access and modify request and response data using middleware.

-  middleware is function use with only routes 
- purpose of the using middleware access a req and res and then modify in that. 
- if you want changes req, res you can use middleware.

# Application ==> 
- side block,
- user authentication

# types of middleware ==> 

1] Application level middleware  ==> global middleware ==> default middleware
2] Router- level middleware 
3] Error-handling middleware 
4] Built-in-middleware
5] Third-party middlware

const express= require('express')
const app = express();


const reqFilter = (req, res, next) => {
if(!req.query.age){
 res.send("please provide age")

}else if(req.query.age<18){
res.send("you can not access")

}else{
next();
}

}
app.get('/', (req, res) => {
res.send('welcome to home page')

});

app.get('/users', (req, res) => {
res.send('welcome to users page')

});

app.listen(5000);

# event emitter in node.js 

// what is event and  event emiiters
// - onClick , onChange - event 
// - button click => click the button then function excute 
// - those thing generate the event is called a event emiiter 
// - html javascript using event emittors using button but in Node.js using event emiiters throgh api

//make an event and call it 

const express = require('express');

const EventEmitter = require("events");

const app = express();

app.get('/', (req,res) => {
    res.sendFile("api called")
})
app. listeners(5000);



# What is indexing in node js?
Indexes are data structures that support the efficient execution of queries in MongoDB. They contain copies of parts of the data in documents to make queries more efficient. Without indexes, MongoDB must scan every document in a collection to find the documents that match each query.


# what is repl in node.js ==>
# 4.Executing javascript with Node
   - two ways
  1-->   node REPL
   R - Read
   E - Evalauate
   P - Print
   L - Loop
   2- executing code in a Javascript file in then command line  ( node filename.js) //file with .js exetension
A Read-Eval-Print Loop, or REPL, is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.
-  REPLs provide an interactive environment to explore tools available in specific environments or programming languages.

 
this is not a for loop or while loop 

# express js => 
- express is framework of node.js.

# mongoDB ==> 
- mongodb is noSql database 
- the data stored in a collection 
- collection don't have row and column 
- data is stored in the form of object 

# 1 what is node js ?

  ==> nodeJs is a open source, cross-platform, javascript runtime envioronment

  open-source - source code is publicaly available for sharing and modifications
  cross-platform--> available on mac, windows and linux

  js runtime envt -->
  provides all the necessary components in order to use and run a js program outside the browser


summary -- its not a language, or not a framework,
capable of excecuting js code outside the browser
- it can execute not only std ECMAscript language but also new features that are made available through c++ bindings using v8 engine


# 2 why lean NodeJs ?

  - build to end to end js applications
  - a number of companies like linkedin,netflix,and paypal are migrated from other backend technologies to node js
  - fullstack development is one of the  most sought out skills sets by companies
  - huge community support

   

# 3. what can you build using nodeJs /  applications

   -  Traditional websites
   -  backend service3s like APIs
   -  Real-time applications
   -  Streaming services CLI tools
   -  Multiplayer Games
   -  Node.js allows you to build complex and powerful applications
    



# 5. Brower vs Node.js

 ==> in the browser most of the time what you are doing is interacting with the DOM, or other web platform APIs like cookies. in the nodejs you dont have the document ,window and all the other objects that are provided by the browser

 - in the browser , we dont have all the nice APIs that node.js provides through its modules. for examples the filesysten access functionality.
 - with node.js you control the environment.
 - with a browser, you are at the mercy of what the users choose

# 6. Modules

 ==> A module is a encapsulated and reusable chunk of code that has its own context
  - in node.js, each file treated as a seperate module
   
   Types of modules
   ----------------
   1. Local Modules.  Modules that we create in our applications.
   2. built-in modules - modules that node.js provide by default
   3. Third party modules - modules written by other developers that we can use in our application


# What is multer in node JS?

Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files. It is written on top of busboy for maximum efficiency. NOTE: Multer will not process any form which is not multipart ( multipart/form-data ).