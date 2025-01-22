// mvc - model views controller
// controller - receives input, sends to model, receives data from model, sends to view
// model - receives data from controller, processes data, sends data to controller
// view - receives data from controller, displays data to user
const express = require("express");
const app =express();
const StuRoute = require("./routes/studentsRoute");

app.use("/students", StuRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})