import axios from "axios";
import { useQuery } from "react-query";

const Example: React.FC = () => {
  const { data, isLoading, error } = useQuery("episodes", async () =>
    axios.get("https://rickandmortyapi.com/api/characters")
  );

  if (isLoading)
    return (
      <img
        style={{ width: "40%", height: "40%", objectFit: 'contain' }}
        src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"
        alt="loading"
      />
    );
  if (error)
    return (
      <img
        style={{ width: "40%", height: "40%", objectFit: 'contain' }}
        src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
        alt="loading"
      />
    );

  return <pre>{JSON.stringify(data?.data.results, null, 1)}</pre>;
};

export default Example;
