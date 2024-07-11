import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <section className="pt-[15px] pb-[15px] mb-[50px] bg-[#ffffff]">
          <div className="container">
            <ul className="flex">
              <li className="pr-[117px] pt-[10px]">
                <Link to="/">
                  <img src="logo.svg" alt="logo" />
                </Link>
              </li>
              <li className="pr-[60px]">
                <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-[8px] flex items-center gap-3  duration-300 ease-in-out transition-transform transform hover:scale-105 hover:shadow-lg">
                  Katalog
                </button>
              </li>
              <li>
                <form className="pr-[120px]">
                  <input
                    className="border border-gray-200 py-2 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mr-2"
                    type="text"
                    placeholder="Maxsulotlarni izlash"
                  />
                </form>
              </li>
              <li className="gap-[100px] flex">
                <img
                  src="header.svg"
                  alt="icon"
                  className="transition-transform transform hover:scale-105 hover:shadow-lg"
                />
                <img
                  src="header2.svg"
                  alt="icon"
                  className="transition-transform transform hover:scale-105 hover:shadow-lg"
                />
              </li>
              <li className="pl-[100px]">
                <button className="p-3 px-6 bg-gradient-to-r from-blue-300 to-red-300 rounded-[10px] duration-300 ease-in-ou transition-transform transform hover:scale-105 hover:shadow-lgt ">
                  Kirish
                </button>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
};
