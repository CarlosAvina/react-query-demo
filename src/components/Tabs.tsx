import * as React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: min-content 1fr;

  .content {
    grid-row: -2 / -1;
    grid-column: 1 / 4;
  }
`;

interface TabProp {
  selected: boolean;
}

const Tab = styled.div<TabProp>`
  grid-row: 1 / 2;
  background-color: hsl(242, 15%, 63%);
  cursor: pointer;
  color: white;

  ${({ selected }) =>
    selected &&
    css`
      background-color: hsl(242, 85%, 63%);
    `}
`;

interface Props {
  titles: Array<string>;
  children: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ titles, children }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleTabClick(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) {
    const tabId = Number(event.currentTarget.id);
    setCurrentIndex(tabId);
  }

  const Content: React.ReactNode = React.Children.map(
    children,
    (child, index) => {
      if (index === currentIndex) {
        return child;
      }
    }
  )?.filter((item) => item !== undefined)[0];

  return (
    <Wrapper>
      {titles.map((title, index) => (
        <Tab key={title} selected={currentIndex === index}>
          <p id={index.toString()} onClick={handleTabClick}>
            {title}
          </p>
        </Tab>
      ))}
      <div className="content">{Content}</div>
    </Wrapper>
  );
};

export default Tabs;
