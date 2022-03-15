import styled from 'styled-components';
import Toolbar from './components/Toolbar';
import Edit from './components/Edit';
import Preview from './components/Preview';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <div>
      <Toolbar />
      <Container>
        <Edit />
        <Preview />
      </Container>
    </div>
  );
}

export default App;
