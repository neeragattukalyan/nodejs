const mongoose = require("mongoose");


const suryaSchema = new mongoose.Schema({

    place:{
        type:String,
        required : true
    },
    profession:{
        type:String,
        required : true
    }
}) 

module.exports = mongoose.model("suryas" , suryaSchema);
