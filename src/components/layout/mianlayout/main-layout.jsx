import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/index";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
