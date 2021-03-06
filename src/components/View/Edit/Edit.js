import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setSurname,
  setPosition,
  setEmail,
  setPhone,
  setLocation,
} from '../../../features/profile/profileSlice';
import Label from '../../Label/Label';
import Input from '../../Input/Input';
import FileInput from '../../FileInput/FileInput';
import Section from '../../Section/Section';
import Skills from './Skills/Skills';
import Languages from './Languges/Languages';
import Employment from './Employment/Employment';
import Education from './Education/Education';

const Container = styled.div`
  width: 50%;
  padding: 20px 48px;
  overflow: auto;
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
        <Section
          heading={'Personal details'}
          description={` In this section you can enter your personal data, not all fields are
          required.`}
        >
          <InputWrapper display='flex' gap='28px'>
            <FileInput />
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
        </Section>
        <Employment />
        <Education />
        <Skills />
        <Languages />
      </form>
    </Container>
  );
};

export default Edit;
