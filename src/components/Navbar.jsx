import React from "react";
//context
import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";
//css
import "./Navbar.css";

const Navbar = () => {
  const { favPokemon } = useContext(FavoriteContext);
  const url =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="navbar-container">
      <img src={url} />
      <p>{favPokemon.length}💗</p>
    </nav>
  );
};

export default Navbar;
