import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import GamePage from "./components/GamePage/GamePage";
import HomePage from "./components/HomePage/HomePage";
import { useEffect } from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
