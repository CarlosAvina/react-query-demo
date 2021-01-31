import styled from "styled-components";

import ListItem from "./ListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .item:not(:last-child) {
    margin-bottom: 10px;
  }
`;

interface IListItem {
  title: string;
  preview: string;
}

interface Props {
  items: Array<IListItem>;
  onClickItem: (title: string, body: string) => void;
}

const List: React.FC<Props> = ({ items, onClickItem }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ListItem
          className="item"
          title={item.title}
          preview={item.preview}
          onClick={onClickItem}
          key={Math.random()}
        />
      ))}
    </Wrapper>
  );
};

export default List;
