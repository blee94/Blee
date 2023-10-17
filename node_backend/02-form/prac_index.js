const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function (req, res) {
  res.render("prac_get");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.send("--");
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
