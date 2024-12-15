import express from "express";        
import ConnectDB from "./config/database.js";
import { config } from "dotenv";
import packageRouter from "./routes/package.js"
import adminRouter from "./routes/admin.js"
import cors from "cors"


const app = express();
app.use(cors({
    origin: "*",
    credentials: false
}))
app.use(express.json())

// environment variable configuration
config({
    path: './config/data.env'
})

// routes configuration
app.use(packageRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res)=>{
    return res.json({
        message: "server is up and running"
    })
})

//database connection
ConnectDB()

app.listen(3000, ()=>{
    console.log("server is up and running")
})