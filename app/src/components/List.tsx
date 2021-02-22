import styled from "styled-components";

import ListItem from "./ListItem";
import { EmptyListIcon } from "../res/icons";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .item:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const EmptyListWrapper = styled.div`
  svg {
    width: 20rem;
    height: 20rem;
    margin-bottom: 40px;
  }
`;

interface IListItem {
  _id: string;
  title: string;
  body: string;
}

interface Props {
  items: Array<IListItem> | undefined;
  onClickItem: (id: string, title: string, body: string) => void;
}

const List: React.FC<Props> = ({ items, onClickItem }) => {
  if (items?.length === 0) {
    return (
      <EmptyListWrapper>
        <EmptyListIcon />
        <h1>No haz agregado notas</h1>
      </EmptyListWrapper>
    );
  }
  return (
    <ListWrapper>
      {items?.map((item) => (
        <ListItem
          className="item"
          id={item._id}
          title={item.title}
          preview={item.body}
          onClick={onClickItem}
          key={Math.random()}
        />
      ))}
    </ListWrapper>
  );
};

export default List;
