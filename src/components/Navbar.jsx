import React from "react";
//context
import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Navbar = () => {
  const { favPokemon } = useContext(FavoriteContext);
  const url =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="navbar-container">
      <img src={url} />
      <div>{favPokemon.length}💗</div>
    </nav>
  );
};

export default Navbar;
