const bcrypt = require("bcrypt");

const salt = 10;

const dbPw = bcryptPw("1123");

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}

function comparePw(pw, dbPw) {
  return bcrypt.compareSync(pw, dbPw);
}

console.log("pw 1123: ", bcryptPw("1123"));
console.log("compare pw: ", comparePw("1123", dbPw));
