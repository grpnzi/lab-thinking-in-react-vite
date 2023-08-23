import { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleSelect = (e) => {
    setQuery(e.target.value);

    props.filterProductList(e.target.value);
  };

  return (
    <div>
    <input type="text" value={query} placeholder="Search.." onChange={handleSelect}></input>
    </div>
  );
}

export default SearchBar;
