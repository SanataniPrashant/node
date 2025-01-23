
const express = require("express");
const route = express.Router();

const studentController = require("../controller/studentController");



route.get("/index",studentController.home);

route.get("/about",studentController.about);

route.get("/courses",studentController.courses);

route.get("/contact",studentController.contact);

route.post("/save" , studentController.studentsave )

module.exports = route;