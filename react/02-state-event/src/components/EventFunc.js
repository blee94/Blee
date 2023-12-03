import { useState } from 'react';

function EvenetFunc() {
  const [msg, setMsg] = useState('hello');
  const [name, setName] = useState('');

  const handleOnClickBye = (e) => {
    console.log(e);
    setMsg('bye');
  };
  function handleOnClickHello() {
    setMsg('hello');
  }
  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const handleEnter = (e) => {
    // console.log(e);
    if (e.key === 'Enter') {
      console.log('엔터를 눌렀음');
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 이벤트</h3>
      <div>{msg}</div>
      <button onClick={handleOnClickBye}>잘가</button>
      <button onClick={handleOnClickHello}>안녕</button>

      {/* 미리 익명함수 선언 후, 내부에서 함수 실행 방법 */}
      <button
        onClick={() => {
          handleOnClickTest('안녕');
        }}
      >
        테스트
      </button>

      {/* 바인드 이용 */}
      {/* bind의 첫번째 매개변수는 .앞에 있는 함수의 this를 결정 */}
      {/* 두번째 인자로 원하는 값을 넘겨주면 됌. */}
      {/* <button onClick={handleOnClickTest.bind(null, '안녕!')}>테스트</button> */}

      {/* input태그에서 엔터를 누르면 "엔터를 눌렀습니다"라는 문구 콘솔에 찍어보기 */}
      <input
        type='text'
        value={name}
        onChange={(e) => {
          //   console.log(e.target);
          setName(e.target.value);
        }}
        onKeyDown={handleEnter}
      ></input>
    </>
  );
}

export default EvenetFunc;
