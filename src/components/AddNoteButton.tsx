import styled from "styled-components";

const Icon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className="feather feather-plus"
      viewBox="0 0 24 24"
    >
      <path d="M12 5L12 19"></path>
      <path d="M5 12L19 12"></path>
    </svg>
  );
};

const Circle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: hsl(245, 100%, 60%);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: transform 100ms;
  outline: none;
  border: 2px solid black;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  &:active {
    transform: translateY(5px);
  }
`;

interface Props {
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AddNoteButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <Circle className={className} onClick={onClick}>
      <Icon />
    </Circle>
  );
};

export default AddNoteButton;
