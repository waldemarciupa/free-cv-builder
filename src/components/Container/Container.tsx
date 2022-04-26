import { ReactNode } from 'react';
import Styled from './Container.styled';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
