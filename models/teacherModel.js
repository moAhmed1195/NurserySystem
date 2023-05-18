const mongoose = require("mongoose");



//1- generate schema for teacher

const schema = new mongoose.Schema({
    fullname: { type: String},
    password: { type: String, require: true },
    email: String,
    image: String
})

//2- mapping
mongoose.model("teachers", schema);
