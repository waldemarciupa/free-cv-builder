import styled from 'styled-components';
import Toolbar from './components/Toolbar/Toolbar';
import Edit from './components/View/Edit/Edit';
import Preview from './components/View/Preview/Preview';
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
