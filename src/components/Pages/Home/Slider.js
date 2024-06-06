import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings} className="h-52 mb-36 max-md:mb-12">
        <div className="px-1">
          <img
            src="/img/slider01.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/slider02.png"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="px-1">
          <img
            src="/img/slider03.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/slider04.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="px-1">
          <img
            src="/img/slider05.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/slider06.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ReactSlider;
