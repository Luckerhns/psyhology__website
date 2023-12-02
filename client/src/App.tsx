import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((e) => (
          <Route path={e.path} element={<e.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
