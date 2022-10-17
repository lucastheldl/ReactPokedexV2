import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHander = () => {
    onSearch(search);
  };

  return (
    <div>
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
