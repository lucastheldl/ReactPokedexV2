import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ReactPokedexV2/" element={<Home />} />
          <Route path="/ReactPokedexV2/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
