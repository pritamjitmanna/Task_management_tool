let mongoose=require('mongoose');

const Analytics=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    added:{
        type:Number,
        default:0
    },
    deleted:{
        type:Number,
        default:0
    },
    completed:{
        type:Number,
        default:0
    },
})

const analytics=mongoose.model('analytic',Analytics)

module.exports=analytics
