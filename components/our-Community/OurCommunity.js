import React from "react";
import styles from "./community.module.css";
import productImg from "../../public/product.png";
import Image from "next/image";

const OurCommunity = () => {
  return (
    <div
      className={`container mx-auto mt-10 rounded-[65px] p-5 md:p-10 ${styles.bgcustom}`}
    >
      <div className="text-center">
        <div
          className={`grid grid-cols-1 mx-auto rounded-[65px] p-5 relative ${styles.bgcustom}`}
        >
          <div className="left-side-image absolute left-[7%] bottom-[42%] hidden xl:block" data-aos="fade-right">
            <img src="images/left-side.png" alt="" />
          </div>
          <div className="text-center p-5">
            <h1
              className="text-[24px] md:text-[40px] lg:text-[70px] mt-2 font-bold tracking-tighter leading-[32px] md:leading-[50px] lg:leading-[70px]"
            >
              We are loved by our
              <br />
              community
            </h1>
            <p className="text-sm md:text-base mt-4 md:mt-8 lg:mt-12">
              Our community can back our work ethic, we excel in crafting
              standout designs
              <br /> for apps, websites, and branding tailored for startups and
              growing businesses.
            </p>
          </div>
          <div className="right-side-image absolute right-[5px] xxl:right-[5%] bottom-[15%] hidden xl:block" data-aos="fade-left">
            <img
              src="images/right-side.png"
              className="max-w-[250px] xxl:max-w-[100%]"
              alt=""
            />
          </div>
          <div className="flex justify-center mt-6 md:mt-10 p-5">
            <div className="max-w-[70%]">
              {" "}
              <Image src={productImg} alt="Description of the image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCommunity;
