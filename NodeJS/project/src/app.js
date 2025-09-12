const express = require("express")
const connectDB = require("./config/Database")
const User = require("./models/User");
const { validateNewUser } = require("./utilities/validateNewUser");
const {validateLogin} = require("./utilities/validateLogin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { auth_middleware} = require("./middleware/auth")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const app = express()



app.use(express.json())
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/addUser", async (req,res)=>{
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

app.post("/login", async(req, res)=>{
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
           res.send("Login Sucessful") 
        }
        else{
            res.send("Password Don't Match")
        }
        

    } catch(e){
        res.status(400).send("Login Failed")
    }
})

app.get("/profile",auth_middleware, async(req,res)=>{
    try {
       const required_user = req.user
        res.send(required_user);
    } catch (error) {
        res.status(400).send("Unable to Fetch the Profile")
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

app.patch("/updateUser/:userID", async (req,res)=>{
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


