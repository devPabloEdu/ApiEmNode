'use strict';

const express = require('express');
const http = require('http');
const userRouter = express.Router();
const userControllers = require('../controllers/userController');

userRouter.post('/CreateUser', userControllers.post);
userRouter.put('/EditUser/:Userid', userControllers.put);
userRouter.delete('/RemoveUser/:Userid', userControllers.delete);

module.exports = userRouter;