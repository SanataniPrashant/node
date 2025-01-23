const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


mongoose.connect("mongodb://127.0.0.1:27017/student");

const studentRoute = require("./routes/studentRoute");



app.set("view engine","ejs");
app.use("/student",studentRoute);


app.listen(8080,()=>{
    console.log("Server is running on port no. 8080");
})

