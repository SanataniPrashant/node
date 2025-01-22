const express = require("express");
const route = express.Router();
const studentController = require("../controller/studentController");




route.get("/homepage",studentController.homePage)

route.get("/aboutstu",studentController.aboutPage)

route.get("/courses",studentController.coursesPage)

route.get("/ourfees",studentController.ourfessPage)

module.exports  = route;