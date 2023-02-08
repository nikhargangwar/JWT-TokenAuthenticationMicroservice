const db = require('../models');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');


require('dotenv').config();

exports.addNewUser = async(username,password) => {
    const saltRounds = 10;
    hashedPassword = await bcrypt.hash(password,saltRounds);

    return await db.UserTable.create({ username, password:hashedPassword });
        
}

exports.loginVerification = async(username, password ) => {
    
    const userResult = await db.UserTable.findOne({ where: { username } });
    if(userResult){
        
        const passwordMatch = await bcrypt.compare(password,userResult.password);
        console.log()
        if(passwordMatch){
            const token = jwt.sign({ username }, process.env.JWT_SECRET,{ expiresIn: '1D' });
            return {token:token,success:true};
           
        }
    }
    return false;
}
exports.verifyTokenService = async(token) => {
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        const user = await db.UserTable.findOne({ where: { username: decoded.username } });
        if(user){
            return true;
        }
        return false; 
}