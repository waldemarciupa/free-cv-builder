import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setImage } from '../features/profile/profileSlice';

const Container = styled.div`
  width: 50%;
`;

const Edit = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      dispatch(setImage(reader.result));
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
        <input
          value={profile.name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <label>Last name: </label>
        <input />
        <label>Image: </label>
      </form>
    </Container>
  );
};

export default Edit;
