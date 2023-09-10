import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IResultProps } from "../types/Home";
import { useState, useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  result : IResultProps[];
}

function SearchBar({placeholder, handler, result }: SearchBarProps)  {
  const [findKey, setFindKey] = useState<string>("");
  const updateState = (event: React.ChangeEvent<HTMLInputElement>)  => {
    setFindKey(event.target.value)
    result.filter( element => element.name === findKey )
    console.log(findKey)
  }

//   useEffect(() => {
//     handler(result.filter((character)  =>{return character.name.toUpperCase().match(findKey.toUpperCase())}));
// }, [findKey]);

  return (
    <div className="search-body">
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={findKey}
          onChange={e => updateState(e)}
          className="search-input"
        />
        <Link to="#" className="search-btn">
          <FaSearch className="fas" />
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
