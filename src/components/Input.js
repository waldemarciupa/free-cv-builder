import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 8px;
  padding: 12px;
  box-shadow: inset 0 0 0 1px #878787;
`;

const Input = ({ value, placeholder, handler }) => {
  return (
    <StyledInput value={value} onChange={handler} placeholder={placeholder} />
  );
};

export default Input;
