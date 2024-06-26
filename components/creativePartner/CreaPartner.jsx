import React from "react";
import styles from "../creativePartner/creativePartner.module.css";
import Image from "next/image";
import cardImg from "../../public/card.png";
import creativeImg from "../../public/creative partner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CreaPartner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '180px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: '220px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '140px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "90px",
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      },
    ]
  };

  const images = [
    'images/card1img.png',
    'images/card2img.png',
    'images/card3img.png',
    'images/card4img.png',
    'images/card5img.png'
  ]

  return (
    <>
      <div
        className={`bg-custom-yellow container mx-auto rounded-[65px] mt-20 ${styles.custom}`}
      >
        <div className="text-center w-full max-w-[600px] flex justify-center mx-auto p-6">
          {/* <h1 className="text-4xl mt-20 font-bold leading-none text-center">
    Say hello to your
    <br />
    new creative
    <br />
    partner!
  </h1> */}
          <Image
            className="mt-20 max-w-full h-auto"
            src={creativeImg}
            alt="Description of the image"
          />
        </div>

        {/* Card */}

        <div
          className="main flex flex-wrap justify-center gap-8 p-8"
          data-aos="zoom-in-down"
        >
          <div className="opacity-70">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="p-4"
                  src={cardImg}
                  alt="Description of the image"
                />
              </figure>
              <div className="card-body p-5">
                <p className="font-bold text-black text-center">
                  Super flexible subscription <br /> model
                </p>
              </div>
            </div>
          </div>

          <div className="opacity-70">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="p-4"
                  src={cardImg}
                  alt="Description of the image"
                />
              </figure>
              <div className="card-body p-5">
                <p className="font-bold text-black text-center">
                  Super flexible subscription <br /> model
                </p>
              </div>
            </div>
          </div>

          <div className="opacity-70">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  className="p-4"
                  src={cardImg}
                  alt="Description of the image"
                />
              </figure>
              <div className="card-body p-5">
                <p className="font-bold text-black text-center">
                  Super flexible subscription <br /> model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card section-2 */}

      <div className="container mx-auto mt-5">
          <div className="mb-6">
            <Slider {...settings}>
              {images?.map((image, index) => (
                <div className='px-3' key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
      </div>
    </>
  );
};

export default CreaPartner;
