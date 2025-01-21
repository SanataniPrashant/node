const express = require("express");
const app =express();
const EmployeeRoute = require("./routes/employeeRoute");
const ProductRoute = require("./routes/productRoute");

app.use("/employee", EmployeeRoute);
app.use("/product", ProductRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})