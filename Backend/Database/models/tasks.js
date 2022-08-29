const mongoose=require('mongoose')

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()-date.getTimezoneOffset()*60*1000);
    console.log(newDate);

    return newDate;   
}




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
    starred:{
        type:Boolean,
        default:false
    },
    addDate:{
        type:Date,
        default:Date.now
    }
})

const tasks=mongoose.model('task',Tasks)

module.exports=tasks;