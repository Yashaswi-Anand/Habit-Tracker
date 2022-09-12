const express = require('express');
const port = 5000
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const habitRoute = require('./routes/habitRoutes');
const expressLayouts = require('express-ejs-layouts');

// add static files
app.use(express.static('assets'));
app.use('/CSS',express.static(__dirname+'assets/CSS'))

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// set the view engine
app.use(expressLayouts)
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));


app.use('/habit', habitRoute);

app.get('/', (req,res) => {
    return res.send("hi");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`Server is running on port: ${port}`);
});