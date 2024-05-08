import React from "react";
import Image from "next/image";
import introImg from "../../public/intro.png";
import styles from "../../components/intro/intro.module.css";

const Intro = () => {
  return (
    <>
      <div className="container mx-auto sm:flex sm:flex-row-reverse">
        <div className="px-4">
          <div className="w-full h-full md:mt-10">
            <Image src={introImg} alt="Description of the image" />
          </div>
        </div>
        <div className="px-4 mt-8 sm:w-full sm:max-w-md lg:max-w-none lg:mx-0">
          <div className="w-full sm:h-[270px] gap-10 leading-[65px]">
            <p className="font-light text-sm ml-3 text-[20px]">Introducing</p>
            <h1 className="text-[40px] sm:text-[75px] md:text-5xl md: mt-4 font-bold tracking-tight md:leading-[70px] lg:leading-[80px]">
              All new
              <br />
              Ai-Powered
              <br />
              CaaS
            </h1>
          </div>

          <div className="w-full mt-4 sm:w-auto sm:mt-8 md:mt-2">
            <button
              className={`w-full sm:w-[150px] h-[63px] rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;