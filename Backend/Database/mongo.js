const mongoose=require("mongoose")

const mongoURI="mongodb://localhost:27017/task_management_tool?readPreference=primary&directConnection=true&ssl=false"



const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(`Connected to MongoDB`);
    })
}

module.exports=connectToMongo;