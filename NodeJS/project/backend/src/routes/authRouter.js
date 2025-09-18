const express = require("express")
const { validateNewUser } = require("../utilities/validateNewUser");
const {validateLogin} = require("../utilities/validateLogin")
const bcrypt = require("bcrypt")
const User = require("../models/User");
const { auth_middleware } = require("../middleware/auth");

const authRouter = express.Router()

authRouter.post("/signup", async (req,res)=>{
    try{
        const validated_details= validateNewUser(req.body)
       
        
        const hashed_password = await bcrypt.hash(validated_details.password,10);
        validated_details.password = hashed_password;
        
        const new_user = new User(validated_details)
        await  new_user.save()
        res.status(200).send("user Successfully added to the DB")
    } catch(e){
        console.log("Error adding user"+ e.message)
        res.status(400).send("Error adding user to the database."+e.message)
    }

})

authRouter.post("/login", async(req, res)=>{
    try{
        // Validating Request
        // console.log(req.body)
        const creds = validateLogin(req.body)
        
        // Getting the User form DB
        const user = await User.findOne({"mail": creds.mail})
  

        if(!user){
            throw new Error("User Don't Exist")
        }
        //Checking the password
        const doPasswordsMatch = await bcrypt.compare(creds.password, user.password)
        
        if(doPasswordsMatch){
           const token = await user.generateJWT()
           res.cookie("token",token)
           const {firstName,lastName,about,gender} = user
           res.status(200).json({
            "message":"Login Sucessful",
            "data":{
                firstName,
                lastName,
                gender,
                about
            }
           }) 
        }
        else{
            res.send("Password Don't Match")
        }
        

    } catch(e){
        res.status(400).send("Login Failed"+e.message)
    }
})


authRouter.post("/logout", async(req, res)=>{
    res.cookie("token", null , {
        expiresIn: new Date(Date.now())
    })
    res.clearCookie("token");
    res.send("Logout Successful")
})

module.exports = authRouter