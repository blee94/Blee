const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("axios");
});

app.get("/resister", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});

app.post("/login", function (req, res) {
  const id = "blee";
  const pw = "1123";
  let data;
  if (req.body.userid == id && req.body.password == pw) {
    data = {
        isSuccess: true,
        msg: '로그인 성공',
    } else {
        data = {
            isSuccess: false,
            msg: '로그인 실패',
        }
    }
  }
  res.send(req.body);
  console.log(req.body);
});
