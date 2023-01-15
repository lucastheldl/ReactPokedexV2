import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
//context
import FavoriteContext from "../context/favoriteContext";
//css
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const { favPokemon, updateFavPokemon } = useContext(FavoriteContext);

  const onHearthClick = () => {
    updateFavPokemon(pokemon.name);
  };

  const heart = favPokemon.includes(pokemon.name) ? "💗" : "🖤";
  return (
    <div className="pokemon-card-container-div">
      <Link
        to={`/ReactPokedexV2/${pokemon.name}`}
        className="pokemon-card-container"
        id={pokemon.types[0].type.name}
      >
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <p>#{pokemon.id}</p>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return <p key={index}>{type.type.name}</p>;
              })}
            </div>
          </div>
        </div>
      </Link>
      <button className="favorite-button" onClick={onHearthClick}>
        {heart}
      </button>
    </div>
  );
};

export default PokemonCard;
