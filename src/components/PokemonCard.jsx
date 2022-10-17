import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card-container">
      <img
        className="pokemon-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="card-body">
        <div className="card-top">
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
        </div>
        <div className="card-bottom">
          <button>🖤</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
