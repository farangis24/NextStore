import React from "react";
import Slider from "react-slick";

export const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="mainBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="mainBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="mainBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="mainBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="mainBanner.png"
              alt="image"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
