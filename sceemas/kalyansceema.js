const mongoose = require("mongoose");

const kalyanSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    }
})
 
module.exports = mongoose.model('Kalyans' , kalyanSchema);