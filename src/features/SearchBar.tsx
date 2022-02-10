import { useState } from "react";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	
  return (
    <input
      type="text"
      id="search"
      placeholder="Search movies"
			onChange={event => setSearchValue(event.target.value)}
			value={searchValue} />
  );
}

export default SearchBar