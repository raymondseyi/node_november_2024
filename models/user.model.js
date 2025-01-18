const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    firstname : {type:String, required:true},
    lastname : {type:String,required:true},
    email:{type:String,required:true,unique:[true,"Email has been used before, try another email"]},
    password :{type:String, required:true},
    registrationDate : {type:String, default:Date.now()}
})
let userModel = mongoose.model("users_collection",userSchema);

module.exports = userModel;