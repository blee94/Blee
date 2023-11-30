import { Component } from 'react';

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello',
    };

    // 함수 선언문을 사용하여 메소드를 만들때에는 메소드 내부에서 클래스의 this를 사용하고 싶은 경우, 생성자 내에서 this를 bind해주는 작업을 거쳐야 함.
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  //   함수 선언문(동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정)
  //    여기 내부에서 자체적인 this를 만들어버림. 그렇기때문에 메소드에서 this를 바인드 해주는거임.
  //   해결법 1. 생성자 내부에서 this를 원하는것으로 바인딩 한다.
  handleOnClick() {
    this.setState({ msg: 'bye' });
  }

  //   함수 표현식(함수가 선언될 때 this를 결정)
  //   해결법2. 함수 선언문을 사용하지 않고 함수 표현식을 사용한다. (부모에 있는 this를 그대로 사용) 문제점: 코드가 길어지면 jsx파일을 읽기 힘들어진다.그렇기 때문에 위의 코드처럼 함수를 따로 빼고 바인딩 해주는게 좋다.
  handleOnClickHello = () => {
    this.setState({ msg: 'hello' });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event 핸들링</h3>

        {this.state.msg}
        {/* 여기 온클릭에서 함수를 실행시키면 안됌! */}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        <button
          // e 는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고있음.
          onClick={(e) => {
            // target으로 event가 걸린 태그를 확인가능
            console.log('target: ', e.target);
            // type으로
            console.log('type: ', e.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
