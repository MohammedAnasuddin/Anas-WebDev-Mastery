const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    firstName: {
        type:String
    },
    lastName: {
        type:String
    },
    gender: {
        type:String,
        upperCase: true,
        enum:["M","F"]
    },
    mail: {
        type:String,
        required:true,
        unique:true,
        validate: [function(value) {
            return validator.isEmail(value);
        }, "Wrong Format of the Email"]
    },
    about:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

const User = mongoose.model("User",userSchema)
module.exports = User;