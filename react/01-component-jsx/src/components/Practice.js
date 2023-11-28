import PropTypes from 'prop-types';
import image from './book.png';

function PracPropsEx(props) {
  const { title, author, price, type } = props;
  return (
    <>
      <div className='bookConatiner'>
        <h2 className='steady'>이번주 베스트 셀러</h2>
        <img src={image} alt='bookImg' />
        <div className='bookInfo'>
          <b>{title}</b>
        </div>
        <br />
        <div className='bookInfo'>저자: {author}</div>
        <div className='bookInfo'>판매가: {price}</div>
        <div className='bookInfo'>구분: {type}</div>
      </div>
    </>
  );
}

PracPropsEx.defaultProps = {
  food: 'any food',
};
PracPropsEx.propTypes = {
  food: PropTypes.string,
};

export default PracPropsEx;
