import styled from "styled-components";

const Input = styled.input`
  background-color: hsl(220, 23%, 95%);
  height: 50px;
  border-style: solid;
  border-radius: 10px;

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

const InputComponent: React.FC = () => {
  return <Input type="text" />;
};

export default InputComponent;
