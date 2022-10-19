import React from "react";
import { useState } from "react";
//css
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("pika");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
      console.log("sim");
    }
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
