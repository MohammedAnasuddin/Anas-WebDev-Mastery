const {Schema, model} = require("mongoose") 

const connectionSchema = new Schema({

    fromUserId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    toUserId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    status:{
        type:String,
        enum:{
            values:["interested","ignore", "accepted", "rejected"],
            message:'{VALUE} is not an accepted status.'
        },
        required:true
    }



},{timestamps:true})

const Connection = new model("Connection", connectionSchema)

module.exports = Connection;