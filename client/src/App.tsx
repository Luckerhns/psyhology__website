import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/routes";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { PublicRoutesEnum } from "./utils/consts";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        {isAuth
          ? privateRoutes.map((e) => (
              <Route path={e.path} key={e.path} element={<e.element />} />
            ))
          : publicRoutes.map((e) => (
              <Route path={e.path} key={e.path} element={<e.element />} />
            ))}
            <Route path="*" element={<Navigate to={PublicRoutesEnum.MainPath} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
