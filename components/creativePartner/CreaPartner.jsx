import React from "react";
import styles from "../creativePartner/creativePartner.module.css";
import Image from "next/image";
import cardImg from "../../public/card.png";
import creativeImg from "../../public/creative partner.png";
import cardImg2 from "../../public/card2img.png";
import cardImg3 from "../../public/card3img.png";
import cardImg4 from "../../public/card4img.png";

const CreaPartner = () => {
  return (
    <>
      <div
        className={`bg-custom-yellow container mx-auto rounded-[65px] w-[85%] mt-10 ${styles.custom}`}
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
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={creativeImg}
            alt="Description of the image"
          />
        </div>

        {/* Card */}

        <div
          className="main flex flex-wrap justify-center gap-8 p-8"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
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

      <div className="main flex justify-center container mx-auto mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <Image
              className="p-4"
              src={cardImg3}
              alt="Description of the image"
            />
          </div>

          <div className="flex justify-center">
            <Image
              className="p-4"
              src={cardImg2}
              alt="Description of the image"
            />
          </div>

          <div className="flex justify-center">
            <Image
              className="p-4"
              src={cardImg4}
              alt="Description of the image"
            />
          </div>

          <div className="flex justify-center">
            <Image
              className="p-4"
              src={cardImg2}
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreaPartner;
