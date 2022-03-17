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

const InputWrapper = styled.div`
  width: 100%;
  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
`;

const Edit = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <form>
        <Heading>Personal details</Heading>
        <InputWrapper display='flex' gap='28px'>
          <CustomFileInput />
          <InputWrapper>
            <InputWrapper display='flex' gap='28px'>
              <InputWrapper>
                <Label>First name</Label>
                <Input
                  value={profile.name}
                  placeholder='Enter your name'
                  handler={(e) => {
                    dispatch(setName(e.target.value));
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Last name: </Label>
                <Input placeholder='Enter your surname' />
              </InputWrapper>
            </InputWrapper>
            <InputWrapper>
              <Label>Position: </Label>
              <Input placeholder='Enter your wanted or current job position' />
            </InputWrapper>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Email: </Label>
          <Input placeholder='Enter your email' />
        </InputWrapper>
        <InputWrapper>
          <Label>Phone: </Label>
          <Input placeholder='Enter your phone number' />
        </InputWrapper>
      </form>
    </Container>
  );
};

export default Edit;
