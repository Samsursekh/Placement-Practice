const mongoose = require('mongoose');

const product_schema =  new mongoose.Schema({
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

const product = new mongoose.model('product', product_schema);
module.exports = product;