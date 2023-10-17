const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function (req, res) {
  res.render("prac_valid");
});

app.get("/postForm", function (req, res) {
  console.log(req.query);
  res.send("get 요청 성공");
});

app.post("/postForm", function (req, res) {
  console.log("post 요청 성공");
  res.send(req.body);
});
app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.id,
    email: req.body.email,
  });
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
