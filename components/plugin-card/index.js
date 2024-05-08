import styles from "./index.module.css";
import Image from "next/image";
import pluginImg from "../../public/pluginImg1.png";
import pluginImg2 from "../../public/pluginImg2.png";
import pluginImg3 from "../../public/pluginImg3.png";
import pluginImg4 from "../../public/pluginImg4.png";

function PluginCard() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div
          className="mb-6 md:mb-10 lg:mb-14 xl:mb-20"
          data-aos="zoom-in-down"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-[93px] pt-6 md:pt-8 lg:pt-10 ${styles.heading}`}
          >
            Plug in to the future
            <br />
            of design, today
          </h2>
          <div className={`flex justify-center ${styles.span}`}>
            <span className="text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center pt-2 md:pt-4">
              Seamless online collaboration
            </span>
          </div>
        </div>

        {/* Cards*/}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl px-3 sm:p-6 md:pt-4 lg:pt-4 mx-auto flex flex-col  ${styles.sizing}`}
          >
            <span
              className={`text-7xl self-end  font-bold ${styles.numberSpan}`}
            >
              1
            </span>
            <h1 className="font-bold pb-16 pt-4 mb-4 text-2xl h-[160px] text-white text-center md:text-left">
              Share briefs with
              <br /> our hassle free <br />
              guided flow
            </h1>

            <div className="mt-4">
              <img src="images/plugingimg5.png" alt="Description of the image" />
            </div>
            <div className="mt-4">
              <img src="images/plugingimg6.png" alt="Description of the image" />
            </div>
            <div className="sm:flex items-center mt-8">
              <div className="w-full md:w-[196.56px] px-2  h-[83px] flex justify-center items-center">
                <button
                  className={`w-[196px] md:w-[200px] h-[70px] rounded-full font-semibold text-black text-sm ${styles.btn}`}
                >
                  Request Design
                </button>
              </div>
            <div className="text-center pb-7 pt-3 sm:pt-0 sm:pb-0">
            <p className={styles.custam}>Get started in less than 5 mins</p>
            </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl px-3 sm:p-6 md:pt-4 lg:pt-4 mx-auto flex flex-col  ${styles.sizing}`}
          >
            <span
              className={`text-7xl self-end  font-bold ${styles.numberSpan}`}
            >
              2
            </span>
            <h1 className="font-bold pb-16 pt-4 text-2xl h-[160px] text-white text-center md:text-left">
              Get matched with
              <br /> designer suuuuuuper fast
            </h1>

            <div className="mt-4 relative flex justify-center  items-center">
              <Image
                src={pluginImg3}
                alt="Description of the image"
                className="relative z-0 mt-[-50px] p-4"
              />
              <Image
                src={pluginImg4}
                alt="Description of the image"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:mt-[143px] md:mt-[124px] hidden md:block ${styles.fixed}}`}
              />
            </div>
          </div>

          {/* Card 3 */}

          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl px-3 sm:p-6 md:pt-4 lg:pt-4 mx-auto flex flex-col  ${styles.sizing}`}
          >
            <span
              className={`text-7xl self-end  font-bold ${styles.numberSpan}`}
            >
              3
            </span>
            <h1 className="font-bold pb-16 pt-4 text-2xl h-[160px] text-white text-center md:text-left">
              Track progress seamlessly all-in-one dashboard
            </h1>

            <div className="mt-10 sm:mt-20 pb-8">
              <Image src={pluginImg} alt="Description of the image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PluginCard;
