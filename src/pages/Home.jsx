import { useState, useEffect, useContext } from "react";
import { getPokemon, getPokemons, getPokemonData } from "../api";

//components
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";
//context

import { FavoriteProvider } from "../context/favoriteContext";
import { PageContext } from "../context/pageContext";

const favoritesKey = "c";

const Home = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setfavorites] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * currentPage);

      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);

      setPokemons(result);
      setTotalPage(Math.ceil(data.count / 24));
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons", error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  const onSearch = async (pokemon) => {
    setNotFound(false);
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    const result = await getPokemon(pokemon);

    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPage(0);
      setTotalPage(1);
      setCurrentPage(0); //context
      setPokemons([result]);
      setLoading(false);
    }
  };

  const onLeftClick = () => {
    if (currentPage > 0 && !loading) {
      //setPage(page - 1);
      setCurrentPage(currentPage - 1);
    }
  };
  const onRightClick = () => {
    if (currentPage !== totalPage && !loading) {
      //setPage(page + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey));
    setfavorites(pokemons);
  };

  useEffect(() => {
    if (window.localStorage.getItem(favoritesKey)) {
      loadFavoritePokemons();
    }
  }, []);

  const updateFavPokemon = (name) => {
    const updatedList = [...favorites];

    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updatedList.slice(favoriteIndex, 1);
    } else {
      updatedList.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedList));
    setfavorites(updatedList);
  };

  return (
    <FavoriteProvider
      value={{
        favPokemon: favorites,
        updateFavPokemon: updateFavPokemon,
      }}
    >
      <div className="App">
        <Navbar />
        <SearchBar onSearch={onSearch} />

        {notFound ? (
          <p className="not-found">Pokemon não encontrado!</p>
        ) : (
          <>
            <Pagination
              page={currentPage + 1}
              totalPages={totalPage}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
              loading={loading}
            />
            <Pokedex pokemons={pokemons} loading={loading} />
            <Pagination
              page={currentPage + 1}
              totalPages={totalPage}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
              loading={loading}
            />
          </>
        )}
      </div>
    </FavoriteProvider>
  );
};

export default Home;
