import React from "react";
import Image from "next/image";
import dashboardImg from "../../public/dashboard.png";
import styles from "./dashboard.module.css";
import caseStudyImg from "../../public/caseStudy-1.png";
import caseStudyImg2 from "../../public/caseStudy-2.png";

const Dashboard = () => {
  return (
    <>
      <div className={`container mx-auto px-4 rounded-[65px]  lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 ${styles.custom}`}>

        {/* Left Section */}
        <div className="text-center md:text-left" data-aos="zoom-in-right" data-aos-offset="200">
          <div className="text-4xl md:text-6xl mt-5 font-bold mb-8">
            <h1>Completely</h1>
            <h1>customizable</h1>
            <h1>dashboard</h1>
          </div>
          <div className="text-lg tracking-tighter mb-8">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <p>Velit officia consequat duis enim velit mollit.</p>
          </div>
          <div className="mt-8">
            <button className={`w-[200px] h-[70px] rounded-full font-semibold text-black text-lg ${styles.btn}`}>
              Browse all services
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4" data-aos="zoom-in-left">
          <Image src={dashboardImg} alt="Description of the image" className="w-full" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-4 lg:px-6 grid md:grid-cols-2 gap-8 items-center mt-8 lg:mt-12">
        {/* Part 1 */}
        <div className={`flex justify-center items-center p-5 rounded-[45px] ${styles.containerbg}`} data-aos="fade-right">
          <div className="p-4 bg-white">
            <h1 className="text-lg md:text-xl font-semibold mb-4">
              Accelerate creative speed
            </h1>
            <p className="text-sm md:text-base mb-4">
              Ultra turnaround times and unlimited scale
            </p>
            <button className="w-[160px] md:w-[180px] h-[60px] rounded-full font-semibold text-black text-sm md:text-base bg-white">
              Read case study
            </button>
          </div>
          <div className="w-full md:w-auto relative md:ml-10 mt-5 md:mt-0 flex justify-center md:justify-end">
            <Image src={caseStudyImg} alt="Description of the image" />
          </div>
        </div>

        {/* Part 2 */}
        <div className={`flex justify-center items-center p-5 rounded-[45px] ${styles.containerbg}`} data-aos="fade-left">
          <div className="p-4 bg-white">
            <h1 className="text-lg md:text-xl font-semibold mb-4">
              Increased creative performance
            </h1>
            <p className="text-sm md:text-base mb-4">
              Digital ads and brand assets that performs better (47% increase in trail rate backed by data)
            </p>
            <button className="w-[160px] md:w-[180px] h-[60px] rounded-full font-semibold text-black text-sm md:text-base bg-white">
              Read case study
            </button>
          </div>
          <div className="w-full md:w-auto relative md:ml-10 mt-5 md:mt-0 flex justify-center md:justify-end">
            <Image src={caseStudyImg2} alt="Description of the image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
