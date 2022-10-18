import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api";

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

  return <div>{pokemon.name}</div>;
};

export default PokemonDetails;
