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
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
