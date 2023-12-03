import { Component } from 'react';

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용(Props)</div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는
          {this.props.number}
        </div>
      </>
    );
  }
}

export default ClassPropsEx;
