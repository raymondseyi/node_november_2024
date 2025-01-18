const userModel = require("../models/user.model")
const fetchAboutPage = (req, res)=>{
        res.send("I am the about")
}   
const displayIndexPage = (req,res)=>{
    res.render("index");
}

const displaySignUpPage = (req,res)=>{
    res.render("signup")
}

const getDashboardPage = (req,res)=>{
    userModel.find()
    .then((response)=>{
        console.log(response)
        allCustomers = response
        res.render("dashboard",{allCustomers})
    })
    .catch((err)=>{
        console.log(err,"an error occured")
    })
}
const registerUser = (req,res)=>{
    console.log(req.body)
    let form = new userModel(req.body)
    form.save()
    .then(()=>{
        console.log("information saved successfully")
        res.redirect("/dashboard")
    })
    .catch((err)=>{
        console.log("could not save information",err)
    })
}
module.exports = {fetchAboutPage,displayIndexPage,displaySignUpPage,getDashboardPage,registerUser}