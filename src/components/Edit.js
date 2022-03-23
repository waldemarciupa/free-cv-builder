import { useState } from 'react';
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
  updateSkill,
} from '../features/profile/profileSlice';
import Label from './Label';
import CustomFileInput from './CustomFileInput';
import Input from './Input';

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

const EditField = styled.div`
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: inset 0 0 0 1px #878787;
`;

const EditFieldHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  & > div > div:first-child {
    font-weight: 700;
  }
`;

const EditFieldMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & > div {
    width: 100%;
  }
`;

const Dropdown = styled.button`
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  ${(props) => props.isRotate && 'transform: rotate(180deg);'}
`;

const Edit = () => {
  const [isRotate, setIsRotate] = useState(false);

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
          profile.skills.map((skill) => (
            <EditField key={skill.id}>
              <EditFieldHead>
                <div>
                  <div>
                    {skill.title ? skill.title : '[Skill not specified yet]'}
                  </div>
                  <div>{skill.level ? skill.level : <div>&nbsp;</div>}</div>
                </div>
                <div>
                  <Dropdown
                    isRotate={isRotate}
                    type='button'
                    onClick={() => {
                      setIsRotate(!isRotate);
                    }}
                  >
                    <svg
                      width='20'
                      height='20'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#878787'
                    >
                      <path d='M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z'></path>
                    </svg>
                  </Dropdown>
                </div>
              </EditFieldHead>
              <EditFieldMain>
                <div>
                  <Label>Skill: </Label>
                  <Input
                    placeholder='Enter your skill'
                    value={skill.title}
                    handler={(e) => {
                      dispatch(
                        updateSkill({
                          id: skill.id,
                          title: e.target.value,
                          level: skill.level,
                        })
                      );
                    }}
                  />
                </div>
                <div>
                  <Label>Level: </Label>
                  <Input
                    placeholder='Enter your level'
                    value={skill.level}
                    handler={(e) => {
                      dispatch(
                        updateSkill({
                          id: skill.id,
                          title: skill.title,
                          level: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
              </EditFieldMain>
            </EditField>
          ))}
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
