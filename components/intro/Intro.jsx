import React from "react";
import Image from "next/image";
import introImg from "../../public/intro.png";
import styles from "../../components/intro/intro.module.css";

const Intro = () => {
  return (
    <>
      <div className="container mx-auto sm:flex sm:flex-row-reverse">
        <div className="px-4">
          <div className="w-full h-full">
            <Image src={introImg} alt="Description of the image" />
          </div>
        </div>
        <div className="px-4">
          <div className="sm:w-[535px] w-full h-auto sm:h-[270px] gap-10 mt-8 leading-[65px]">
            <p className="font-light text-sm ml-3 text-[20px]">Introducing</p>
            <h1 className={`text-[75px] mt-4 font-bold tracking-tight leading-[80px] ${styles.break}`}>
              All new
              <br />
              Ai-Powered
              <br />
              CaaS
            </h1>
          </div>

          <div className="w-[196.56px] h-[83px] mt-[40px]">
            <button
              className={`w-[150px] h-[63px] rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
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
