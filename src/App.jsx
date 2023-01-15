import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import { PageContextProvider } from "./context/pageContext";

function App() {
  return (
    <div>
      <PageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ReactPokedexV2/" element={<Home />} />
            <Route path="/ReactPokedexV2/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </PageContextProvider>
    </div>
  );
}

export default App;
