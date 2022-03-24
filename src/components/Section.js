import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Heading = styled.h2`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  margin: 20px 0 2px;
`;

const Description = styled.p`
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: #737373;
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

const Section = ({ heading, description, children, btnText, clickHandler }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      {children}
      {btnText && (
        <Button
          type='button'
          onClick={() => {
            dispatch(clickHandler());
            console.log('dsa');
          }}
        >
          {btnText}
        </Button>
      )}
    </div>
  );
};

export default Section;
