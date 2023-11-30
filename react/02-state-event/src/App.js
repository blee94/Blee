import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import PracClass from './components/StateClass';
import PracFunc from './components/StateFunc';
import EventClass from './components/EventClass';
import EvenetFunc from './components/EventFunc';
import ExClass from './components/ex/HandlerEx';
import ColorChange from './components/ex/HandlerEx';
import ChangeStatus from './components/ex/HandlerEx';
import ChangeEverything from './components/ex/HandlerEx';
function App() {
  return (
    <div>
      {/* <StateClass name='blee'></StateClass> */}
      {/* <StateFunc></StateFunc> */}
      {/* <PracClass></PracClass>
      <hr />
      <PracFunc></PracFunc>
      <EventClass></EventClass>
      <EvenetFunc></EvenetFunc> */}
      {/* <ExClass></ExClass> */}
      {/* <ColorChange></ColorChange> */}
      {/* <ChangeStatus></ChangeStatus> */}
      <ChangeEverything></ChangeEverything>
    </div>
  );
}

export default App;
