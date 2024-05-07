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
        <div className="mb-14 lg:mb-20" data-aos="zoom-out-down">
          <h2 className={`text-6xl lg:text-[93px] pt-10 ${styles.heading}`}>
            Plug in to the future
            <br />
            of design, today
          </h2>
          <div className={`flex justify-center ${styles.span}`}>
            <span className="text-6xl lg:text-[30px] text-center pt-4">
              Seamless online collaboration
            </span>
          </div>
        </div>

        {/* Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-right">
          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl sm:p-8 mx-auto flex flex-col  ${styles.sizing}`} 
          >
            <span className={`text-7xl self-end  font-bold ${styles.numberSpan}`}>1</span>
            <h1 className="font-bold py-16 mb-4 text-2xl h-[160px] text-white">
              Share briefs with
              <br /> our hassle free <br />
              guided flow
            </h1>

            <div className="mt-4">
              <Image src={pluginImg2} alt="Description of the image" />
            </div>
            <div className="flex">
              <div className="w-full md:w-[196.56px] px-2  h-[83px] mt-14 flex justify-center">
                <button
                  className={`w-[196px] md:w-[200px] h-[70px] rounded-full font-semibold text-black text-sm ${styles.btn}`}
                >
                  Browse all services
                </button>
              </div>
              <h1 className="mt-16 ">Get started in less than 5 mins</h1>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl sm:p-8 mx-auto flex flex-col  ${styles.sizing}`}
          >
            <span className={`text-7xl self-end  font-bold ${styles.numberSpan}`}>2</span>
            <h1 className="font-bold py-16 text-2xl h-[160px] text-white">
              Get matched with
              <br /> designer suuuuuuper fast
            </h1>

            <div className="mt-4 relative flex justify-center  items-center">
              <Image
                src={pluginImg3}
                alt="Description of the image"
                className="relative z-0 mt-3 p-4"
              />
              <Image
                src={pluginImg4}
                alt="Description of the image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 mt-[140px] p-8"
              />
            </div>
          </div>

          {/* Card 3 */}

          <div
            className={`w-full max-w-sm lg:gr bg-black rounded-3xl sm:p-8 mx-auto flex flex-col  ${styles.sizing}`}
          >
            <span className={`text-7xl self-end  font-bold ${styles.numberSpan}`}>3</span>
            <h1 className="font-bold py-16 text-2xl h-[160px] text-white">
              Track progress seamlessly all-in-one dashboard
            </h1>

            <div className="mt-20">
              <Image src={pluginImg} alt="Description of the image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PluginCard;
