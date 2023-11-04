const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
// 브라우저를 종료하면 session도 종료됨
app.use(
  session({
    secret: "secret key",
    resave: false, //모든 요청마다 session을 다시 저장할것인지
    saveUninitialized: true, //클라이언트가 세션에 처음 접속을 할때 세션을 초기화를 할것인가
    cookie: {
      httpOnly: true, //documnet.cookie로는 접속x
      maxAge: 1000 * 10, //n초후 쿠키 삭제
    },
    secure: false, // true: https 에서만 동작하도록 함 (default: false)
  })
);

app.get("/", (req, res) => {
  //   res.send(req.session);
  res.render("index");
});

app.get("/set", (req, res) => {
  console.log("userInfo: ", req.session);
  req.session.user = "user"; //   로그인 성공한 시점에 user를 식별할 수 있는 고유한 값을 담음 (blee)
  //   console.log("2: ", req.session);
  res.render("index");
  console.log("userLogin: ", req.session.user);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;

    // res.render("/set");
  });
});

app.post("/get", (req, res) => {
  res.send({ result: true });
});

// app.get("/get", (req, res) => {
//   console.log(req.session.user);
//   res.send({ user: req.session.user });
//   //   res.render("index");
// });

app.listen(port, () => {
  console.log("Server Port : ", port);
});

// const cookieConfig = {
//   httpOnly: true,
//   maxAge: 24 * 60 * 60 * 1000,
// };

// app.get("/", (req, res) => {
//   const noPopop = req.cookies.popup;
//   res.render("index", { noPopop });
// });

// app.post("/setCookie", (req, res) => {
//   res.cookie("popup", "y", cookieConfig);
//   res.send({ result: true });
// });

// app.listen(port, () => {
//   console.log("Server Port : ", port);
// });
