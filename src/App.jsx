import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/mianlayout/main-layout";
import { Home } from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
