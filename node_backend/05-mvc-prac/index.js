const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index.js를 불러오고 싶다면 폴더 이름까지만 접근해도됨
const router = require("./routes");

app.use("/", router);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
