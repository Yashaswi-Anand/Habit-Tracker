const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
    habit: {
        type: String,
        required: true,
    },
    date:[{
        type:String,
    }],
    status:[{
        type:String,
    }]
})

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;