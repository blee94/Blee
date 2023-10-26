const express = require("express");
const router = express.Router();
const controller = require("../controller/control");

router.get("/", controller.main);

router.post("/login", controller.login);

module.exports = router;
