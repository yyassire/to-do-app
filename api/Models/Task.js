const mongoose = require("mongoose")

 const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
 
    isFinished:{
    type:Boolean,
    default:false
    }
 },{timestamps:true})



module.exports = mongoose.model("posts",taskSchema)