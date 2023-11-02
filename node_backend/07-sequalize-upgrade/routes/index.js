const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain"); //연동하고 싶은 폴더 불러오기

router.get("/", controller.main); // controller에서 main 함수 불러오기

module.exports = router;
