import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screen/HomePage";
import { PlaceScreen } from "./screen/PlaceScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/placeorder" element={<PlaceScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
