const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 발생할 수 있는 action을 return하는 함수
// 만든이유: action type의 이름이 바뀌더라도 action발생시키는 모든곳(dispatch를 사용한곳)에서 action.type을 다 변경 해줘야 함. 이를 해결하기 위해.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });
export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });

const initialValue = { number: 0 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREMENT': //INCREMENT 상수 선언 전
    case INCREMENT: //INCREMENT 상수 선언 후
      return { number: state.number + 1 };
    case 'DECREMENT':
    case DECREMENT:
      return { number: state.number - 1 };
    case 'PLUS':
    case PLUS:
      return { number: state.number + 1 };
    case 'MINUS':
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
