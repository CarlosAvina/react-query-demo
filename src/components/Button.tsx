import styled, { StyledComponent } from "styled-components";

interface Props {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
}

const Button: StyledComponent<"button", React.FC<Props>> = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  height: 50px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  outline: none;
  font-family: Wotfard;
  font-weight: 600;
  min-width: 70px;

  &:active {
    filter: brightness(0.9);
  }
`;

export default Button;
