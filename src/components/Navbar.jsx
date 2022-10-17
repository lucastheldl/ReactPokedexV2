import React from "react";

const Navbar = () => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <img src={url} />
    </nav>
  );
};

export default Navbar;
