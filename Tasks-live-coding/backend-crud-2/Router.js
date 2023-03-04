const express = require('express');

const router = express.Router();

const Controller = require('./Controller/Controller')

router.post('/product/post', Controller.postFunction);

router.get('/product', Controller.getFunction);

router.get('/product/:id', Controller.getSingleFunction)

router.patch('/product/update/:id', Controller.updateFunction)

router.delete('/product/delete/:id', Controller.deleteFunction)

module.exports = router;