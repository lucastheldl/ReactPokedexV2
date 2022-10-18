import React from "react";
import { useState } from "react";
//css
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHander = () => {
    onSearch(search);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Busque por um pokemon"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHander}>Buscar</button>
    </div>
  );
};

export default SearchBar;
