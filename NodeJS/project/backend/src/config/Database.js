const my_URI = require("../config/secrets").mongoDB_URI
const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect(my_URI)
}

module.exports = connectDB;