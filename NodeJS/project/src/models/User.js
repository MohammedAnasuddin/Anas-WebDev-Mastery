const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")

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
userSchema.methods.generateJWT = async function(){
    const user = this;
    const id = user._id;

    const token = await jwt.sign({id:id},
        "learningNodeJS", 
        {expiresIn: "7d"})
    return token;
}
const User = mongoose.model("User",userSchema)
module.exports = User;