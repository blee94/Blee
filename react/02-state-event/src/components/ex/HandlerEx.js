// import { Component } from 'react';

// class ExClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: '검정색',
//     };
//     this.handleOnClickBlue = this.handleOnClickBlue.bind(this);
//     this.handleOnClickRed = this.handleOnClickRed.bind(this);
//   }
//   handleOnClickBlue() {
//     this.setState({ msg: '파란색' });

//   }
//   handleOnClickRed() {
//     this.setState({ msg: '빨간색' });
//   }
//   render() {
//     return (
//       <>
//         <div>{this.state.msg}</div>
//         <button onClick={this.handleOnClickBlue}>파란색</button>
//         <button onClick={this.handleOnClickRed}>빨간색</button>
//       </>
//     );
//   }
// }

// export default ExClass;
import { useState } from 'react';

// function ColorChange() {
//   const [msg, setMsg] = useState('검정색');
//   const [color, setColor] = useState('black');

//   const changeColorRed = (e) => {
//     setMsg('빨간색');
//     setColor('red');
//   };
//   const changeColorBlue = (e) => {
//     setMsg('파란색');
//     setColor('blue');
//   };

//   return (
//     <>
//       <div style={{ color }}>{msg}</div>
//       <button onClick={changeColorRed}>빨강</button>
//       <button onClick={changeColorBlue}>파랑</button>
//     </>
//   );
// }

// function ChangeStatus() {
//   const [msg, setMsg] = useState('');

//   const showText = (e) => {
//     setMsg('안녕하세요');
//   };
//   const hideText = (e) => {
//     setMsg('');
//   };

//   return (
//     <>
//       <div>{msg}</div>
//       <button onClick={showText}>보여라</button>
//       <button onClick={hideText}>사라져라</button>
//     </>
//   );
// }

function ChangeEverything() {
  const [msg, setMsg] = useState('');
  const [fruit, setFruit] = useState('');
  const [img, setImg] = useState('');
  const [color, setColor] = useState('');
  const [colorBg, setColorBg] = useState('');

  const typeText = (e) => {};
  const chooseFruit = () => {
    setFruit();
  };
  const chooseImg = (e) => {
    setImg();
  };
  const chooseColor = (e) => {
    setColor();
  };
  const chooseColorBg = (e) => {
    setColorBg();
  };

  return (
    <>
      <input
        type='text'
        value={msg}
        onChange={(e) => {
          console.log(e.target);
          setMsg(e.target.value);
        }}
      ></input>
      <select
        onChange={(e) => setFruit(e.value)}
        option={chooseFruit}
        value={chooseFruit.filter(function (option) {
          return option.value === fruit;
        })}
      ></select>
      {/* <input type='select' value={fruit}></input>
      <input type='select' value={img}></input>
      <input type='select' value={color}></input>
      <input type='select' value={colorBg}></input> */}
      <div>{}</div>
    </>
  );
}
export default ChangeEverything;
