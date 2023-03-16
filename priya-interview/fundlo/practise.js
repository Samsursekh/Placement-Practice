// # create a file in node.js

// const  fs = require('fs')
// fs.writeFileSync('read.txt',"welcome to my laptop")

// fs.writeFileSync('read.txt',"welcome to my house")


//extra data added same file
// fs.appendFileSync('read.txt', 'hi priya I am here')


//read the data other file

// const buf_data = fs.readFileSync('read.txt')

// console.log(buf_data)

{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 68
 6f 75 73 65 68 69 20 70 72 69 79 61 20 49 20 61 6d 
20 68 65 72 65> */}

// .- buffer is additional data types call erd in buffer 
// - buffer is mainly used to store binary datareq.accepts- (while reading from a file );


// org_data = buf_data.toString();

// console.log(org_data)


// # event emitter in node.js 

// what is event and  event emiiters
// - onClick , onChange - event 
// - button click => function excute krdo 
// - jo cheez event ko genrate krti hai usko event emiiter 
// - html javascript using event emittors using button but in Node.js using event emiiters throgh api

//make an event and call it 

// interview question

const express = require('express');

const EventEmitter = require("events");

const app = express();

app.get('/', (req,res) => {
    res.sendFile("api called")
})
app. listeners(5000);