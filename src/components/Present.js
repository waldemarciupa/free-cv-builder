import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployment } from '../features/profile/profileSlice';

const StyledPresent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const PresentInput = styled.input`
  margin-right: 0;
  cursor: pointer;
`;

const PresentLabel = styled.label`
  cursor: pointer;
  padding-left: 3px;
`;

const Present = ({ employment }) => {
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  return (
    <StyledPresent>
      <PresentInput
        id={`present-${employment.id}`}
        type='checkbox'
        checked={isSelected}
        value={isSelected}
        onChange={() => {
          setIsSelected(!isSelected);
          dispatch(
            updateEmployment({
              id: employment.id,
              position: employment.position,
              employer: employment.employer,
              startDate: employment.startDate,
              endDate: !isSelected ? '' : new Date().toISOString().slice(0, 10),
              present: !employment.present,
              city: employment.city,
              description: employment.description,
            })
          );
        }}
      />
      <PresentLabel htmlFor={`present-${employment.id}`}>Present</PresentLabel>
    </StyledPresent>
  );
};

export default Present;
