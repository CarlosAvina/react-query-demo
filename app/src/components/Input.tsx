import styled from "styled-components";

const Input = styled.input`
  background-color: hsl(220, 23%, 95%);
  height: 50px;
  border-style: solid;
  border-radius: 10px;
  padding: 0 10px;

  outline: none;

  font-family: Wotfard;
  color: hsl(220, 23%, 5%);
  font-size: 25px;
  font-weight: 300;
  line-height: 25.6px;

  &:focus {
    border-color: black;
  }
`;

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputComponent: React.FC<Props> = (props) => {
  const { value, onChange, placeholder } = props;
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
