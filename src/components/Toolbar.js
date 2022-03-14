import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: #161b22;
  padding: 16px;
  display: grid;
  place-content: center;
`;

const Heading = styled.h1`
  font-size: 14px;
  color: #fff;
`;

const Toolbar = () => {
  return (
    <Container>
      <Heading>Resume</Heading>
    </Container>
  );
};

export default Toolbar;
