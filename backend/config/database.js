import mongoose from "mongoose";

const ConnectDB = () => mongoose.connect(process.env.DB_URL, {dbName: "productivity-web-app"}).then(()=>{
    console.log("database is connected successfully");
})


export default ConnectDB;