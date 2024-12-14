import express from "express";        
import ConnectDB from "./config/database.js";
import { config } from "dotenv";
import packageRouter from "./routes/package.js"
import adminRouter from "./routes/admin.js"



const app = express();

// environment variable configuration
config({
    path: './config/data.env'
})

// routes configuration
app.use(packageRouter);
app.use('/admin', adminRouter);

//database connection
ConnectDB()

app.listen(3000, ()=>{
    console.log("server is up and running")
})