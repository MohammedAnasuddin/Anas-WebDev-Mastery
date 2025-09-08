const express = require("express")

const app = express()





app.use("/about/2",(req, res)=>{
    res.send("I'm a Dev 2");
})

app.get("/about/", (req,res)=>{

    res.send({
        "name": "Anas",
        "Role":"Learner"
    })
})

app.post("/about/:name/:role", (req,res)=>{
    try{
        const new_member  = req.params
        res.send(`Added a new ${new_member.name}-${new_member.role} to the Team`)

    }
    catch(e){
        res.send(`error adding new member: ${e}`);
    }
})



app.patch("/about", (req,res)=>{
    res.send("Updated the Role for Dev-Anas")
})

app.delete("/about", (req,res)=>{
    res.send("Deleted dev-Anas")
})


app.use("/about",(req, res)=>{
    res.send("I'm a Dev");
})



app.use("/",(req, res)=>{
    res.send("Hello World");
})

app.listen(5000, ()=>{
    console.log("Server Successfully listening on PORT 5000")
});