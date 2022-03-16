import styled from 'styled-components';
import Toolbar from './components/Toolbar';
import Edit from './components/Edit';
import Preview from './components/Preview';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
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
