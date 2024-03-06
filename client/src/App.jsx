import React from "react";
import { Routes, Route } from "react-router-dom";
import { Game } from "./components/Game/Game.jsx";
import { Results } from "./components/Results/Results.jsx";
import { Hexgrid } from "./components/Results/Map/Hexgrid.jsx";
import "./App.css";

export function App() {

  return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/results" element={<Results />} />
            <Route path="/map" element={<Hexgrid />} />
          </Routes>
        </div>
  );
}

export default App;
