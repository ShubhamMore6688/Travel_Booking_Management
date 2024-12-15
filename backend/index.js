import express from "express";        
import ConnectDB from "./config/database.js";
import { config } from "dotenv";
import packageRouter from "./routes/package.js"
import adminRouter from "./routes/admin.js"
import cors from "cors"


const app = express();

// adding cors
app.use(cors())
app.use(express.json())

// environment variable configuration
config({
    path: './config/data.env'
})

//database connection
ConnectDB()

// routes configuration
app.use(packageRouter);
app.use('/admin', adminRouter);


// test route for backend
app.get('/', (req, res)=>{
    return res.json({
        message: "server is up and running"
    })
})



app.listen(3000, ()=>{
    console.log("server is up and running")
})