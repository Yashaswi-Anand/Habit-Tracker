const mongoose = require('mongoose');
// process.env.MONGO_URL ||
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/HabitTracker',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error conection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;