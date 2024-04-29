import React from "react";
import Image from "next/image";
import dashboardImg from "../../public/dashboard.png";
import styles from "./dashboard.module.css";
import caseStudyImg from "../../public/caseStudy-1.png";
import caseStudyImg2 from "../../public/caseStudy-2.png";

const Dashboard = () => {
  return (
    <>
      <div
        className={`main container mx-auto rounded-[65px] grid grid-cols-1 mt-20 md:grid-cols-2 items-center p-8 ${styles.custom}`}
      >
        <div className="righ px-4 md:px-12 lg:px-28 text-center md:text-left">
          <div className="text-4xl md:text-6xl lg:text-6xl xl:text-8xl font-bold tracking-tighter leading-10 md:leading-60">
            <h1>Completely</h1>
            <h1>customizable</h1>
            <h1>dashboard</h1>
          </div>
          <div className="text-lg tracking-tighter mt-4">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <p>Velit officia consequat duis enim velit mollit.</p>
          </div>
          {/* Button */}
          <div className="w-full md:w-[196.56px] h-[83px] mt-14 flex justify-center">
            <button
              className={`w-[196px] md:w-[200px] h-[70px] rounded-full font-semibold text-black text-lg ${styles.btn}`}
            >
              Browse all services
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={dashboardImg} alt="Description of the image" />
        </div>
      </div>

      {/* Section 2 */}

      <div className="container mx-auto grid md:grid-cols-2  gap-8 mt-20 justify-center items-center">
        {/* Part 1 */}
        <div
          className={`flex justify-center items-center p-2 rounded-[45px] ${styles.containerbg}`}
        >
          <div className="md:mt-10 p-5">
            <h1 className="text-3xl font-semibold">
              Accelerate creative <br /> speed
            </h1>
            <p className="text-md  mt-8">
              Ultra turnaround times and unlimited scale
            </p>
            <div className="w-full md:w-[196.56px] h-[83px] mt-14 flex justify-center">
              <button className="w-[196px] md:w-[200px] h-[70px] rounded-full font-semibold text-black text-lg bg-white">
                Read case study
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto md:ml-10 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Image src={caseStudyImg} alt="Description of the image" />
          </div>
        </div>

        {/* Part 2 */}

        <div
          className={`flex justify-center items-center p-2 rounded-[45px] ${styles.containerbg}`}
        >
          <div className="md:mt-10 p-5 ">
            <h1 className="text-3xl font-semibold">
            Increased creative<br />performance
            </h1>
            <p className="text-md  mt-8">
            Digital ads and brand assets that performs better (47%<br/> increase in trail rate backed by data)
            </p>
            <div className="w-full md:w-[196.56px] h-[83px] mt-14 flex justify-center">
              <button className="w-[196px] md:w-[200px] h-[70px] rounded-full font-semibold text-black text-lg bg-white">
                Read case study
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto md:ml-10 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Image src={caseStudyImg2} alt="Description of the image" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
