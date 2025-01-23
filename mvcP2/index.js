const express = require("express");
const app = express();

const studentRoute = require("./routes/studentRoute");

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/prashant").then(()=>{
    console.log("connected to database");
})





app.set("view engine","ejs");
app.use("/student",studentRoute);







app.listen(8000,()=>{
    console.log("server is running on port 8000");
})