const express = require("express")
const connectDB = require("./config/Database")
const User = require("./models/User");
const app = express()

app.patch("/addUser", async (req,res)=>{
    try{

        const user_instance = new User({
            firstName:"Mohammed",
            lastName:"Anasuddin",
            gender:"M",
            mail:"connect.@gmail.com",
        })
        
        await user_instance.save()
        res.send("user has been added to the database")
    } catch(e){
        console.log("Error adding user", e)
        res.status(500).send("Error adding user to the database.")
    }

})

connectDB()
.then(
    ()=>{
    console.log("DB Connected")
    app.listen(5000, ()=>{
        console.log("Server Successfully listening on PORT 5000")
    });
    }    
)
.catch(
    (err) => {
        console.log(err);
    }
)


