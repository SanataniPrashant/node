
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    city:String,
    Phone:String
});


module.exports = mongoose.model("Student", studentSchema);