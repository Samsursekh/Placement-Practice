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


# what are the collections in mongodb?
- A collection in MongoDB is a group of documents.

- Collections in a NoSQL database like MongoDB correspond to tables in relational database management systems (RDBMS) or SQL databases.

- In general, we recommend limiting collections to 10,000 per replica set. When users begin exceeding 10,000 collections, they typically see decreases in performance.

#  what are javascript considered as single threaded language

- JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
- The call stack is the same as the stack data structure. Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO (first in last out).

# Why node JS is a single threaded language?

- A Node. js application runs on single thread and the event loop also runs on the same thread. Hence, we can say Node. js is single-threaded but the catch is that there are some libraries in Node.

- It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

# what is middleware? explain with an example
- Middleware is software and cloud services that provide common services and capabilities to applications and help developers and operators build and deploy applications more efficiently.

-  Middleware acts like the connective tissue between applications, data, and users.

- ex: a web server is middleware that connects websites to the backend database. 
- When you submit a form on a website, your computer sends the request in XML or JSON to the web server.

- API management are all commonly handled by middleware. 

# what is middleware ? 

- Middleware is software and cloud services that provide common services and capabilities to applications and help developers and operators 
- Middleware is software that different applications use to communicate with each other. It provides functionality to connect applications intelligently and efficiently so that you can innovate faster. Middleware acts as a bridge between diverse technologies, tools, and databases so that you can integrate them seamlessly into a single system. The single system then provides a unified service to its users. For example, a Windows frontend application sends and receives data from a Linux backend server, but the application users are unaware of the difference.

# Why is middleware important?
Middleware started as a bridge between new applications and legacy systems before it gained popularity in the 1980s. Developers initially used it to integrate new programs with earlier systems without rewriting the earlier code. Middleware has become an important communication and data management tool in distributed systems.

Developers use middleware to support application development and simplify design processes. This leaves them free to focus on business logic and features instead of connectivity between different software components. Without middleware, developers would have to build a data exchange module for each software component that connects to the application. This is challenging because modern applications consist of multiple microservices or small software components that talk to each other.

# what is firebase ?

 # MVC pattent vs flux pattern in data flow explain?




# mongo ==> commond shell
- mongo is the command-line shell that connects to a specific instance of monogod.

# mongod ==> database
- mongod is the Mongo Daemon it's basically the host process for the database.


table--> rows
collection -->
array.object ==> key-value pair ==> document 

### database related coomands ==>

1] mongosh  ==>start monogsh

2] show dbs  ==> apke sare database jo apne banaye hai oh show karenge 

3] use comments ==> create a new database name comments

4] db ===> view your current database

5] db.dropDatabase() ==> delete database 

### Collection related commands  ==>

1] show collections ==> view your collections

2] db.createCollection("comments") ==> create new collection // name comments.

3] db.comments.drop()   ==> delete collection name comments 

### mongodb commends related to ROws ==>

1]insert the data ==>
 db.comments.insert({"name": "priya""lang" : "javascript""book" : "karma""Author" : priya reddy"})

2] Insert Many Rows ==>
 db.comments.insertMany([
    {"name": "priya","lang" : "javascript","book" : "karma","Author" : "priya reddy"},{"name": "priti","lang" : "python","book" : "ahanyata","Author" :"riya reddy"},{"name": "prakj","lang" : "react","book" : "omma","Author" : "kamya reddy"}])

3] view your all insert data ==>
 db.comments.find() 

4] code ek right format mai ata hai  ==> 
db.comments.find().pretty()


5] serach in a  mongoDb specific Database ==>
db.comments.find({lang:"python"})

6] limit the number of rows in output ==>
db.comments.find().limit(2)

7] count the number of rows in the output ==>
db.comments.find().count()

8] count the no. according to limit ==>
db.comments.find().pretty().limit(2).count()

8] count the no. name priya is present ==>
db.comments.find({name:"priya"}).count()

9] assending sort ==>
db.comments.find().sort({member_since:1}).pretty()

10]  desending sort 
db.comments.find().sort({member_since:-1}).pretty()

11] find the first row matching the object  ==>
db.comments.findOne({})

12] update the row 
 db.comments.update({name: "priya" },
  {
    "name": "neharika",
    "lang":"html",
    "book":"react",
    "Author":"jhon"
    })
db.comments.update({name: "priya" })

 13] update commond ==>
 db.comments.update({name: "priya" },
  {
   "name": "neharika",
    "lang":"html",
    "book":"react",
    "Author":"jhon"
    })

14] upsert(update + insert) commond ==>
db.comments.update({name: "priya" },
  {
    "name": "neharika",
    "lang":"html",
    "book":"react",
    "Author":"jhon"
    }, {upsert: true})

15] delete element ==>
    db.comments.remove({name: "priya"})


16] less than ==>
db.comments.find({member_since: {$lt:30}})

17] less than equal to ==>
db.comments.find({member_since: {$lte:30}})

18] greatter than ==>
db.comments.find({member_since: {$gt:30}})

19] greater than equal to ==>
db.comments.find({member_since: {$gte:30}})

 