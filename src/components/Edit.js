import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
`;

const Edit = ({ name, handler, imageHandler }) => {
  // TODO: check this function
  function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    let source = '';

    reader.onloadend = function () {
      preview.src = reader.result;
      source = reader.result;
      console.log(source);
      imageHandler(source);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }

  return (
    <Container>
      <form>
        {/* TODO: style input */}
        <input type='file' accept='image/*' onChange={previewFile} />
        <img src='' height='200' alt='Preview...'></img>
        <label>First name: </label>
        <input value={name} onChange={handler} />
        <label>Last name: </label>
        <input />
        <label>Image: </label>
      </form>
    </Container>
  );
};

export default Edit;
