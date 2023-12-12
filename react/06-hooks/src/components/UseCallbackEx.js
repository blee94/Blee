import { useCallback, useState } from 'react';

// UseCallback: 함수를 기억함.
// 컴포넌트가 렌더링 될때, 컴포넌트 내부에 있는 함수도 다시 선언하게됨.
// 다시 선언 할 필요가 없는 함수는 다시 선언하지 않고, 이전에 선언한 함수를 사용할수 있으면 좋음.
// 이걸 해주는게 UseCallback.
export default function UseCallbackEx() {
  const [text, setText] = useState('');

  //  의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가 update될때 다시 선언하지 않고 기억하고 있는 함수를 사용함.
  const hadleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h3>useCallback</h3>
      <input type='text' value={text} onChange={hadleOnChange}></input>
    </>
  );
}
