const mongoose=require('mongoose')

const Notes=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    DueDate:{
        type:Date
    },
    addDate:{
        type:Date,
        default:Date.now
    }
})

const notes=mongoose.model('user',Notes)

module.exports=notes;