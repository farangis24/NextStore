import React from "react";

export const LastProduct = ({ name, img, title, price, button }) => {
  return (
    <>
      <div className="bg-white rounded-[10px] w-[230px] ">
        <img className="w-full " src={img} alt="img" />
        <h1 className="text-[18px] text-primary mb-[5px]">{price}</h1>
        <h1 className="text-[15px] mb-[25px]">{name}</h1>
        <h1 className="text-#333 text-[15px] mb-[20px] ">{title}</h1>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-[10px] text-center text-white px-[20px] py-[10px]">
          {button}
        </button>
      </div>
    </>
  );
};
