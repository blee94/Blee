// function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다.`);
// }

// const { reject } = require("async");

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log(`고민 끝!!`);
//     product = `제로 콜라`;
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink(pay); //
// // pay(product, price);

// -----------------------------------------------------------------------

// function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다.`);
// }

// let product;
// let price;

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`고민 끝!!`);
//       product = `제로 콜라`;
//       price = 2000;
//       resolve();
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink().then(() => {
//   pay(product, price);
// });
// // pay(product, price);

//  -------------------------callback

// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

// console.log(add);

// ----------------------promise로 변경

// function add(n1, n2) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//     }, 300);
//   });
// }

// function mul(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//     }, 200);
//   });
// }

// function sub(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n - 1;
//       resolve(result);
//     }, 100);
//   });
// }

// add(4, 3)
//   .then((result) => {
//     console.log("1: ", result);
//     return mul(result);
//   })
//   .then((result) => {
//     console.log("2: ", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3: ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   -------------------------async/await과 함께 사용
// 1.async함수는 Promise를 return 한다.
// 2.async함수 내에서는(만) await을 사용할 수 있다.

async function add(n1, n2) {
  //async: return Promise
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 300);
  });
}

async function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 200);
  });
}

async function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 100);
  });
}

add(4, 3)
  .then((result) => {
    // console.log("1: ", result);
    return mul(result);
  })
  .then((result) => {
    // console.log("2: ", result);
    return sub(result);
  })
  .then((result) => {
    // console.log("3: ", result);
  })
  .catch((err) => {
    console.log(err);
  });

async function exec() {
  const x = await add(4, 3);
  console.log("1: ", x);
  const y = await mul(x);
  console.log("2: ", y);
  const z = await sub(y);
  console.log("3: ", z);
}

exec();

async function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 300);
  });
}

async function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 200);
  });
}

async function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 100);
  });
}

add(4, 3)
  .then((result) => {
    console.log("1: ", result);
    return mul(result);
  })
  .then((result) => {
    console.log("2: ", result);
    return sub(result);
  })
  .then((result) => {
    console.log("3: ", result);
  })
  .catch((err) => {
    console.log(err);
  });
