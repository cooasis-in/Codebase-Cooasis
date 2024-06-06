import React from "react";
import Image from "next/image";
import introImg from "../../public/intro.png";
import styles from "../../components/intro/intro.module.css";

const Intro = () => {
  return (
    <div className="container mx-auto flex  flex-col sm:flex-row items-center">
      <div className="w-full sm:w-1/2 flex flex-col items-start px-4">
        <p className="font-light text-sm text-gray-500">Introducing</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight sm:leading-tight md:leading-tight">
          All new
          <br />
          Ai-Powered
          <br />
          CaaS
        </h1>
        <button
          className={`mt-8 sm:mt-4 w-full sm:w-auto h-[63px] px-6 rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
        >
          Book a Demo
        </button>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <Image src={introImg} alt="AI-Powered CaaS" />
      </div>
    </div>
  );
};

export default Intro;
