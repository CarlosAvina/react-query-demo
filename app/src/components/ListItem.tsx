import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: left;
  font-family: Wotfard;
  padding: 0 10px;
  max-width: 1000px;
  min-width: 500px;

  &:hover {
    cursor: pointer;
    background-color: rgb(200, 228, 245);
  }

  h3 {
    color: hsl(245, 100%, 60%);
    font-size: 22px;
    font-weight: 500;
    line-height: 35.2px;
    margin: 0;
    margin-top: 10px;
  }

  p {
    color: hsl(220, 23%, 5%);
    font-weight: 300;
    line-height: 25.6px;
    margin: 0;
    margin-bottom: 10px;
  }
`;

interface Props {
  id: string;
  title: string;
  preview: string;
  onClick: (id: string, title: string, body: string) => void;
  className: string;
}

const ListItem: React.FC<Props> = ({
  id,
  title,
  preview,
  onClick,
  ...otherProps
}) => {
  return (
    <Wrapper
      {...otherProps}
      id={id}
      onClick={() => onClick(id, title, preview)}
    >
      <h3>{title}</h3>
      <p>{preview}</p>
    </Wrapper>
  );
};

export default ListItem;
