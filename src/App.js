import { useState } from 'react';
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
  // TODO: install redux toolkit, create one object with state
  const [name, setName] = useState('John');
  const [image, setImage] = useState(null);

  // TODO: check funtion name
  const handleChange = (e) => {
    console.log('Handle change');
    setName(e.target.value);
  };

  // TODO: check funtion name
  const handleImage = (test) => {
    console.log('Handle image');
    console.log(test);
    setImage(test);
  };

  return (
    <div>
      <Toolbar name={name} image={image} />
      <Container>
        <Edit name={name} handler={handleChange} imageHandler={handleImage} />
        <Preview name={name} image={image} />
      </Container>
    </div>
  );
}

export default App;
