import styled from "styled-components";

import ListItem from "./ListItem";

const Wrapper = styled.div`
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
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ListItem className="item" title={item.title} preview={item.preview} />
      ))}
    </Wrapper>
  );
};

export default List;