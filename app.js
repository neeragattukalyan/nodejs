let express = require("express");
let addition = require("./addition");
let mongoose = require("mongoose");

console.log(addition.add(4,5));
const app = express();
app.get('/',function(req,res){
    res.send("this initial route");
})
app.get('/kalyan',function(req,res){
    res.send("this initial route 2");
})

app.listen(8081, () => {
    console.log('Running on server')
})
