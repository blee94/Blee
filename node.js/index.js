// require: 모듈 ()파일을 불러온다.

const math = require("./math");

const sum = math.add(2, 3);
const minus = math.minus(2, 3);

console.log(sum, minus);
