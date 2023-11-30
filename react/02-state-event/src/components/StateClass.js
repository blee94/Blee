import { Component } from 'react';

class StateClass extends Component {
  // 옛날 방식
  //   constructor(props) {
  // super: 부모 클래스의 생성자
  // super를 실행시켜야 this객체를 사용할 수 있다.

  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //   }

  //   만약 생성자를 구현하지 않으면 기본  생성자가 자동으로 실행된다.
  //   constructor(props){
  //     super(props)
  //   }
  // 이런식으로.

  //   최근 방식
  state = {
    number: 0,
    text: 'hello',
  };

  render() {
    return (
      <>
        <div>props 예시{this.props.name}</div>
        <h3>클래스형 컴포넌트 state</h3>
        <div>number state value {this.state.number}</div>
        <button
          onClick={() => {
            // state 변경은 보통 일반 변수 변경 시키듯이 변수에 값을 재할당 하는것이 아니고. state를 변경시키는 함수를 사용한다. 클래스형 컴포넌트는 setState메소드가 제공된다.
            // this.setState({ number: this.state.number + 1 });
            // this.setState({ number: this.state.number + 1 });

            // setState를 연달아 두번 사용할때 위처럼 사용할수 없음. setState는 비동기로 실행되기 때문.

            // 아래와 같이 콜백 해줘야함.
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </>
    );
  }
}

class PracClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <>
        <div>number: {this.state.number}</div>

        <button
          onClick={() => {
            this.setState((prevNumber) => {
              return { number: prevNumber.number + 1 };
            });
            this.setState((prevNumber) => {
              return { number: prevNumber.number + 1 };
            });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((prevNumber) => {
              return { number: prevNumber.number - 1 };
            });
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default PracClass;
