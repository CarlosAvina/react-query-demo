import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;

  .navbar {
    background-color: hsl(245, 100%, 60%);
    display: flex;
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  margin: 20px 10px;
  justify-self: end;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: #34495e;
  outline: none;
  cursor: pointer;
  color: white;
  font-family: "Wotfard";
`;

interface Props {
  children: React.ReactNode;
  currentApp: string;
  onChangeApp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TobBar: React.FC<Props> = ({ children, currentApp, onChangeApp }) => {
  return (
    <Wrapper>
      <div className="navbar">
        <Button onClick={onChangeApp}>
          {currentApp === "notes" ? "Notes" : "Rick & Morty"}
        </Button>
      </div>
      {children}
    </Wrapper>
  );
};

export default TobBar;
