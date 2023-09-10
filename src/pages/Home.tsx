import { useState, useEffect } from "react";
import { IResultProps } from "../types/Home";
import Detail from "../components/Detail";
import SearchBar from "../components/Searchbar";

const Home = () => {
  const [result, setResult] = useState<IResultProps[]>([]);
  const [filteredResult, setFilteredResult] = useState<IResultProps[]>(result);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://api.spacexdata.com/v5/launches", {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData);
      setFilteredResult(jsonData); // Initialize filteredResult with all results
    };

    api();
  }, []);

  const handleSearch = (searchKey: string) => {
    const filtered = result.filter((element) =>
      element.name.toUpperCase().includes(searchKey.toUpperCase())
    );
    setFilteredResult(filtered);
  };

  return (
    <div className="home" style={{ marginTop: 150 }}>
      <SearchBar handler={handleSearch} />
      {filteredResult.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredResult.map((element, index) => (
          <Detail key={index} result={element} />
        ))
      )}
    </div>
  );
};

export default Home;
