import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laout from "./Laout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
