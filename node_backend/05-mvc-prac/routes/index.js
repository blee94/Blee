const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// localhost:8000/
router.get("/", controller.main);

router.get("/register", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

router.post("/login", function (req, res) {
  const id = "blee";
  const pw = "1123";
  let data;
  if (req.body.userid == id && req.body.password == pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  console.log(req.body);
  res.send(data);
});

module.exports = router;
