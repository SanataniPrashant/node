const express = require("express");
const route = express.Router();

const studentController = require("../controller/studentController");

route.get("/index",studentController.homePage)

route.get("/insert",studentController.insertPage)

route.get("/display",studentController.displayPage)

route.post('/saveData',studentController.studentsave)






module.exports=route;