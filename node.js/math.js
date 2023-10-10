// 중괄호 없이 입력하면 return값으로 사용하겠다는 뜻임.
const add = (a, b) => a + b;
const minus = (a, b) => a - b;

// // 위에꺼랑 같은 코드임.
// const add2 = (a, b) => {
//   return a + b;
// };

// 이 모듈을 내보내서 다른 파일에서 사용할 수 있음.
module.exports = {
  add,
  minus,
}; //함수 이름만 입력. 함수 자체를 내보내면 안됌.
