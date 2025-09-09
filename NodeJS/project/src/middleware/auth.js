const auth_userRoute = (req,res,next)=>{
    console.log("Authenticating User...")
    const role= "user"
    if(role === "user"){
        next()
        return next()
    }
    else{
        res.status(401).send("Unauthorized User Access Denied")
        return res.status(401).send("Unauthorized User Access Denied")
    }
}

module.exports = {
    auth_userRoute
}