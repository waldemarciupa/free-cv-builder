import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setSurname,
  setPosition,
  setEmail,
  setPhone,
  setLocation,
  addSkill,
} from '../features/profile/profileSlice';
import Label from './Label';
import Input from './Input';
import CustomFileInput from './CustomFileInput';
import EditField from './EditField';

const Container = styled.div`
  width: 50%;
  padding: 20px 48px;
  overflow: auto;
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

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  display: grid;
  place-content: center;
  background-color: #f4f4f5;
  cursor: pointer;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(57, 76, 96, 0.15);
  }
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
                  placeholder='Enter your name'
                  value={profile.name}
                  handler={(e) => {
                    dispatch(setName(e.target.value));
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Last name: </Label>
                <Input
                  placeholder='Enter your surname'
                  value={profile.surname}
                  handler={(e) => {
                    dispatch(setSurname(e.target.value));
                  }}
                />
              </InputWrapper>
            </InputWrapper>
            <InputWrapper>
              <Label>Position: </Label>
              <Input
                placeholder='Enter your wanted or current job position'
                value={profile.position}
                handler={(e) => {
                  dispatch(setPosition(e.target.value));
                }}
              />
            </InputWrapper>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Email: </Label>
          <Input
            placeholder='Enter your email'
            value={profile.email}
            handler={(e) => {
              dispatch(setEmail(e.target.value));
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Phone: </Label>
          <Input
            placeholder='Enter your phone number'
            value={profile.phone}
            handler={(e) => {
              dispatch(setPhone(e.target.value));
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Location: </Label>
          <Input
            placeholder='Enter your location'
            value={profile.location}
            handler={(e) => {
              dispatch(setLocation(e.target.value));
            }}
          />
        </InputWrapper>
        <Heading>Skills</Heading>
        {profile.skills.length > 0 &&
          profile.skills.map((skill) => <EditField skill={skill} />)}
        <Button
          type='button'
          onClick={() => {
            dispatch(addSkill());
          }}
        >
          Add skill
        </Button>
      </form>
    </Container>
  );
};

export default Edit;
