import GlobalStyle from './globalStyles';
import Toolbar from './components/Toolbar/Toolbar';
import Container from './components/Container/Container';
import Edit from './components/View/Edit/Edit';
import Preview from './components/View/Preview/Preview';

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
