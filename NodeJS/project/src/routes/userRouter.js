const express = require('express')
const { auth_middleware} = require("../middleware/auth")
const validateEditRequest = require("../utilities/validateEditRequest")
const User = require("../models/User")




const userRouter = express.Router()


userRouter.get("/profile",auth_middleware, async(req,res)=>{
    try {
       const required_user = req.user
        res.send(required_user);
    } catch (error) {
        res.status(400).send("Unable to Fetch the Profile")
    }


})


userRouter.get("/getUser",auth_middleware, async (req,res)=>{
    const requested_name = req.body.name;
    console.log(requested_name);
    
    try {
        const user_found = await User.find({
            "lastName":requested_name
        })
        if(user_found.length ===0){
            res.status(404).send("User Not Found")
        }
        else{
            res.send(found)
        }
        
    } catch (error) {
        res.status(400).send("Something Went Wrong")
    }
})

userRouter.delete("/deleteUser", auth_middleware,async (req,res)=>{
    const deleteID = req.body.id;
    try{
        const deleteUser = await User.findByIdAndDelete(deleteID);
        res.status(200).send("User deleted")
    }catch (error) {
        res.status(400).send("Something Went Wrong")
    }
    
})

userRouter.patch("/updateUser/:userID", auth_middleware, async (req,res)=>{
    const documentID = req.params.userID
    const updates = req.body
    const ALLOWED_UPDATES = ["lastName", "about" ]
    try{
        const isUpdateAllowed = Object.keys(updates).every((key)=> ALLOWED_UPDATES.includes(key))

        if(isUpdateAllowed){
            const updatedDocument = await User.findByIdAndUpdate(documentID, {
                "lastName":updates.lastName,
            },
            {returnDocument:"after", runValidators:true}
        )
        res.status(300).send("Successfully updated Doc")  
        } else{
            throw new Error("Not allowed to perform the Update")
        }
    }
    catch(e){
        console.log(e)
        
        res.status(400).send("Can't Update"+e.message)
    }
})

userRouter.patch("/edit", auth_middleware, async(req,res)=>{
    try{
        //Validate fields
        const canUpdate = validateEditRequest(req.body)
        if(!canUpdate){
            throw new Error("Impermissible Edit")
        }

        //Get current USer
        const currentUser = req.user
        console.log("User: ", currentUser)

        //Update user
        Object.keys(req.body).forEach((key)=>currentUser[key]= req.body[key]);

        //Save the updates in DB
        await currentUser.save();

        //Respond
        res.status(200).send("Edits Sucessful")
    } catch(e){
        console.log("Error Editing User: ",e.message)
        res.status(400).send("Can't Update Your Details "+e.message)
    }
})


//  Object.keys(req.body).forEach((key)=> req.user[key] = req.body[key])
module.exports = userRouter;