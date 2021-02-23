import * as React from "react";

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
    <div>
      {titles.map((title, index) => (
        <p id={index.toString()} key={title} onClick={handleTabClick}>
          {title}
        </p>
      ))}
      {Content}
    </div>
  );
};

export default Tabs;
