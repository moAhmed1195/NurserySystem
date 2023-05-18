const mongoose = require("mongoose");
require("../models/teacherModel.js");

const teacherSchema = mongoose.model("teachers");

exports.getAllTeacher = function (request, response,next) {
    teacherSchema.find({})
        .then(data => {
                     
            response.status(200).json({ data });
        })
        .catch(error => {
            next(error);
        })
    
}
exports.getTeacher = function (request, response,next) {
    teacherSchema.findOne({ _id:request.params.id })
        .then(teacher=>{
            if (teacher == null) {
                throw new Error("teacher not exists ..");
            }
            response.status(200).json(teacher);
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
}

exports.addTeacher = function (request, response,next) {
    let object = new teacherSchema({
        fullname: request.body.fullname,
        password: request.body.password,
        email: request.body.email,
        image: request.body.image
    });
    object.save()
        .then(data => {
        
            response.status(201).json({ data});
        })
    .catch(error=>next(error))
}
exports.updateTeacher = function (request, response,next) {
    teacherSchema.updateOne({
        _id:request.body.id
    }, {
        $set:
        {
                fullname: request.body.fullname,
                password: request.body.password,
                email: request.body.email,
               image: request.body.image
        }
    }).then(data => {
        
        response.status(200).json({ data: "updated" });
    }).catch(error=>next(error))
}
exports.deleteTeacher = function (request, response, next) {
    teacherSchema.deleteOne({
        _id:request.body.id
    }).then(data => {   
        response.status(200).json({ data: "deleted " });
    }).catch(error=>next(error))
}