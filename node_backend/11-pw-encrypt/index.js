const crypto = require("crypto");

function createHashedPw(pw) {
  return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw 1123: ", createHashedPw("1123"));
console.log("pw 2222: ", createHashedPw("2222"));

const input = "1123";
const dbPw = "nFQH5lknJgLSZ1Xnt3ot0BXp+3XIrDqK+1fYmOirrT6LOUpn7gv5XpmX3n4kOa0AeOatwPEGAXftoozBvgID6w==";

console.log("compare result: ", createHashedPw(input) == dbPw);

const dbPwSalt = "q/egKNioZ8nbQCfRCccDWDOWMJD2g4A6zqpeCcEgFbbMUd3B4eG/0NyLIPnpfYz7+Z+2OkInm4MTLWE8HTDdaw==";
const dbSalt = "y/eBNu+GmNEjaQ9FqN5OBw==";
console.log("compare result with salt: ", comparePw(input, dbSalt) == dbPwSalt);

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  console.log("salt: ", salt);
  const interations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto.pbkdf2Sync(pw, salt, interations, keylen, digest).toString("base64");
  //   암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

function comparePw(pw, salt) {
  const interations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto.pbkdf2Sync(pw, salt, interations, keylen, digest).toString("base64");
}

console.log("pw 1123 w. salt: ", createHashedPwWithSalt("1123"));
