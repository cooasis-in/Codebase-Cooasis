import React from "react";
import webDesign from "../../public/webDesign.png";
import Image from "next/image";

const WebServices = () => {
  return (
    <>
      <div className="">
        <div className=" text-center leading-none p-10 ">
          <h1 className="text-[60px] mt-2 font-bold">
            All creative services
            <br />
            under one roof
          </h1>
        </div>
        {/* Web Designs Cards */}
        <div className="cards flex justify-center container mx-auto mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex justify-center">
              <Image
                className="p-4"
                src={webDesign}
                alt="Description of the image"
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="p-4"
                src={webDesign}
                alt="Description of the image"
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="p-4"
                src={webDesign}
                alt="Description of the image"
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="p-4"
                src={webDesign}
                alt="Description of the image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebServices;
