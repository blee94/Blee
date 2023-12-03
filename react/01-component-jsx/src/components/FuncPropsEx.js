// 1.
// function FuncPropsEx(props) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props ) </div>
//       <div>
//         제목은{props.title}, 내용은{props.content}
//       </div>
//     </>
//   );
// }
// 2.
// function FuncPropsEx({title, content}) {
//   // 구조분해
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props ) </div>
//       <div>
//         제목은{title}, 내용은{content}
//       </div>
//     </>
//   );
// }
// 3.
// function FuncPropsEx(props) {
//   // 구조분해
//   const { title, content } = props;
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props ) </div>
//       <div>
//         제목은{title}, 내용은{content}
//       </div>
//     </>
//   );
// }
// 4. proptype을 이용해서 어떤 props가 넘어올지 명시
import PropTypes from 'prop-types';

function FuncPropsEx(props) {
  const { title, content, number } = props;
  return (
    <>
      <div>함수형 컴포넌트를 이용 ( Props ) </div>
      <div>
        제목은{title}, 내용은{content}, 숫자는{number}
      </div>
    </>
  );
}

// 지정한 객체가 안넘어왔을 때 디폴트로 입력할 값. 해도되고 안해도 됌.
FuncPropsEx.defaultProps = {
  title: '코딩온',
};

FuncPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};
export default FuncPropsEx;
