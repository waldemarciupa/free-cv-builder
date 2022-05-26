import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateSkill,
  updateEmployment,
  updateLanguage,
} from '../../features/profile/profileSlice';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Present from '../Present/Present';
import Styled from './Field.styled';

interface FieldProps {
  skill?: any;
  language?: any;
  employment?: any;
  deleteHandler: any;
}

const Field = ({ skill, language, employment, deleteHandler }: FieldProps) => {
  const [isRotate, setIsRotate] = useState(false);
  const dispatch = useDispatch();

  const handleRotate = () => {
    setIsRotate(!isRotate);
  };

  return (
    <Styled.Field>
      <Styled.FieldHead onClick={handleRotate}>
        {skill && (
          <div>
            <div>{skill.title ? skill.title : '[Skill not specified yet]'}</div>
            <div>{skill.level ? skill.level : ' '}</div>
          </div>
        )}
        {language && (
          <div>
            <div>
              {language.name ? language.name : '[Language not specified yet]'}
            </div>
            <div>{language.level ? language.level : ' '}</div>
          </div>
        )}
        {employment && (
          <div>
            <div>
              {employment.position
                ? employment.position
                : '[Employment not specified yet]'}
            </div>
            <div>{employment.employer ? employment.employer : ' '}</div>
          </div>
        )}
        <div>
          <Styled.Dropdown isRotate={isRotate} role='button'>
            <svg
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
              fill='#878787'
            >
              <path d='M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z'></path>
            </svg>
          </Styled.Dropdown>
        </div>
      </Styled.FieldHead>
      <Styled.FieldMain isRotate={isRotate}>
        {skill && (
          <>
            <div>
              <Label htmlFor='Skill'>Skill: </Label>
              <Input
                placeholder='Enter your skill'
                value={skill.title}
                name='Skill'
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
              <Label htmlFor='Level'>Level: </Label>
              <Input
                placeholder='Enter your level'
                value={skill.level}
                name='Level'
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
        {language && (
          <>
            <div>
              <Label htmlFor='Language'>Language: </Label>
              <Input
                placeholder='Enter your language'
                value={language.name}
                name='Language'
                handler={(e) => {
                  dispatch(
                    updateLanguage({
                      id: language.id,
                      name: e.target.value,
                      level: language.level,
                    })
                  );
                }}
              />
            </div>
            <div>
              <Label htmlFor='Level'>Level: </Label>
              <Input
                placeholder='Enter your level'
                value={language.level}
                name='Level'
                handler={(e) => {
                  dispatch(
                    updateLanguage({
                      id: language.id,
                      name: language.name,
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
              <Label htmlFor='Position'>Position: </Label>
              <Input
                placeholder='Enter your position'
                name='Position'
                value={employment.position}
                handler={(e) => {
                  dispatch(
                    updateEmployment({
                      id: employment.id,
                      [e.target.name]: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div>
              <Label htmlFor='Employer'>Employer: </Label>
              <Input
                placeholder='Enter your employer'
                name='Employer'
                value={employment.employer}
                handler={(e) => {
                  dispatch(
                    updateEmployment({
                      id: employment.id,
                      [e.target.name]: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <Styled.DateWrapper>
              <div>
                <Label htmlFor='startDate'>Start date: </Label>
                <Styled.DateInput
                  type='date'
                  placeholder='Enter your start date'
                  name='startDate'
                  value={employment.startDate}
                  onChange={(e) => {
                    dispatch(
                      updateEmployment({
                        id: employment.id,
                        [e.target.name]: e.target.value,
                      })
                    );
                  }}
                />
              </div>
              <Styled.PresentWrapper>
                <Label htmlFor='endDate'>End date: </Label>
                <Styled.DateInput
                  type='date'
                  placeholder='Enter your end date'
                  name='endDate'
                  disabled={employment.present}
                  value={employment.present ? '' : employment.endDate}
                  onChange={(e) => {
                    dispatch(
                      updateEmployment({
                        id: employment.id,
                        [e.target.name]: e.target.value,
                      })
                    );
                  }}
                />
                <Present employment={employment} />
              </Styled.PresentWrapper>
            </Styled.DateWrapper>
            <div>
              <Label htmlFor='City'>City: </Label>
              <Input
                placeholder='Enter your City'
                name='City'
                value={employment.city}
                handler={(e) => {
                  dispatch(
                    updateEmployment({
                      id: employment.id,
                      [e.target.name]: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div style={{ gridColumn: '1 / 3' }}>
              <Label htmlFor='Description'>Description: </Label>
              <Styled.Textarea
                contentEditable
                suppressContentEditableWarning={true}
                placeholder='Enter your description'
                role='textarea'
                onInput={(e) => {
                  dispatch(
                    updateEmployment({
                      id: employment.id,
                      position: employment.position,
                      employer: employment.employer,
                      startDate: employment.startDate,
                      endDate: employment.endDate,
                      present: employment.present,
                      city: employment.city,
                      description: e.currentTarget.textContent,
                    })
                  );
                }}
              />
              <Styled.Input name='Description' aria-label='hidden' />
            </div>
          </>
        )}
      </Styled.FieldMain>
      <Styled.FieldButtons isRotate={isRotate}>
        <Styled.FieldButton
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
        </Styled.FieldButton>
        <Styled.FieldButton type='button' onClick={handleRotate}>
          Save
        </Styled.FieldButton>
      </Styled.FieldButtons>
    </Styled.Field>
  );
};

export default Field;
