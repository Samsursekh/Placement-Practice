// const express = require('express');
// const app = express();

// const reqFilter = (req, res, next) => {
//     // console.log('reqFilter');
//     if(!req.query.age){
//         res.send('please provide age')
//     }else if(req.query.age<=18){
//         res.send("you can not access the page")
//     }else{
//         next();
//     }

// }

// app.use(reqFilter)

// app.get('/', (req, res) => {
//     res.send('welcome to home page')
//     next()
// });

// app.get('/user', (req, res) => {
//     res.send('welcome to user page');
// })

// app.listen(8080, () => {
//     console.log("server is started on 8080 port")
// })

//make an event and call it 

// const express = require('express');

// const EventEmitter = require("events");

// const app = express();

// app.get('/', (req,res) => {
//     res.send("api called")
// })
// app.listen(8080, () => {
//     console.log('server startted on 8080')
// });


// const express = require('express')

// const app = express();


// app.get('/', (req,res) => {
//     res.send('api called')
// })

// app.listen(8080, () => {
//     console.log("server running on 8080")
// })


// //middleware concept 
// const express = require('express');

// const app = express();


// const resFilter = (req, res, next)=>{
//  if(!req.query.age){
//     res.send("please provide the age")
//  }else if(req.query.age<=18){
//     res.send('you can not acces the page')
//  }else{
//     next()
//  }
// }


// app.use(resFilter);

// app.get('/', (req, res) => {
//     res.send("welcome to home page")
// })

// app.get('/user', (req,res) => {
//     res.send('welocome to user page')
// })

// app.listen(8080)