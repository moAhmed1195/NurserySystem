

const mongoose = require("mongoose");
require("../models/childModel.js");

const childSchema = mongoose.model("childs");

exports.getAllchild = function (request, response,next) {
    childSchema.find({})
        .then(data => {
                     
            response.status(200).json({ data });
        })
        .catch(error => {
            next(error);
        })
    
}
exports.getchild = function (request, response,next) {
    childSchema.findOne({ _id:request.params.id })
        .then(child=>{
            if (child == null) {
                throw new Error("child not exists ..");
            }
            response.status(200).json(child);
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
}

exports.addchild = function (request, response, next) {
    
 
    let object = new childSchema({
        fullname: request.body.fullname,
        age: request.body.age,
        level: request.body.level,
        address: {
            city: request.body.address.city,
            street: request.body.address.street,
            building: request.body.address.building
        }
   
    });
    object.save()
        .then(data => {
        
            response.status(201).json({ data});
        })
    .catch(error=>next(error))
}
exports.updatechild = function (request, response,next) {
    childSchema.updateOne({
        _id:request.body.id
    }, {
        $set:
        {
            fullname: request.body.fullname,
            age: request.body.age,
            level: request.body.level,
            address: {
                city: request.body.address.city,
                street: request.body.address.street,
                building: request.body.address.building
            }
        }
    }).then(data => {
        
        response.status(200).json({ data: "updated" });
    }).catch(error=>next(error))
}
exports.deletechild = function (request, response, next) {
    childSchema.deleteOne({
        _id:request.body.id
    }).then(data => {   
        response.status(200).json({ data: "deleted " });
    }).catch(error=>next(error))
}

// exports.getAllchild = function (request, response) {
//     response.status(200).json({ data: "list of childs" });
// }
// exports.getchild = function (request, response) {
//     response.status(200).json({ data: "one child" });
// }
// exports.addchild = function (request, response) {
//     response.status(201).json({ message: "add childs" });
// }
// exports.updatechild = function (request, response) {
//     response.status(200).json({ message: "update childs" });
// }
// exports.deletechild = function (request, response) {
//     response.status(200).json({ message: "delete childs" });
