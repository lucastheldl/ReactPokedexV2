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
  useEffect(() => {
    updateStatsBars();
  }, [pokemon]);

  const updateStatsBars = () => {
    let hpbar = document.body.querySelector("#hp-Bar");
    let atkbar = document.body.querySelector("#atk-Bar");
    let defbar = document.body.querySelector("#de-Bar");
    let velbar = document.body.querySelector("#vel-Bar");

    if (pokemon.length != 0) {
      hpbar.style.width = pokemon.stats[0].base_stat + "%";
      atkbar.style.width = pokemon.stats[1].base_stat + "%";
      defbar.style.width = pokemon.stats[2].base_stat + "%";
      velbar.style.width = pokemon.stats[5].base_stat + "%";
    }
  };

  return (
    <div>
      {pokemon.length != 0 && (
        <div
          className="pokemon-detail-container"
          id={pokemon.types[0].type.name}
        >
          <Link to={"/ReactPokedexV2/"} className="back-btn">
            ◀
          </Link>

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

          <div className="pokemon-image-container">
            <h1>{pokemon.name}</h1>
            <img
              className="pokemon-detail-image"
              src={pokemon.sprites.other["official-artwork"].front_default}
            />
          </div>

          <div className="pokemon-stats">
            <div className="Progress_Status">
              <span>HP:</span>
              <div className="bar-value" id="hp-Bar">
                <p>{pokemon.stats[0].base_stat}</p>
              </div>
            </div>

            <div className="Progress_Status">
              <span>ATK:</span>
              <div className="bar-value" id="atk-Bar">
                <p>{pokemon.stats[1].base_stat}</p>
              </div>
            </div>

            <div className="Progress_Status">
              <span>DEF:</span>
              <div className="bar-value" id="de-Bar">
                <p>{pokemon.stats[2].base_stat}</p>
              </div>
            </div>

            <div className="Progress_Status">
              <span>VEL:</span>
              <div className="bar-value" id="vel-Bar">
                <p>{pokemon.stats[5].base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
