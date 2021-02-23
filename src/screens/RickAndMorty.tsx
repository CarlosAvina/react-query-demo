import Tabs from "../components/Tabs";

const RickAndMorty: React.FC = () => {
  return (
    <Tabs titles={["One", "Two", "Three"]}>
      <h1>One</h1>
      <h1>Two</h1>
      <button>Hola</button>
    </Tabs>
  );
};

export default RickAndMorty;
