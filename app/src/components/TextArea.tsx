import styled, { StyledComponent } from "styled-components";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextArea: StyledComponent<"textarea", React.FC<Props>> = styled.textarea`
  flex-grow: 1;
  resize: vertical;
  padding: 15px;

  background-color: hsl(220, 23%, 95%);
  height: 50px;
  border-width: 2px;
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

export default TextArea;
