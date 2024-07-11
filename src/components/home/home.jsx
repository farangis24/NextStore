import React from "react";
import { MainBanner } from "../pages/main-banner";
import { MainProduct } from "../pages/main-product";
import { LastProduct } from "../pages/last-product";
import { LastBanner } from "../pages/last-banner";
import { Header } from "../layout/header";
// data
import { Category } from "../data/category";
import { Data } from "../data/data";

export const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <MainBanner />
      </main>
      <main className="container">
        <h1 className="text-[28px] font-semibold mb-[20px]">Kategoriyalar</h1>
        <div className="container flex flex-wrap gap-[10px] mb-[20px]">
          {Category.map((category) => (
            <MainProduct key={category.id} {...category} />
          ))}
        </div>
        <button className=" text-[18px] text-center py-[14px] w-full rounded-[10px] bg-[#efefef] mb-[54px] transition-transform transform hover:scale-105 hover:shadow-lg hover:text-blue-600">
          Batafsil
        </button>
      </main>
      <main className="container">
        <h1 className="mb-[18px] text-[28px]">Eng ko'p sotilgan</h1>
        <div className="flex flex-wrap gap-[20px] mb-[37px]">
          {Data.map((data) => (
            <LastProduct key={data.id} {...data} />
          ))}
        </div>
        <div className="flex flex-wrap gap-[20px] mb-[37px]">
          {Data.map((data) => (
            <LastProduct key={data.id} {...data} />
          ))}
        </div>
        <button className="text-[18px] text-center py-[14px] w-full rounded-[10px] bg-[#efefef] transition-transform transform hover:scale-105 hover:shadow-lg hover:text-blue-600 mb-[54px]">
          Ko'proq ko'rish
        </button>
      </main>
      <main className="container pb-[60px]">
        <LastBanner />
      </main>
      <main className="container">
        <h1 className="mb-[18px] text-[28px]">Eng ommabop</h1>
        <div className="flex flex-wrap gap-[20px] mb-[37px]">
          {Data.map((data) => (
            <LastProduct key={data.id} {...data} />
          ))}
        </div>
        <div className="flex flex-wrap gap-[20px] mb-[37px]">
          {Data.map((data) => (
            <LastProduct key={data.id} {...data} />
          ))}
        </div>
        <button className="text-[18px] text-center py-[14px] w-full rounded-[10px] bg-[#efefef] transition-transform transform hover:scale-105 hover:shadow-lg hover:text-blue-600 mb-[50px]">
          Ko'proq ko'rish
        </button>
      </main>
    </>
  );
};
