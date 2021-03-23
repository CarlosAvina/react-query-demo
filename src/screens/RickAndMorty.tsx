import Tabs from "../components/Tabs";

import Example from "./rick&morty/Example";

const RickAndMorty: React.FC = () => {
  return (
    <Tabs titles={["One", "Two", "Three"]}>
      <Example />
      <h1>Two</h1>
      <button>Hola</button>
    </Tabs>
  );
};

export default RickAndMorty;
