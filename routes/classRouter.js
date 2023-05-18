const express=require("express");
const controller = require("../controllers/classController.js");
const {checkAdmin}=require("../MiddleWares/authMW.js");

const router=express.Router();

router.route("/classes")
      .all(checkAdmin)
      .get(controller.getAllclasses)
      .post(controller.addclass)
      .patch(controller.updateclass)
      .delete(controller.deleteclass);
      
router.get("/classes/:id", checkAdmin,controller.getclass); 



module.exports=router;