const e = require("express");
const express = require("express");
const Connection = require("../models/Connection");
const User = require("../models/User");

const {auth_middleware} = require("../middleware/auth")

const requestsRouter = express.Router()

requestsRouter.post(
    "/send/request/:toUserId", 
    auth_middleware, 
    async(req, res)=>{
    try {
        //Get Current User
        const fromUserId = req.user._id
        const toUserId = req.params.toUserId
    
        
        //Check whether the receiver exist?
        const receiver = await User.findById(toUserId)

        if(!receiver){
            throw new Error("Receiver Does not Exist")
        }

        const existingRequest = await Connection.findOne({
            fromUserId,
            toUserId
        })
        console.log("Existing Request: ", existingRequest)


        if(existingRequest){
            throw new Error("Request Already Exists")
        }



        const connectionRequest = new Connection({
            fromUserId,
            toUserId,
            "status":"interested"
        })

        const data = await connectionRequest.save()

        res.status(200).send("Request to"+receiver.firstName)
        
    } catch (error) {
        res.status(400).send("Can't Send the request "+error.message)        
    }
})

requestsRouter.post("/request/review/:status/:requestId" , 
    auth_middleware,
    async(req, res)=>{
        /// The ROute fetches all the Requests Others made to the current User
        try {
            const currentUser = req.user
            const requestStatus = req.params.status
            const requestId = req.params.requestId
       


            const allowedStatus = ["accepted","rejected"]

             if((allowedStatus.includes(requestStatus)) == false){
                throw new Error("Wrong Status of the Request")
             }

             //Get the request
             const request = await Connection.findOne({
                _id:requestId,
                toUserId:currentUser._id,
                status:"interested"
             })

             if(!request){
                throw new Error("Request Not Found")
             }

             request.status = requestStatus;
             await request.save()

             res.status(200).send("Request "+requestStatus)
        } catch (e) {
            console.log("Error :", e.message)
            res.status(400).send("Error: "+e.message)
        }
    }
    
)

module.exports = requestsRouter;
