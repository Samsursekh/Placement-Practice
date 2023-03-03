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



# What is meant by process env in node JS?
In Node. js, process. env is a global variable injected during runtime. It is a view of the state of the system environment variables.

#  what are javascript considered as single threaded language

- JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
- The call stack is the same as the stack data structure. Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO (first in last out).

# Why node JS is a single threaded language?

- A Node. js application runs on single thread and the event loop also runs on the same thread. Hence, we can say Node. js is single-threaded but the catch is that there are some libraries in Node.

- It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

# what is middleware? explain with an example
- Middleware is software that different applications use to communicate with each other. 

- Middleware is software and cloud services that provide common services and capabilities to applications and help developers and operators build and deploy applications more efficiently.

-  Middleware acts like the connective tissue between applications, data, and users.

- ex: a web server is middleware that connects websites to the backend database. 
- When you submit a form on a website, your computer sends the request in XML or JSON to the web server.

- API management are all commonly handled by middleware.

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



