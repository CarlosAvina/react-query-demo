interface Props {
  children: React.ReactNode;
  currentApp: string;
  onChangeApp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TobBar: React.FC<Props> = ({ children, currentApp, onChangeApp }) => {
  return (
    <div>
      <div>
        <button type="button" onClick={onChangeApp}>
          {currentApp === "notes" ? "Notes" : "Rick & Morty"}
        </button>
      </div>
      {children}
    </div>
  );
};

export default TobBar;
