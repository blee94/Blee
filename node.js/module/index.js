// require: 모듈 ()파일을 불러온다.
// 하나 이상의 식별자를 객체 형태로 받아오는 경우
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음.

const math = require("./math");

const sum = math.add(2, 3);
const minus = math.minus(2, 3);

console.log(sum, minus);

// // 특정 식별자만 받아오고 싶은 경우
// //모듈을 받아올 때 사용하고싶은 식별자만 {}내부에 추출한 이름 그대로 입력. ,로 여러개 받아 올수도 있음.
// const { add } = require("./math");
// const sum = math.add(5, 3);
// console.log(sum);

const math2 = require("./math");

const calc = math.calc(3, 4);
console.log(calc);
