const express = require("express");
const {checkAdmin}=require("../MiddleWares/authMW.js");
const controller = require("../controllers/childController.js");

const router=express.Router();

router.route("/childs")
      .all(checkAdmin)
      .get(controller.getAllchild)
      .post(controller.addchild)
      .patch(controller.updatechild)
      .delete(controller.deletechild);
      
router.get("/childs/:id", checkAdmin,controller.getchild); 



module.exports=router;