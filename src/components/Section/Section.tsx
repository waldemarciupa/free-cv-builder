import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import Styled from './Section.styled';

interface SectionProps {
  heading?: string;
  description?: string;
  children: ReactNode;
  btnText?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Section = ({
  heading,
  description,
  children,
  btnText,
  clickHandler,
}: SectionProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Styled.Heading>{heading}</Styled.Heading>
      <Styled.Description>{description}</Styled.Description>
      {children}
      {btnText && (
        <Styled.Button
          type='button'
          onClick={() => {
            dispatch(clickHandler);
          }}
        >
          {btnText}
        </Styled.Button>
      )}
    </div>
  );
};

export default Section;
