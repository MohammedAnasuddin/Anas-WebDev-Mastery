const express = require("express")
const userAuth = require("./middleware/auth").auth_userRoute

const app = express()

console.log(app)


app.use("/user", 
   [ userAuth, 
        (req,res,next)=>{
        console.log("Second Handler")
        next();
    }
]
)

app.use("/user/getProfile", (req,res)=>{
    console.log("Profile: ",{name:"Anas", uid:"12332434"})
    res.send({name:"Anas", uid:"12332434"})
})




app.listen(5000, ()=>{
    console.log("Server Successfully listening on PORT 5000")
});