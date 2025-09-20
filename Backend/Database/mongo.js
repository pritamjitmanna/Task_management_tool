const mongoose=require("mongoose")

// const mongoURI="mongodb://localhost:8081/task_management_tool?readPreference=primary&directConnection=true&ssl=false"

const mongoURI=`mongodb://mongo-db:${process.env.MONGO_PORT}/task_management_tool`          //Docker URI with the same network running 



const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(`Connected to MongoDB`);
    })
}

module.exports=connectToMongo;