// import React, { Component } from "react";

// class ClassComponent extends Component {
//   render() {
//     return <h1>Class Component 입니다.</h1>;
//   }
// }

// export default ClassComponent;

import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  render() {
    return (
      <>
        <div> 이건 받아온 {text} 입니다</div>;
      </>
    );
  }
}

ClassComponent.defaultProps = {
  text: '이건 기본 텍스트 입니다.',
};
ClassComponent.propTypes = {
  text: PropTypes.string,
};

export default ClassComponent;
