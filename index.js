const express = require('express');
const port = 5000
const app = express();
const db = require('./config/mongoose')


app.get('/', (req,res) => {
    return res.send("hi");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`Server is running on port: ${port}`);
});