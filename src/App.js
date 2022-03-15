import styled from 'styled-components';
import Toolbar from './components/Toolbar';
import Edit from './components/Edit';
import Preview from './components/Preview';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Toolbar />
      <Container>
        <Edit />
        <Preview />
      </Container>
    </>
  );
}

export default App;
