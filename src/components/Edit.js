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
        <div style={{ display: 'flex', gap: '28px' }}>
          <CustomFileInput />
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', gap: '28px' }}>
              <div style={{ width: '100%' }}>
                <Label>First name</Label>
                <Input
                  value={profile.name}
                  placeholder='Enter your name'
                  handler={(e) => {
                    dispatch(setName(e.target.value));
                  }}
                />
              </div>
              <div style={{ width: '100%' }}>
                <Label>Last name: </Label>
                <Input placeholder='Enter your surname' />
              </div>
            </div>

            <div>
              <div>
                <Label>Position: </Label>
                <Input placeholder='Enter your wanted or current job position' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label>Email: </Label>
          <Input placeholder='Enter your email' />
        </div>
        <div>
          <Label>Phone: </Label>
          <Input placeholder='Enter your phone number' />
        </div>
      </form>
    </Container>
  );
};

export default Edit;
