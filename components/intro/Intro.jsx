import React from "react";
import Image from "next/image";
import introImg from "../../public/intro.png";
import styles from "../../components/intro/intro.module.css";

const Intro = () => {
  return (
    <>
      <div className="container mx-auto sm:flex sm:flex-row-reverse">
        <div className="p-8">
          <div className="w-full h-full">
            <Image src={introImg} alt="Description of the image" />
          </div>
        </div>
        <div className="p-4">
          <div className="sm:w-[535px] w-full h-auto sm:h-[270px] p-5 gap-10 mt-20 leading-[65px]">
            <p className="font-light text-sm ml-3">Introducing</p>
            <h1 className="text-[90px] mt-2 font-bold tracking-tight leading-[80px] word-break-break-all">
              All new
              <br />
              Ai-Powered
              <br />
              CaaS
            </h1>
          </div>

          <div className="w-[196.56px] h-[83px] mt-[100px]">
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
