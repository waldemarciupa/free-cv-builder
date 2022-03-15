import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../features/profile/profileSlice';
import Label from './Label';
import CustomFileInput from './CustomFileInput';

const Container = styled.div`
  width: 50%;
`;

const Edit = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <form>
        <CustomFileInput />

        <Label>First name</Label>
        <input
          value={profile.name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <Label>Last name: </Label>
        <input />
      </form>
    </Container>
  );
};

export default Edit;
