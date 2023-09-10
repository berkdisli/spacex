import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SearchBarProps {
  handler: (searchKey: string) => void;
}

function SearchBar({ handler }: SearchBarProps) {
  const [findKey, setFindKey] = useState<string>("");

  const updateState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value;
    setFindKey(searchKey);
    handler(searchKey); // Call the handler with the search key
  };

  return (
    <div className="search-body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a name..."
          value={findKey}
          onChange={updateState}
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
