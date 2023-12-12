import { useState } from 'react';
import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import CustomHookEx from './hooks/CustomHook';

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemoEx></UseMemoEx>
      <UseCallbackEx></UseCallbackEx>
      <UseCallbackEx2 postId={postId} />{' '}
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <CustomHookEx></CustomHookEx>
    </div>
  );
}

export default App;
