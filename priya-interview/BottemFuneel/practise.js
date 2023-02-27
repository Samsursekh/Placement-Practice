
// Why middleware is used in Express?

// - Middleware can also send the response to the server before the request. 
//  The next middleware function is commonly represented as a variable named next.
//  Simply middleware is a function that can only be applied using routes.
//  We can access and modify request and response data using middleware.

// -  middleware is function use with only routes 
// - purpose of the using middleware access a req and res and then modify in that. 
// - if you want changes req, res you can use middleware.


// # Application ==> 
// - side block,
// - user authentication

// # types of middleware ==> 
// 1] Application level middleware  ==> global middleware ==> default middleware
// 2] Router- level middleware 
// 3] Error-handling middleware 
// 4] Built-in-middleware
// 5] Third-party middlware



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
