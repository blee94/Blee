exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const id = "blee";
  const pw = "1123";
  let data;
  if (req.body.userid == id && req.body.password == pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  console.log(req.body);
  res.send(data);
};
