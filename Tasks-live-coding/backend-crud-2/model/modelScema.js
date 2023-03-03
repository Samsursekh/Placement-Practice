const mongoose = require('mongoose');

const task_schema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        requried:true
    },
    price:{
        type:Number,
        requried:true
    }
})

const task = new mongoose.model('task', task_schema);
module.exports = task;