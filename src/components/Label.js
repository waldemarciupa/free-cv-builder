import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  line-height: 1.25rem;
  font-weight: 700;
`;

const Label = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
