import Styled from './Input.styled';

interface InputProps {
  value: string;
  name: string;
  placeholder: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, name, placeholder, handler }: InputProps) => {
  return (
    <Styled.Input
      value={value}
      name={name}
      onChange={handler}
      placeholder={placeholder}
    />
  );
};

export default Input;
