const express = require("express");
let routes = express.Router();
const { companySignupController } = require("../Controller/signupController")
const { authUser } = require("../Controller/signinController")



// post Apis//
routes.post("/user/registration", companySignupController);

routes.post("/user/login", authUser)

// // get Apis//
// routes.get("/user/registration", companySignupController);



module.exports = routes;