const express = require('express')
const { auth_middleware} = require("../middleware/auth")
const validateEditRequest = require("../utilities/validateEditRequest")
const User = require("../models/User")
const Connection = require("../models/Connection")




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

userRouter.patch("/updateUser", auth_middleware, async (req,res)=>{
    const documentID = req.user._id;
    const updates = req.body
    const ALLOWED_UPDATES = ["lastName", "about", "firstName","age","photoURL" ]
    try{
        const isUpdateAllowed = Object.keys(updates).every((key)=> ALLOWED_UPDATES.includes(key))

        if(isUpdateAllowed){
            const updatedDocument = await User.findByIdAndUpdate(documentID, 
                updates,
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

userRouter.get("/user/requests/received", 
    auth_middleware,
    async (req,res) =>{
        // Job: Get all Pending Connection Request for the current User
    try{
        const currentUser = req.user
        const requests = await Connection.find({
            toUserId:currentUser._id
        }).populate("fromUserId", ["firstName"]) 
        

        console.log(requests)
        const data = requests.map(doc => "Request From "+doc.fromUserId.firstName+" "+doc._id)
        res.send(data)
    }catch(e){
        res.status(400).send("Can t find requests due to: "+e.message)
    }

    }
)

userRouter.get("/user/connections", auth_middleware,
    async (req,res) => {
        const currentUser = req.user

        const connectionRequests = await Connection.find({
            $or:[
                {toUserId:currentUser._id, status:"accepted"},
                {fromUserId:currentUser._id, status:"accepted"},
                
            ]
        }).populate("fromUserId", ["firstName"])

        const data = connectionRequests.map((row)=>{
            if(row.fromUserId._id.toString() === currentUser._id.toString()){
                return row.toUserId;
            }
            return row.fromUserId;
        });

        res.send(data)
    }

   
)

 userRouter.get("/feed", auth_middleware, async (req,res)=>{
        //Gets eligible connections user can connect to
            //Excludes:
            //x The users which  has accepted / rejected the currentUser 
                //> fromUserId:current && (status="accepted"|"rejected") ||
                //> toUserId:current && (status="accepted"|"rejected")   
            //x The users which he sent connections to (status != "intrested")
                 //> fromUserId:current && (status!="intrested") ||
                //> toUserId:current && (status!="intrested") 
            //x The user itself
            //- Should match the user Intrest 

            //. Optimized
            //> Create set .of Id's from the conncetion scollection where fromUserId:current || toUserId:current 
            //> This will gives us the non required users list
            //> Traverse on User COllection where the id does not includes in the above list.


            const currentUser = req.user
            const page = req.query.page || 1;
            const skipCount = (page-1)*3 
            const userConnections = await Connection.find({
                $or:[
                    {fromUserId:currentUser._id},
                    {toUserId:currentUser._id}
                ]
            })

            const exclusionList = new Set([currentUser._id.toString()])

         for(const conn of userConnections) {
            exclusionList.add(conn.fromUserId.toString());
            exclusionList.add(conn.toUserId.toString());
            }

            const feed = await User.find({
                _id: {
                    $nin: Array.from(exclusionList)
                }
            }).skip(skipCount).limit(3).select("-password -mail -createdAt -updatedAt")


            res.json({
                "message":"User Feed Received",
                "data": feed
            });


        



    })

    module.exports=userRouter
