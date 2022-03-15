import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: 500;
`;

const Label = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
