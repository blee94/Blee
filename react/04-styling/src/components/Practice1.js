import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  width: ${(props) => props.size || ''};
  height: ${(props) => props.size || ''};
  background-color: ${(props) => props.color || ''};
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  position: ${(props) => props.position || 'relative'};
  border-radius: 50%;
  z-index: ${(props) => props.zIndex || ''};
`;

const Grass = styled.div`
  position: relative;
  right: ${(props) => props.right || ''};
  top: ${(props) => props.top || ''};
`;

function Practice1() {
  return (
    <>
      <Container>
        <Box color='blue' size='100px'>
          <Box size='30px' color='white' zIndex='998' top='20px' right='-10px'>
            <Box
              size='10px'
              color='black'
              zIndex='998'
              top='10px'
              right='0px'
            ></Box>
          </Box>
        </Box>

        <Box color='green' top='30px' right='50px' size='100px' />
        <Box color='orange' top='40px' right='80px' size='100px' />
        <Box color='red' top='40px' right='100px' size='100px' />
        <Box color='pink' top='50px' right='130px' zIndex='999' size='100px' />
        <Grass top='50px' right='300px'>
          <img src='/img/image.png' alt='grass' />
        </Grass>
      </Container>
    </>
  );
}

export default Practice1;
