import React from "react";
import { Link } from "react-router-dom";
//css
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link
      to={`/${pokemon.name}`}
      className="pokemon-card-container"
      id={pokemon.types[0].type.name}
    >
      {console.log(pokemon)}
      <img
        className="pokemon-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="card-bottom">
          <p>#{pokemon.id}</p>
          <button className="favorite-button">🖤</button>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
