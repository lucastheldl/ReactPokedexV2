import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemon } from "../api";
//
import "./PokemonDetail.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemonDetail = async (id) => {
    setLoading(true);
    const result = await getPokemon(id);
    setPokemon(result);

    setLoading(false);
  };
  useEffect(() => {
    getPokemonDetail(id);
  }, []);

  return (
    <div>
      {pokemon.length != 0 && (
        <div
          className="pokemon-detail-container"
          id={pokemon.types[0].type.name}
        >
          <Link to={"/"} className="back-btn">
            ◀
          </Link>
          <h1>{pokemon.name}</h1>
          <img
            className="pokemon-detail-image"
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
          <div className="pokemon-info">
            <p>
              <span>ID:</span>
              {pokemon.id}
            </p>
            <p>
              <span>Altura:</span>
              {pokemon.height * 10} cm
            </p>
            <p>
              <span>Peso:</span>
              {Math.round(pokemon.weight * 0.453592)} Kg
            </p>
            <div className="pokemon-moves">
              <span>Habilidades:</span>
              {pokemon.abilities.map((ability, index) => {
                return <p key={index}>{ability.ability.name}</p>;
              })}
            </div>
            <div className="pokemon-types">
              <span>Tipo:</span>
              {pokemon.types.map((type, index) => {
                return <p key={index}>{type.type.name}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
