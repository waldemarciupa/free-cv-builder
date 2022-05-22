import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../../features/profile/profileSlice';
import Label from '../Label/Label';
import Styled from './FileInput.styled';

const FileInput = () => {
  const dispatch = useDispatch();
  const placeholder =
    'https://placehold.jp/f4f4f5/666666/118x118.png?text=photo.jpg';

  const [url, setUrl] = useState(placeholder);

  const handleChangeImage = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);

      if (url) {
        setUrl(url);
        dispatch(setImage(url));
      } else {
        setUrl(placeholder);
      }
    }
  };

  return (
    <div>
      <Label htmlFor='avatar'>Photo</Label>
      <div>
        <label htmlFor='avatar'>
          <Styled.Image height='200' alt='' src={url}></Styled.Image>
        </label>
        <Styled.Input
          type='file'
          id='avatar'
          name='avatar'
          accept='image/png, image/jpeg, image/webp'
          onChange={handleChangeImage}
        />
      </div>
    </div>
  );
};

export default FileInput;
