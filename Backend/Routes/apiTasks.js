const express=require('express')
const Tasks=require('../Database/models/tasks')
const { body, validationResult }=require('express-validator') 
const fetchuser=require('../Middleware/fetchuser')

const router=express.Router();



// ROUTE 1: ADD A TASK AT http://localhost:5000/tasks/addtask  //Login Required

router.post('/addtask',fetchuser,[
    body('title',"Must be atleast 5 characters").isLength({min:5}),
    body('DueDate',"Must be a valid Date").isDate()
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, errors: errors.array() });
    }

    try {

        let {title,description,DueDate}=req.body

        const task=await Tasks.create({
            user:req.user.id,
            title,description,DueDate
        })

        // console.log(req.user.id);

        res.status(200).json({success:true,task})
    } catch (error) {
        res.status(500).send({success:false,errors:["Internal Server Error"]})
    }

    

})


// ROUTE 2: UPDATE A TASK AT http://localhost:5000/tasks/updatetask/:id  //Login Required

router.put('/updatetask/:id',fetchuser,[
    body('title',"Must be atleast 5 characters").isLength({min:5}),
    body('DueDate',"Must be a valid Date").isDate()
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, errors: errors.array() });
    }

    try {

        let taskId=req.params.id

        let task = await Tasks.findById(taskId)

        //If No task is found

        if(!task)return res.status(400).json({success:false,errors:["Wrong credentials"]})

        //If wrong user is changing the task

        // console.log(req.user.id);

        if(task.user.toString()!=req.user.id)return res.status(400).json({success:false,errors:["Wrong credentials"]})

        let updateTask={
            title:req.body.title,
            description:req.body.description,
            DueDate:req.body.DueDate
        }

        task=await Tasks.findByIdAndUpdate(taskId,{$set:updateTask},{new:true})

        res.status(200).json({success:true,task})
    } catch (error) {
        res.status(500).send({success:false,errors:["Internal Server Error"]})
    }


})


// ROUTE 3: DELETE A TASK AT http://localhost:5000/tasks/deletetask/:id  //Login Required

router.delete('/deletetask/:id',fetchuser,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, errors: errors.array() });
    }

    try {

        let taskId=req.params.id

        let task = await Tasks.findById(taskId)

        //If No task is found

        if(!task)return res.status(400).json({success:false,errors:["Wrong credentials"]})

        //If wrong user is changing the task


        if(task.user.toString()!=req.user.id)return res.status(400).json({success:false,errors:["Wrong credentials"]})


        task=await Tasks.findByIdAndDelete(taskId)

        res.status(200).json({success:true,task})
    } catch (error) {
        res.status(500).send({success:false,errors:["Internal Server Error"]})
    }


})

// ROUTE 4: FETCH ALL TASKS OF USER http://localhost:5000/tasks/fetchtasks  Login Required

router.get('/fetchtasks',fetchuser,async(req,res)=>{
    
    try {
        
        let user_tasks=await Tasks.find({user:req.user.id});

        // console.log(req.user.id);

        res.status(200).json({success:true,user_tasks})


    } catch (error) {
        res.status(500).send({success:false,errors:["Internal Server Error"]})
    }



})


// ROUTE 5:STAR A TASK http://localhost:5000/tasks/startask/:id Login Required

router.put('/startask/:id',fetchuser,async(req,res)=>{

    try {

        let task=await Tasks.findById(req.params.id)
        
        task.starred=!task.starred;

        task.save();

        res.status(200).json(task)

    } catch (error) {
        res.status(500).send({success:false,errors:["Internal Server Error"]})
    }

})



module.exports=router
