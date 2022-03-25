import { useState } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { updateSkill } from '../features/profile/profileSlice';

const StyledField = styled.div`
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 20px;
  box-shadow: inset 0 0 0 1px #878787;
`;

const FieldHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
  margin-bottom: 8px;
  cursor: pointer;
  min-height: 68px;

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

const FieldMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  padding: 0 20px;
  margin-bottom: 8px;
  ${(props) => props.isRotate && 'display: none;'}

  & > div {
    min-width: 100%;
  }
`;

const FieldButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 20px 15px 20px;
  ${(props) => props.isRotate && 'display: none;'}
`;

const FieldButton = styled.button`
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

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(20px, auto) minmax(20px, auto);
  gap: 10px;
`;

const StyledDateInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 8px;
  padding: 12px;
  box-shadow: inset 0 0 0 1px #878787;

  @media (max-width: 1366px) {
    padding: 12px 2px 12px 8px;
  }
`;

const Textarea = styled.div`
  width: 100%;
  height: 120px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 8px;
  padding: 12px;
  box-shadow: inset 0 0 0 1px #878787;
`;

const Field = ({ skill, employment, deleteHandler }) => {
  const [isRotate, setIsRotate] = useState(false);
  const dispatch = useDispatch();

  const handleRotate = () => {
    setIsRotate(!isRotate);
  };

  return (
    <StyledField>
      <FieldHead isRotate={isRotate} onClick={handleRotate}>
        {skill && (
          <div>
            <div>{skill.title ? skill.title : '[Skill not specified yet]'}</div>
            <div>{skill.level ? skill.level : ' '}</div>
          </div>
        )}
        {employment && (
          <div>
            <div>
              {employment.position
                ? employment.position
                : '[Employment not specified yet]'}
            </div>
          </div>
        )}
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
      </FieldHead>
      <FieldMain isRotate={isRotate}>
        {skill && (
          <>
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
          </>
        )}
        {employment && (
          <>
            <div>
              <Label>Position: </Label>
              <Input
                placeholder='Enter your position'
                value={employment.position}
                handler={(e) => {}}
              />
            </div>
            <div>
              <Label>Employer: </Label>
              <Input
                placeholder='Enter your employer'
                value={employment.employer}
                handler={(e) => {}}
              />
            </div>
            <DateWrapper>
              <div>
                <Label>Start date: </Label>
                <StyledDateInput
                  type='date'
                  placeholder='Enter your start date'
                  value={employment.startDate}
                  onChange={(e) => {}}
                />
              </div>
              <div>
                <Label>End date: </Label>
                <StyledDateInput
                  type='date'
                  placeholder='Enter your end date'
                  value={employment.endDate}
                  onChange={(e) => {}}
                />
              </div>
            </DateWrapper>
            <div>
              <Label>City: </Label>
              <Input
                placeholder='Enter your City'
                value={employment.city}
                handler={(e) => {}}
              />
            </div>
            <div style={{ gridColumn: '1 / 3' }}>
              <Label>Description: </Label>
              <Textarea
                contentEditable
                suppressContentEditableWarning={true}
                placeholder='Enter your description'
                onChange={(e) => {}}
              >
                {employment.description}
              </Textarea>
            </div>
          </>
        )}
      </FieldMain>
      <FieldButtons isRotate={isRotate}>
        <FieldButton
          type='button'
          onClick={() => {
            dispatch(
              deleteHandler({
                id: skill ? skill.id : employment && employment.id,
              })
            );
          }}
        >
          Delete
        </FieldButton>
        <FieldButton type='button' onClick={handleRotate}>
          Save
        </FieldButton>
      </FieldButtons>
    </StyledField>
  );
};

export default Field;
