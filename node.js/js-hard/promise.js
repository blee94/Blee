function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise 상태는 fulfilled!!! then 으로 연결됩니다. \n 이때의 flag가 true입니다`
      );
    } else {
      reject(
        `promise 상태는 fulfilled!!! then 으로 연결됩니다. \n 이때의 flag가 false입니다`
      );
    }
  });
}

// 특정 함수가 return 하는 값이 promise 객체일 경우, chaining으로, then, catch라는 메소드 사용 가능

promise1(true).then((result) => {
  // result에는 resolve로 보낸 값이 들어오게 된다.
  console.log(result);
});
