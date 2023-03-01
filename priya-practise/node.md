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
- node is use chrome  v8 engine to excute code 

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