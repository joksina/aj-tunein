import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Stations from "./pages/Stations/Stations";
import StationDetails from "./pages/StationDetails/StationDetails";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Stations/>}/>
          <Route exact path="/stations" element={<Stations/>}/>
          <Route exact path="/station/details" element={<StationDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

