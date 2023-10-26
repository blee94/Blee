const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// localhost:8000/
router.get("/", controller.main);

router.post("/login", controller.login);

module.exports = router;
