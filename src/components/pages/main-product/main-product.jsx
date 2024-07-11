import React from "react";

export const MainProduct = ({ img, title }) => {
  return (
    <>
      <div className="group">
        <div className="bg-white w-[135px] h-[160px] pt-[10px] p-[33px] pl-[20px] pr-[20px] text-center rounded-[10px] transition-transform transform hover:scale-105 hover:shadow-lg">
          <img
            src={img}
            alt="img"
            className="transition-transform transform "
          />
          <h1 className="text-[12px] font-medium mt-2 ">{title}</h1>
        </div>
      </div>
    </>
  );
};
