import io from 'socket.io-client';
import { useEffect, useRef } from 'react';

const socket = io.connect('http://localhost:8000', { autoConnect: false });
export default function Practice2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on('resHello', (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const send = () => {
    socket.emit('hello', { msg: 'hello' });
  };

  const result = useRef(null);

  return (
    <>
      <div
        style={{
          backgroundColor: 'lightblue',
          width: '300px',
          height: '500px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>a</div>
      </div>
      <input type='text' />
      <button onClick={send}>전송</button>
    </>
  );
}
