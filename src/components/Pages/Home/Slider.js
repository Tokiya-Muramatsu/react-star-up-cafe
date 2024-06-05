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
            src="/img/cake-1284548_640.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/ai-generated-8770644_640.png"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="px-1">
          <img
            src="/img/cake-1850011_640.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/coffee-2605196_640.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="px-1">
          <img
            src="/img/cake-1971552_640.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
        <div className="">
          <img
            src="/img/coffee-563797_640.jpg"
            alt=""
            className="h-72 max-md:h-44"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ReactSlider;
