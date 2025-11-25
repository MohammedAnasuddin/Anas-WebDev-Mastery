const jwt = require("jsonwebtoken")
const User = require("../models/User")


const auth_middleware = async (req,res,next)=>{
  try{
    const cookies = req.cookies

    const {token} = cookies
        if(!token){
            res.status(401)
        }

        const decodedToken = await jwt.verify(token,"learningNodeJS")
        const {id} = decodedToken
        const user = await User.findById(id)

        if(!user){
            throw new Error("User Does Not Exist")
        }
        req.user = user
        next()
} catch(e){
    
    res.status(401).send("Invalid token."+e.message)
}
}

module.exports = {
    auth_middleware
}