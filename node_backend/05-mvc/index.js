const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index.js를 불러오고 싶다면 폴더 이름까지만 접근해도됨
const router = require("./routes");

app.use("/", router);
// localhost:8000/~~~

// 제일 마지막에 써야함
// 존재하지 않는 get 요청에 대해서
app.get("*", function (req, res) {
  res.send("페이지를 찾을수 없습니다");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
