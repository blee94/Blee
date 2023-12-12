import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  /* @media screen and (max-width: 768px) {
    display: block;
  } */
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || 'black'};

  &:hover {
    transform: scale(1.1);
  }
`;

function StyledComponent() {
  return (
    <>
      <Container>
        <Box color='red' />
        <Box color='orange' />
        <Box color='yellow' />
        <Box color='green' />
        <Box color='blue' />
        <Box color='purple' />
        <Box />

        <div className='box red'></div>
        <div className='box orange'></div>
        <div className='box yellow'></div>
        <div className='box green'></div>
        <div className='box blue'></div>
        <div className='box purple'></div>
      </Container>
    </>
  );
}

export default StyledComponent;
