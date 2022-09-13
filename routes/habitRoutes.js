const express = require('express');
const { createHabit, getAllHabits, deleteHabit, updateStatus, weeklyReport, reportUpdate } = require('../controller/habitController');
const route = express.Router();

// create a habit
route.post('/create',createHabit);
// get all habits
route.get('/habits', getAllHabits);
// delete habit
route.get('/delete/:id',deleteHabit);
// update status
route.get('/updateStatus/:id', updateStatus);
// get weekly report
route.get('/report', weeklyReport);
// update weekly report
route.get('/reportUpdate/:id/:index/:status',reportUpdate);

module.exports = route;