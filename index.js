//dotenv(),deployment, testing apis/documention, and sending mails.

const express = require("express");
const app = express();
const PORT = 5001;
const ejs = require("ejs")
require("dotenv").config()
const mongoose = require("mongoose")
const userRouter = require("./routes/user.route")
// bodyParser - parse(convert)- - parseInt, parseFloat, json.parse
app.use(express.urlencoded({extended:true}))
app.use("/user",userRouter);
app.set("view engine","ejs");
let allCustomers = []
let URI = process.env.MONGO_DB_URI
mongoose.connect(URI)
.then(()=>{
    console.log("mongodb has connected successfully");
})
.catch((err)=>{
   console.log("an error occured", err);
})
// users, products

app.listen(PORT,(err)=>{
    if(err){
        console.log("Server did not start",err);
    }else{
        console.log("Server has started");
    }
})