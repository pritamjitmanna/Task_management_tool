const mongoose=require('mongoose')

const Tasks=new mongoose.Schema({
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

const tasks=mongoose.model('task',Tasks)

module.exports=tasks;