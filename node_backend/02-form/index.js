const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true }));
// extended: true 일 경우 qs모듈 (외부모듈)을 이용한다. false일 경우 내장 모듈인 queryString을 사용한다.
// x-www-form-urlencoded형태의 데이터를 해석

app.use(express.json());
// application/json 형태의 데이터를 해석

app.get("/", function (req, res) {
  res.render("index");
});

// get 요청은 url로 접속가능
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터 전송시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
// 클라이언트가 get 요청으로 데이터를 보낼때 url에 직접 query를 만들어서 전송이 가능하다.
// url에 전송되는 데이터가 노출된다. 즉, 보안이 필요한 정보는 get을 사용하지 않는다.
app.get("/get", function (req, res) {
  console.log(req.query); // { id: 'bee', pw: '1123' }
  //   console.log(req.query.id); // bee

  //   req.query: get요청에 대해 client가 보낸 데이터를 담고있다.
  //   url에서 기본 주소 (localhost:8000/get) 뒤에 오는 ?id=bee&pw=1123 이런 주소를 의미.
  res.send("get 요청 성공");
});

// localhost:8000/post로 post요청을 받기 위한 준비.
// post요청에 대한 데이터는 req.body에 담아서 온다.
// post요청은 url로 직접 접속하는건 불가능함.
// 정보가 숨겨짐. url 노출되지 않음. 데이터를 새로 생성하는 요청에 주로 사용됨.
app.post("/post", function (req, res) {
  console.log("post 요청 성공");
  res.send(req.body);
});
app.post("/post/ver2", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.id,
    email: req.body.email,
  });
});

// CRUD (create, read, update, delete)

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
