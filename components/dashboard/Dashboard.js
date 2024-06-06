import React from "react";
import Image from "next/image";
import dashboardImg from "../../public/dashboard.png";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={`container mx-auto px-4 lg:px-6 rounded-[65px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 ${styles.custom}`}>

        {/* Left Section */}
        <div className="text-center md:text-left p-6">
          <div className="text-4xl md:text-6xl mt-10 lg:mt-5 font-bold mb-8">
            <h1 className="text-center lg:text-left">Completely
              <br />
              customizable
              <br />
              dashboard</h1>
          </div>
          <div className="text-lg tracking-tighter mb-8">
            <p className="text-center lg:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              <br />
              Velit officia consequat duis enim velit mollit.</p>
          </div>
          <div className="mt-8 text-center lg:text-left">
            <button className={`w-[200px] h-[70px] rounded-full font-semibold text-black text-lg ${styles.btn}`}>
              Browse all services
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="py-3 lg:p-4 flex justify-center">
          <div className="w-full max-w-[637.61px]">
            <Image src={dashboardImg} alt="Description of the image" layout="responsive" width={637.61} height={640.8} />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6 lg:mt-4">
        {/* Part 1 */}
        <div className={`pl-8 py-8 pr-0 rounded-3xl sm:flex items-center ${styles.left_side}`}>
          <div className="content">
            <h3 className="text-[32px] font-semibold leading-[25.92px]">Accelerate creative speed</h3>
            <p className="mt-6 text-[12px] font-light leading-[13.62px]">Ultra turnaround times and unlimited scale</p>
            <button className={`mt-6 py-5 px-5 text-[20px] font-semibold rounded-full ${styles.button}`}>Read case study</button>
          </div>
          <div className="image flex justify-center mt-4 sm:mt-0">
            <img src="images/caseStudy-1.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Part 2 */}
        <div className={`pl-8 py-8 pr-0 rounded-3xl sm:flex items-center ${styles.left_side}`}>
          <div className="content">
            <h3 className="text-[32px] font-semibold leading-[25.92px]">Increased creative performance</h3>
            <p className="mt-6 text-[12px] font-light leading-[13.62px]">Digital ads and brand assets that performs better (47% increase in trail rate backed by data)</p>
            <button className={`mt-6 py-5 px-5 text-[20px] font-semibold rounded-full ${styles.button}`}>Read case study</button>
          </div>
          <div className="image flex justify-center mt-4 sm:mt-0">
            <img src="images/caseStudy-2.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
