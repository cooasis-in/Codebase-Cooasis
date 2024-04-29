import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../ourServices/WebDesign.module.css";

const WebDesign = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  };

  const images = [
    "/webDesign.png",
    "/webDesign.png",
    "/webDesign.png",
    "/webDesign.png",
  ];

  return (
    <div className="container mx-auto">
      <div className=" text-center leading-none p-10 ">
        <h1 className="text-[60px] mt-2 font-bold tracking-tighter">
          All creative services
          <br />
          under one roof
        </h1>
      </div>
      <div className="mb-6">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="px-3" key={index}>
              <img src={image} alt="" className="w-full" />{" "}
              {/* Ensure images fill their container */}
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[196.56px] h-[83px] mt-[100px] m-auto">
            <button
              className={`w-[200px] h-[70px] rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn} `}
            >
              Browse all services
            </button>
          </div>
    </div>
  );
};

export default WebDesign;
