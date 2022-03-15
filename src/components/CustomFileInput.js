import styled from 'styled-components';
import Label from './Label';
import { useDispatch } from 'react-redux';
import { setImage } from '../features/profile/profileSlice';

const CustomFileInput = () => {
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
    <div>
      <Label>Photo</Label>
      <div>
        <Label htmlFor='photo'>
          <StyledImage
            src='http://placehold.jp/f4f4f5/ffffff/100x100.png?text=photo.jpg'
            height='200'
            alt=''
          ></StyledImage>
        </Label>
        <StyledInput
          id='photo'
          type='file'
          accept='image/*'
          onChange={previewFile}
        />
      </div>
    </div>
  );
};

const StyledInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  cursor: pointer;
`;

export default CustomFileInput;
