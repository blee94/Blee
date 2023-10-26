const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const userData = User.getUser();
  let data;
  if (
    (req.body.userid == id && req.body.password == pw) ||
    (req.body.userid == id && req.body.password == pw) ||
    (req.body.userid == id && req.body.password == pw)
  ) {
    data = {
      isSuccess: true,
      msg: `{}님 환영합니다`,
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  // console.log(req.body);
  res.send(data);
};
