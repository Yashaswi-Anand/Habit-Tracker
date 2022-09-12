const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
    habit: {
        type: String,
        required: true,
    },
    status:{
        type:String,
        default: "NONE"
    }
})

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;