import { useState } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { updateSkill } from '../features/profile/profileSlice';

const StyledEditField = styled.div`
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 20px;
  box-shadow: inset 0 0 0 1px #878787;
`;

const EditFieldHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props.isRotate ? '15px 20px 15px 20px' : '15px 20px 0 20px'};
  margin-bottom: 8px;
  cursor: pointer;

  & > div > div:first-child {
    font-weight: 700;
  }
`;

const Dropdown = styled.div`
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  transform: ${(props) => (props.isRotate ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

const EditFieldMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 8px;
  ${(props) => props.isRotate && 'display: none;'}

  & > div {
    width: 100%;
  }
`;

const EditFieldButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 20px 15px 20px;
  ${(props) => props.isRotate && 'display: none;'}
`;

const EditFieldButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 6px 14px;
  display: grid;
  place-content: center;
  background-color: #f4f4f5;
  cursor: pointer;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(57, 76, 96, 0.15);
  }
`;

const EditField = ({ skill }) => {
  const [isRotate, setIsRotate] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledEditField key={skill.id}>
      <EditFieldHead
        isRotate={isRotate}
        onClick={() => {
          setIsRotate(!isRotate);
        }}
      >
        <div>
          <div>{skill.title ? skill.title : '[Skill not specified yet]'}</div>
          <div>{skill.level ? skill.level : <div>&nbsp;</div>}</div>
        </div>
        <div>
          <Dropdown isRotate={isRotate} type='button'>
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
      <EditFieldMain isRotate={isRotate}>
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
      <EditFieldButtons isRotate={isRotate}>
        <EditFieldButton type='button'>Delete</EditFieldButton>
        <EditFieldButton type='button'>Save</EditFieldButton>
      </EditFieldButtons>
    </StyledEditField>
  );
};

export default EditField;
