const express = require('express');

const router = express.Router();

const Controller = require('./Controller/useContoller')

router.post('/task/post', Controller.postFunction)

router.get('/task', Controller.getFunction)

router.get('/task/:id', Controller.getSingleFunction)

router.patch('/task/update/:id', Controller.updateFunction)

router.delete('/task/delete/:id', Controller.deleteFunction)

module.exports = router