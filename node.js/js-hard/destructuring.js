// ----------구조 분해 할당
const fruits = ["apple", "banana", "grape"];

const [apple2, banana2, grape2 = "grape2", melon2 = "melon"] = fruits;
console.log(apple2); //apple 출력
console.log(melon2);
console.log(grape2); // 얘는 안됌.
console.log(fruits); // 기존 배열에 추가되진 않음.

// -------------객체 구조 분해
const obj = {
  name: "blee",
  gender: "male",
  age: 30,
};
console.log(obj.age);

const { age, name, gender: gender2 } = obj;
console.log(age);
console.log(gender2); //이렇게도 됌.

let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y); //x에 y, y에 x 할당.(치환)

// ----------spread연산자

const array1 = [1, 2, 3, 4, 5];

const array2 = ["a", "b", "c", "d", "e"];

const array3 = [...array1, ...array2];
// ...: 배열 해제하고 순서대로 나열함

console.log(array3);

const word1 = "abc";
const word2 = "xyz";

const arr = [...word1, ...word2];
console.log(arr);

const obj2 = {
  name: "blee",
  gender: "male",
  age: 30,
};

const obj3 = {
  ...obj2,
  test: "test",
};
console.log(obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
  console.log("a=", a);
  console.log("rest=", rest); //남은 인자를 다시 배열로 묶어서 출력
}

get(...values);
