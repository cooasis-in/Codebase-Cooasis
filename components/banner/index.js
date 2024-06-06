import styles from "./index.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Change to "linear" for smoother transition
    rtl: true, // Enable right to left animation
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rtl: false, // Disable right to left animation on smaller screens
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.banner}>
        <div
          className="container mx-auto"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className={styles.heading}>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-[93px] pt-8 md:pt-16 ${styles.heading}`}
            >
              Unlock seamless
              <br />
              design solutions
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://www.producthunt.com/posts/cooasis?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cooasis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/product.svg"
              alt="cooasis - All-in-one Design Ecosystem | Product Hunt"
              className="w-[250px] h-[54px]"
              width="250"
              height="54"
            />
          </a>
        </div>
      </div>
      <div
        className={`${styles.del_projects} pt-6 md:pt-12 pb-12 md:pb-[150px] lg:pb-[160px]`}
      >
        <div className="container">
          <div className={styles.customers}>
            <p className="text-xs md:text-sm lg:text-base">
              89,266 Pixel-perfect projects delivered to 450+ happy customers
            </p>
          </div>
          <div className={styles.logos}>
            <Slider {...settings}>
              <div>
                <img src="images/logos.png" alt="" className="w-full" />
              </div>
              <div>
                <img src="images/logos.png" alt="" className="w-full" />
              </div>
              {/* Add more logo images here */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
