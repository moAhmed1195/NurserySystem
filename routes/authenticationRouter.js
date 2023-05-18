const express=require("express");
const controller=require("../controllers/authenticationController.js");

const router = express.Router();

router.post("/login",controller.login)

module.exports=router;