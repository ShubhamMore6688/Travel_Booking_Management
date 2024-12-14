import express from "express";        
import ConnectDB from "./config/database.js";
import { config } from "dotenv";



const app = express();
config({
    path: './config/data.env'
})
ConnectDB()

app.listen(3000, ()=>{
    console.log("server is up and running")
})