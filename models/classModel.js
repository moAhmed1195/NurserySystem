const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    supervisor: mongoose.Types.ObjectId,
    children:[]
    
})

mongoose.model("classes", schema);
