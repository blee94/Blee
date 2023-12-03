// 함수형태는 클래스와 다르게 State를 이렇게 불러와야함
import { useState } from 'react';

function StateFunc() {
  // useState는 배열을 반환 -> 그 배열을 구조분해 하여 number와 setNumber을 선언.
  //   [state변수, state를 변경시키는 함수] = useState(초기값)
  const [number, setNumber] = useState(0);
  //   const [text, setText] = useState('hello');
  return (
    <>
      <h3>함수형 컴포넌트 state</h3>
      <div>
        number state value {number}
        <button
          onClick={() => {
            // 클래스와 동일하게 비동기처리되어서 아래처럼 사용불가
            // setNumber(number + 1);
            // setNumber(number + 1);

            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +2
        </button>
      </div>
    </>
  );
}
function PracFunc() {
  const [number, chageNumber] = useState(0);
  return (
    <>
      <div>
        number: {number}
        <br />
        <button
          onClick={() => {
            chageNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            chageNumber((prevNumber) => prevNumber - 1);
            chageNumber((prevNumber) => prevNumber - 1);
          }}
        >
          -2
        </button>
      </div>
    </>
  );
}

// export default StateFunc;
export default PracFunc;
