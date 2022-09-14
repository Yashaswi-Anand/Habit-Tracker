const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userHabits:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Habits'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;