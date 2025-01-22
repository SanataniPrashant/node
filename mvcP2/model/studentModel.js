const mongoose =require("mongoose");
const contactsSchema =  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});