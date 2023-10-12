const express = require("express"); // express모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트
// 포트: 1 ~ 65536 존재. 1~1023 까지는 기능이 다 정해져있음.

// app객체의 view engine설정을 ejs로 변경
app.set("view engine", "ejs");
// app객체의 view폴더 설정. 기본값: ./views
// ./view로 바꾸고 싶다면 아래처럼 작성.
// app.set("views", "./view");

app.use("/static", express.static(__dirname + "/static"));
//미들웨어

// get 메소드(http 메소드): 클라이언트가 요청할수 있는 방법들을 정의함.
// localhost:8000
app.get("/", function (req, res) {
  // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로 전송하겠다.
  res.send("hello express");
});
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수: request 객체(요청)
// 두번째 매개변수: response 객체(응답)

// localhost:8000/ejs
app.get("/ejs", function (req, res) {
  // render 메소드의 기본 dir: "./views/"
  //   res.render("index");
  res.render("test/index");
});

// 서버를 연다.
// localhost:8000
// 127.0.0.1:8000
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});

app.get("/test", function (req, res) {
  res.send("test");
  res.sendFile(__dirname + "/index.html");
});

app.get("/blee", function (req, res) {
  res.render("blee", {
    name: "blee",
    product: ["운동화", "후드집업", "스웨터"],
  });
});

app.get("/test2", function (req, res) {
  res.render("test2/index");
});
