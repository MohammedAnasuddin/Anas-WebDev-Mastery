const express = require("express")
const connectDB = require("./config/Database")
const authRouter = require("./routes/authRouter")
const userRouter = require("./routes/userRouter")
const cookieParser = require("cookie-parser")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const app = express()



app.use(express.json())
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", authRouter)
app.use("/", userRouter)




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


