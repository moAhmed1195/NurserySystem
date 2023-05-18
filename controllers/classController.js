const mongoose = require("mongoose");
require("../models/classModel.js");

const classSchema = mongoose.model("classes");

exports.getAllclasses = function (request, response,next) {
    classSchema.find({})
        .then(data => {
                     
            response.status(200).json({ data });
        })
        .catch(error => {
            next(error);
        })
    
}
exports.getclass = function (request, response,next) {
    classSchema.findOne({ _id:request.params.id })
        .then(clas=>{
            if (clas == null) {
                throw new Error("class not exists ..");
            }
            response.status(200).json(clas);
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
}

exports.addclass = function (request, response,next) {
    let object = new classSchema({
        _id:request.body.id,
        name: request.body.name,
        supervisor: request.body.supervisor,
        children: request.body.children   
    });
    object.save()
        .then(data => {
        
            response.status(201).json({ data});
        })
    .catch(error=>next(error))
}
exports.updateclass = function (request, response,next) {
    classSchema.updateOne({
        _id:request.body.id
    }, {
        $set:
        {
        name: request.body.name,
        supervisor: request.body.supervisor,
        children: request.body.children 
        }
    }).then(data => {
        
        response.status(200).json({ data: "updated" });
    }).catch(error=>next(error))
}
exports.deleteclass = function (request, response, next) {
    classSchema.deleteOne({
        _id:request.body.id
    }).then(data => {   
        response.status(200).json({ data: "deleted" });
    }).catch(error=>next(error))
}









// exports.getAllclasses = function (request, response) {
//     response.status(200).json({ data: "list of classes" });
// }
// exports.getclass = function (request, response) {
//     response.status(200).json({ data: "one class" });
// }
// exports.addclass = function (request, response) {
//     response.status(201).json({ message: "add class" });
// }
// exports.updateclass = function (request, response) {
//     response.status(200).json({ message: "update class" });
// }
// exports.deleteclass = function (request, response) {
//     response.status(200).json({ message: "delete class" });
// }