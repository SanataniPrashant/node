const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/")
const studentRoute = require("./routes/studentRoute");


app.set("view engine","ejs");

app.use("/student",studentRoute)






app.listen(8000,()=>{
    console.log("server is running on port 8000");
})