const express = require("express");
const router = express.Router();
const controller = require("../controller/register");

// 8000/user/
router.get("/", controller.main);

// 8000/user/register
router.get("/register", controller.register);

module.exports = router;
