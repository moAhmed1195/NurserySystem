const { AutoIncrementSimple, AutoIncrementID } = require("@typegoose/auto-increment");
const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id: Number,
    fullname: String,
    age: Number,
    level: String,
    address: { city: String, street: String, building: Number }
});

schema.plugin(AutoIncrementID,{});
mongoose.model("childs", schema);
