// import logo from "./logo.svg";
import './App.css';
// import FunctionComponent from './components/FuncComponent';
// import ClassComponent from "./components/ClassComponent";
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';
import ClassPropsEx from './components/ClassPropsEx';
import PracPropsEx from './components/Practice';
import ClassComponent from './components/ClassComponent';
function App() {
  return (
    <div>
      {/* <FunctionComponent></FunctionComponent> */}
      {/* 태그마다 종료태그를 꼭 작성해줘야함!(br, hr포함) */}
      {/* <FunctionComponent /> */}
      {/* 아니면 이런식으로 작성 */}

      {/* <ClassComponent></ClassComponent> */}
      {/* <Title></Title> */}

      <FuncPropsEx title='Sesac' content='hello world' number={4}></FuncPropsEx>

      <ClassPropsEx
        title='Sesac'
        content='hello world'
        number={4}
      ></ClassPropsEx>

      <Section title='SeSAC 영역'>
        {/* children으로 지정한 객체 외의 객체도 보내줄 수 있음 */}
        <div>SeSAC 영영의 content입니다.</div>
      </Section>

      <Section title='코딩온 영역'>
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <PracPropsEx
        title='나의 하루는 12시 40분에 시작된다'
        author='김유진'
        price='13,500'
        type='자기계발서'
      ></PracPropsEx>
      <ClassComponent text='안녕?' valid=''></ClassComponent>
    </div>
  );
}

export default App;
