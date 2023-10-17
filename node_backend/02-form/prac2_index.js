const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function (req, res) {
  res.render("prac_post");
});

app.get("/getForm", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.id,
    gender: req.body.gender,
    interest: req.body.interest,
    color: req.body.color,
    number: req.body.range,
  });
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
