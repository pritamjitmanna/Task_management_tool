const express=require('express')
const { body, validationResult }=require('express-validator') 
const router=express.Router()

const User=require('../Database/models/userData')


router.post("/register",[
    body('email',"Must be a valid Email").isEmail(),
    body('name',"Must be atleast 5 characters").isLength({min:5}),
    body('password').isLength({min:4})
],(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    res.send("This is register")
})



module.exports=router