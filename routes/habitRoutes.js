const express = require('express');
const { createHabit, getAllHabits, deleteHabit, updateStatus } = require('../controller/habitController');
const route = express.Router();

// create a habit
route.post('/create',createHabit);
// get all habits
route.get('/habits', getAllHabits);
// delete habit
route.get('/delete/:id',deleteHabit);
// update status
route.get('/updateStatus/:id', updateStatus);

module.exports = route;