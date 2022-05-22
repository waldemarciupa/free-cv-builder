import styled from 'styled-components';

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Image = styled.img`
  width: 118px;
  height: 118px;
  border-radius: 10px;
  cursor: pointer;
  object-fit: cover;
`;

export default { Input, Image };
