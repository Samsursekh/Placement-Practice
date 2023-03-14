

- Bottom-Funnel provides the system and framework that modern marketers need to generate 
clients from scratch.
- Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, 
UAE, India and Africa having proficient and dedicated Android app developers, iOS App
developers, designers and digital marketing experts with a reputation for getting things done. 
- hc ==> jaypur, rajsthan
- employ numbers ==>200-500
or email @ : info@bottomfunnel.net
Web Url:- https://bottomfunnel.net

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

# What is indexing in node js?
Indexes are data structures that support the efficient execution of queries in MongoDB. They contain copies of parts of the data in documents to make queries more efficient. Without indexes, MongoDB must scan every document in a collection to find the documents that match each query.


# what is repl in node.js ==>
What is REPL used for?

A Read-Eval-Print Loop, or REPL, is a computer environment where user inputs are read and evaluated, and then the results are returned to the user. REPLs provide an interactive environment to explore tools available in specific environments or programming languages.

r => read 
E => evulate
p => print 
l => loop

value is right or wrong your loop is running evulate and print process stay continue 
this is not a for loop or while loop 

# express js => 

- express is framework of node.js.

# mongoDB ==> 
- mongodb is noSql database 
- the data stored in a collection 
- collection don't have row and column 
- data is stored in the form of object 



# arrange alphabetically ==> 

let array = ["priya", "priti","ganu", "vaishu", "ayna", "riya"]
let str = array.sort((a,b) => {
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }
})
console.log(str)

# check palindrome number ==> 

function checkPalindrome(N, str) {
    
   let bag="";
   for(let p=N-1; p>=0; p--){
       bag=bag+str[p];
   }
   
   if(str==bag){
       console.log("Yes");
   }else{
       console.log("No");
   }
   
  console.log(bag);
}

# Print only 100 to 1000  palindrome number

for(let p=100; p<=1000; p++){
    let str = p+"";
    rev_str=str.split("").reverse().join("");
    if(str ==rev_str){
        console.log(p)
    }
}
