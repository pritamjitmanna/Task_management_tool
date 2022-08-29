const mongoose=require('mongoose')



const Complete=new mongoose.Schema({
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
    completedDate:{
        type:Date,
        default:Date.now
    }
})

const completed=mongoose.model('complete',Complete)

module.exports=completed