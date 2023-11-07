const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const dotenv = require("dotenv");
// cross-env
// 배포버전/개발버전에 따라 다른 env파일을 로드할수있게 도와줌.

console.log(process.env);

app.get("/", (req, res) => {
  res.send("hello world");
});

dotenv.config({ path: path.join(__dirname, "./config/envs/.env") }); //index.js와 같은 위치에 있는 .env파일을 불러와서 환경변수로 사용할 수 있게끔 함.
dotenv.config({ path: path.join(__dirname, `./config/envs/.development${process.env.NODE_ENV}.env`) });

console.log(process.env.PORT);
console.log("password: ", process.env.PASSWORD);

app.listen(port, () => {
  console.log("Server Port : ", process.env.PORT);
});
