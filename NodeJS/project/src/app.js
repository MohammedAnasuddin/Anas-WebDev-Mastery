const express = require("express")
const connectDB = require("./config/Database")
const User = require("./models/User");
const app = express()


app.use(express.json())


app.post("/addUser", async (req,res)=>{
    try{
        const new_user = new User(req.body)
        new_user.save()
        res.status(200).send("user Sucesfully added to the DB")
    } catch(e){
        console.log("Error adding user", e)
        res.status(500).send("Error adding user to the database.")
    }

})

app.get("/getUser", async (req,res)=>{
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

app.delete("/deleteUser", async (req,res)=>{
    const deleteID = req.body.id;
    try{
        const deleteUser = await User.findByIdAndDelete(deleteID);
        res.status(200).send("User deleted")
    }catch (error) {
        res.status(400).send("Something Went Wrong")
    }
    
})

app.patch("/updateUser", async (req,res)=>{
    const updates = req.body
    try{
        const updatedDocument = await User.findByIdAndUpdate(updates.id, {
            "firstName":updates.firstName,
             "mail":updates.mail
        },{returnDocument:"after"})
        res.status(300).send("Successfully updated Doc")    
    }
    catch(e){
        console.log(e)
        
        res.status(400).send("Something Went Wrong")
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


