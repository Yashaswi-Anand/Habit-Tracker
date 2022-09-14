const express = require('express');
const { getUser, createUser, logout } = require('../controller/userContoller');
const route = express.Router();

route.get('/', getUser);
route.post('/createUser',createUser);
route.get('/logoutUser', logout);

module.exports = route;