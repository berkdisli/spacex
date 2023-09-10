import { useState, useEffect } from "react";
import { IResultProps } from "../types/Home";
import Detail from "../components/Detail";
import SearchBar from "../components/Searchbar";

const Home = () => {
  const [result, setResult] = useState<IResultProps[]>([]);
  const [found, setFound] = useState<boolean>(true);

  const onSearch = (foundLunches: any) => {
    if (foundLunches.length > 0) {
      setFound(true);
    } else if (foundLunches.length === 0) {
      setFound(false);
    }
  };

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://api.spacexdata.com/v5/launches", {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);
  return (
    <div className="home" style={{ marginTop: 150 }}>
      {result && <SearchBar result={result} handler={onSearch} />}
      {found}
      {result?.map((element, index) => (
        <Detail key={index} result={element} />
      ))}
    </div>
  );
};

export default Home;
