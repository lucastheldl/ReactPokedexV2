import { useState, useEffect } from "react";
import { getPokemon, getPokemons, getPokemonData } from "../api";

//components
import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 0);

      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);

      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons", error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
    }
    setLoading(true);
    const result = await getPokemon(pokemon);

    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setLoading(false);
      setNotFound(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default Home;
