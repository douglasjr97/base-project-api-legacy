import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Rotas: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />} />
      {/* <Route path="/launches" element={<Launches />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Rotas;
