const express=require('express')
const bcrypt=require('bcryptjs')
const { body, validationResult }=require('express-validator') 
const JWT=require('jsonwebtoken');
const fetchuser=require('../Middleware/fetchuser')
const router=express.Router()

const User=require('../Database/models/userData')


const JWT_SECRET=process.env.JWT_SECRET


const jwt_auth=(user)=>{
  const body={
    user:{
      id:user._id

    }
  }

  const jwt_token=JWT.sign(body,JWT_SECRET)

  return {
    username:user.username,
    jwt_token:jwt_token
  }
}



// ROUTE 1: REGISTER TO THE SITE http://localhost:5000/users/register    No Login Required

router.post("/register",[
    body('email',"Must be a valid Email").isEmail(),
    body('username',"Must be atleast 5 characters").isLength({min:5}),
    body('password').isLength({min:4})
],async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, errors: errors.array() });
    }

    try{

      let user=await User.findOne({email:req.body.email});
  
      if(user)return res.status(400).json({success:false,errors:[{msg:"A user with the same email already exists"}]});

      let salt=await bcrypt.genSalt(10);
      let hashedPassword=await bcrypt.hash(req.body.password,salt);

      user=await User.create({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
      })


      user=jwt_auth(user);

      return res.status(200).send({success:true,user});
    }
    catch(e){
      return res.status(500).send({success:false,errors:[{msg:"Internal Server Error"}]})
    }


    
})


// ROUTE 2: LOGIN TO THE SITE http://localhost:5000/users/login       //No Login Required

router.post('/login',[
  body('email',"Must be a valid Email").isEmail(),
  body('password').isLength({min:4})
],async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, errors: errors.array() });
    }

    try {

      const {email,password}=req.body
      

      let user=await User.findOne({email});

      if(!user)return res.status(400).send({success:false,errors:[{msg:"Email and Password Does Not match"}]});

      let isAuth=await bcrypt.compare(password,user.password)

      if(!isAuth)return res.status(400).send({success:false,errors:[{msg:"Email and Password Does Not match"}]})

      user=jwt_auth(user);

      // console.log(user);

      return res.status(200).send({success:true,user});

      

      
    } catch (error) {
      return res.status(500).send({success:false,errors:[{msg:"Internal Server Error"}]})
    }
})



// ROUTE 3: FETCHUSER DETAILS http://localhost:5000/users/fetchuser  Login Required

router.get('/fetchuser',fetchuser,async(req,res)=>{


  try {
    
    let user=await User.findById(req.user.id);
  
    return res.status(200).json({success:true,user})
  } catch (error) {
    return res.status(500).json({success:false,errors:[{msg:"Internal Server Error"}]})
  }


})



module.exports=router