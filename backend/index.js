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


// Hardcoded Admin Credentials
const adminCredentials = {
    username: 'admin',
    password: 'admin123' // In a real application, use bcryptjs to hash passwords
  };
  
  // Basic Authentication Middleware
  const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).send('Authentication required');
  
    const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
  
  // Use the authentication middleware for all routes starting with `/admin`
  app.use('/admin', basicAuth);
  
  // Route for packages
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