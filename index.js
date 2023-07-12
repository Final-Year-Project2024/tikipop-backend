// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WebSocket = require('ws');

require("dotenv").config()
// Env 
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI;
const MongodbURL = "mongodb+srv://Shibam9064:01tBSzoCwi1ojGiD@cluster0.yctg4cl.mongodb.net/";

const app = express();



app.use(cors())
// Routes
const UserRoutes = require("./routes/UserRoutes");

app.use(express.json());
app.use("/user", UserRoutes);
app.get('/', (req, res)=>{
    res.send("Tikipop Api")
})
app.listen(PORT || 8000, ()=>{
    console.log("Tikipop API");
    mongoose.connect(MongodbURL, (e)=> {
        // console.log(e)
        console.log("Mongo DB connected successfully")
    })
});