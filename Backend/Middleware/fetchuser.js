const JWT=require('jsonwebtoken')


const JWT_SECRET="secret"


const JWT_verify=(req,res,next)=>{

    let token=req.header('jwt_token');

    if(!token)res.status(401).json({success:false,errors:["Invalid Session"]});

    try {

        const data=JWT.verify(token,JWT_SECRET);
        req.user=data.user
        next()
        
    } catch (error) {
        res.status(500).send({success:false,errors:["Invalid Session"]})
    }

}

module.exports=JWT_verify

