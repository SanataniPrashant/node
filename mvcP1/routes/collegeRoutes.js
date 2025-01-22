const express =require("express");
const route = express.Router();

const collegeController =require("../controller/collegeController")

route.get("/index",collegeController.homePage)

route.get("/about",collegeController.aboutPage)

route.get("/courses",collegeController.courses)

route.get("/Faculty",collegeController.faculty)

route.get("/contact",collegeController.contactus)



module.exports=route;