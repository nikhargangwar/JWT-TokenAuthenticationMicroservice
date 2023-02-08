const authServices = require('../services/authServices.js');

const addNewUser = async(req,res)=>{

    try{
        const {username,password}=req.body;
        const userResult = await authServices.addNewUser(username,password);
        res.status(201).json(userResult);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const loginUser = async(req,res)=>{
    try{
    
        const matchUser = await authServices.loginVerification(req.body.username,req.body.password);
        res.status(200).json(matchUser);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const verifyToken = async(req,res)=>{
    try{
        
        const tokenVerify = await authServices.verifyTokenService(req.headers.authorization);
        if(tokenVerify)
        {res.status(200).json({success:true});}
    }
    catch(err){
        res.status(401).json({err:err.message,success:false});
    }
}

module.exports = {addNewUser,loginUser,verifyToken};