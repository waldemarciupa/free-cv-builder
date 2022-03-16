import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../features/profile/profileSlice';
import Label from './Label';
import CustomFileInput from './CustomFileInput';
import Input from './Input';

const Container = styled.div`
  width: 50%;
  padding: 20px 48px;
`;

const Heading = styled.h2`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  margin: 20px 0;
`;

const Edit = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <form>
        <Heading>Personal details</Heading>
        <CustomFileInput />
        <div>
          <Label>First name</Label>
          <Input
            value={profile.name}
            handler={(e) => {
              dispatch(setName(e.target.value));
            }}
          />
        </div>

        <div>
          <Label>Last name: </Label>
          <Input />
        </div>
      </form>
    </Container>
  );
};

export default Edit;
