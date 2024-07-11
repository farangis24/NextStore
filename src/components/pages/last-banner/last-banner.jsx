import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const LastBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="lastBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="lastBanner.png"
              alt="image"
            />
          </div>
          <div>
            <img
              className="w-full rounded-[20px]"
              src="lastBanner.png"
              alt="image"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
