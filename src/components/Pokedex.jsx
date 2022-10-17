import React from "react";

//css
import "./Pokedex.css";
//components
import PokemonCard from "./PokemonCard";

const Pokedex = ({ pokemons, loading }) => {
  return (
    <div>
      {loading ? (
        <p className="loading-text">Carregando, calma ai...</p>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
