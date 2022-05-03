import { ReactNode } from 'react';
import Styled from './Label.styled';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <Styled.Label htmlFor={htmlFor}>{children}</Styled.Label>;
};

export default Label;
