const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  // 모델과 연결하여 user table에 회원가입 정보 insert
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = (req, res) => {
  // 모델과 연결 해서 실제로 회원이 존재하는지 검색
  User.post_signin(req.body, function (rows) {
    if (rows.length > 0) {
      res.send({ result: true, id: rows[0].id });
    } else {
      res.send({ result: false });
    }
  });
};

exports.profile = (req, res) => {
  // id에 해당하는 user를 select
  User.get_user(req.body.id, function (result) {
    console.log("profile", result);
    // res.render("profile", { data: row[0] });
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/user/signin");
  });
};

exports.profile_edit = (req, res) => {
  // model에 연결해서 update
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
