let express = require("express");

let mongoose = require("mongoose");
const url = "mongodb://localhost/kalyanfirstdb"
const app = express();
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;
con.on('open',function(){
    console.log("connecting Db....")
})
const addition = require("./addition");
const suryapage = require("./suryaroute");
app.use(express.json());
app.use('/kalyan' , addition);
app.use("/kalyan/surya" , suryapage);
app.listen(8081, () => {
    console.log('Running on server')
})
