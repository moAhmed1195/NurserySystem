const express = require("express");
const {checkAdmin}=require("../MiddleWares/authMW.js");
const controller = require("../controllers/teacherController.js");

const router=express.Router();

router.route("/teachers")
      .all(checkAdmin)
      .get(controller.getAllTeacher)
      .post(controller.addTeacher)
      .patch(controller.updateTeacher)
      .delete(controller.deleteTeacher);
      
router.get("/teachers/:id", checkAdmin,controller.getTeacher); 



module.exports=router;