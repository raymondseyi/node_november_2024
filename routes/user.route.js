const express = require("express");
const router = express.Router()
const userModel = require("../models/user.model");
const { fetchAboutPage, displayIndexPage, displaySignUpPage, getDashboardPage, registerUser } = require("../controllers/user.controller");

router.get("/about",fetchAboutPage)
router.get("/",displayIndexPage)
router.get("/signup",displaySignUpPage)
router.get("/dashboard",getDashboardPage)
router.post("/register",registerUser)

module.exports = router