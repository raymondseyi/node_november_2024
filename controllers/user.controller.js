const userModel = require("../models/user.model");
const nodemailer = require("nodemailer");
const fetchAboutPage = (req, res) => {
  res.send("I am the about");
};
const displayIndexPage = (req, res) => {
  res.render("index");
};

const displaySignUpPage = (req, res) => {
  res.render("signup");
};

const getDashboardPage = (req, res) => {
  userModel
    .find()
    .then((response) => {
      console.log(response);
      allCustomers = response;
      res.render("dashboard", { allCustomers });
    })
    .catch((err) => {
      console.log(err, "an error occured");
    });
};
const registerUser = (req, res) => {
  console.log(req.body);
  let form = new userModel(req.body);
  form
    .save()
    .then(() => {
      console.log("information saved successfully");
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "seyidami13@gmail.com",
          pass: "qzxy vgkv xmoq cilo",
        },
      });

      var mailOptions = {
        from: "seyidami@gmail.com",
        to: [req.body.email,"seyiodekomaya@gmail.com","oyedejioladipupo10@gmail.com","ayodeleopeyemi09@gmail.com"],
        subject: "Welcome to Node Jumia App",
        html: "<h1>Welcome</h1><p>That was easy!</p>",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.redirect("/user/dashboard");
    // res.send({status:true, message:"Sign up successful"})
    })
    .catch((err) => {
      console.log("could not save information", err);
    });
};
module.exports = {
  fetchAboutPage,
  displayIndexPage,
  displaySignUpPage,
  getDashboardPage,
  registerUser,
};
