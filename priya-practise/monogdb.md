

# what is firebase ?


 # MVC pattent vs flux pattern in data flow explain?
 
// # what is repl in node.js ==>
 
// r => read 
// E => evulate
// p => print 
// l => loop

// value is right or wrong your loop is running evulate and print process stay continue 
// this is not a for loop or while loop 

// # express js => 

// - express is framework of node.js.

// # mongoDB ==> 
// - mongodb is noSql database 
// - the data stored in a collection 
// - collection don't have row and column 
// - data is stored in the form of object 

# what are the collections in mongodb?
- A collection is a set of document 
- A collection in MongoDB is a group of documents.

- Collections in a NoSQL database like MongoDB correspond to tables in relational database management systems (RDBMS) or SQL databases.

- In general, we recommend limiting collections to 10,000 per replica set. When users begin exceeding 10,000 collections, they typically see decreases in performance.

table--> rows
collection -->
array.object ==> key-value pair ==> document 

# what is differene between mongodb and sql database?
SQL databases are used to store structured data while NoSQL databases like MongoDB are used to save unstructured data. MongoDB is used to save unstructured data in JSON format. MongoDB does not support advanced analytics and joins like SQL databases support

# Why use MongoDB instead of SQL?
Why is using MongoDB better than using MySQL? Organizations of all sizes are adopting MongoDB, especially as a cloud database, because it enables them to build applications faster, handle highly diverse data types, and manage applications more efficiently at scale.

# Which database is fastest?
MongoDB is suitable for hierarchical data storage and is almost 100 times faster than Relational Database Management System (RDBMS).

# What is indexing in node js?
Indexes are data structures that support the efficient execution of queries in MongoDB. They contain copies of parts of the data in documents to make queries more efficient. Without indexes, MongoDB must scan every document in a collection to find the documents that match each query.

# what is difference between DBMS and RDBMS? 
DBMS stands for Database Management System, which is a software system used to manage and organize data in a database. It allows users to define, create, update, and manage databases efficiently. DBMS can manage both structured and unstructured data.

RDBMS stands for Relational Database Management System. It is a type of DBMS that stores and organizes data in the form of related tables. In RDBMS, data is structured in the form of rows and columns, where each row represents a unique record and each column represents a specific attribute of that record. RDBMS uses SQL (Structured Query Language) for managing data.

The main difference between DBMS and RDBMS is that DBMS manages data in a more general and flexible way, whereas RDBMS manages data in a structured way using tables and relations. RDBMS is designed to handle large amounts of structured data and provide powerful querying and reporting capabilities. In contrast, DBMS can handle both structured and unstructured data, but it may not have the same level of performance and scalability as RDBMS when dealing with large amounts of structured data.

# what is long pulling?

Long polling is a technique used in web development to improve the efficiency of client-server communication. It is a variation of the traditional polling technique, which involves repeatedly sending requests to the server to check for new data.

In long polling, the client sends a request to the server, but the server does not respond immediately. Instead, the server holds the request open until new data becomes available or a timeout occurs. When new data is available, the server sends a response to the client, which then initiates a new long-polling request.

Long polling is useful in situations where real-time updates are required, such as chat applications or social media feeds. It can reduce the number of requests sent by the client and the amount of data sent by the server, resulting in faster and more efficient communication between the client and server.



# what is REPL?
In Node.js, REPL stands for Read-Eval-Print-Loop. It is a built-in feature of Node.js that allows you to interact with the Node.js environment through a console-like interface.

REPL provides a way to enter and run Node.js commands interactively. You can use it to quickly test out code snippets, experiment with new features, and debug your code. It's particularly useful for exploring and learning the Node.js API.

To start a Node.js REPL session, you can simply open a terminal and type node followed by pressing enter. This will start the Node.js environment and bring up the REPL prompt, where you can enter JavaScript code.

For example, you could enter console.log('Hello, world!') and press enter, and the REPL will execute the command and print the output to the console.

REPL also provides several built-in commands, such as .help, .break, .clear, and .exit, which can help you navigate and use the environment more effectively.


# mongo ==> commond shell

- mongo is the command-line shell that connects to a specific instance of monogod.

# mongod ==> database
- mongod is the Mongo Daemon it's basically the host process for the database.


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
 db.comments.insert({"name": "priya","lang" : "javascript","book" : "karma","Author" :"priya reddy"})

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

 