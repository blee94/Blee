import { useMemo, useState } from 'react';

// useMemo: 렌더링 할 때, 불필요한 연산을 방지
export default function UseMemoEx() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  //   [Before]
  // 문제점: count state가 변경되지 않아도, 렌더링 될때마다 다시 연산을 함. => 비효율적
  //     --count가 변결될때만 연산을 하도록 하고싶음.
  //   const calc = () => {
  //     console.log('calc........');
  //     return count * 2;
  //   };

  // [After]
  //   useMemo(콜백함수, 의존성 배열)
  //  useMemo: 불필요한 연산을 방지하고, 이전 값을 기억함. count의 변경이 있을때만 다시 연산하여 calc에 담음.
  const calc = useMemo(() => {
    console.log('calc........');
    return count * 2;
  }, [count]);
  return (
    <>
      <h3>UseMemo</h3>
      <div>
        count: {count} <button onClick={() => setCount(count + 1)}> +1</button>
      </div>
      <div>calc: {calc}</div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
