import styled from 'styled-components';

const Field = styled.div`
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

interface isRotateProp {
  isRotate: boolean;
}

const Dropdown = styled.div`
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  transform: ${({ isRotate }: isRotateProp) =>
    isRotate ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

const FieldMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  padding: 0 20px;
  margin-bottom: 8px;
  ${({ isRotate }: isRotateProp) => isRotate && 'display: none;'}

  & > div {
    min-width: 100%;
  }
`;

const FieldButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 20px 15px 20px;
  ${({ isRotate }: isRotateProp) => isRotate && 'display: none;'}
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

const DateInput = styled.input`
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
  min-height: 80px;
  max-height: 140px;
  overflow: auto;
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

const Input = styled.input`
  display: none;
`;

const PresentWrapper = styled.div`
  position: relative;
`;

export default {
  Field,
  FieldHead,
  Dropdown,
  FieldMain,
  FieldButtons,
  FieldButton,
  DateWrapper,
  DateInput,
  Textarea,
  Input,
  PresentWrapper,
};
