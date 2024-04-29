import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PreviousWork() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      },
    ]
  };

  const images = [
    'images/mask-slide-1.png',
    'images/mask-slide-2.png',
    'images/mask-slide-3.png',
    'images/mask-slide-4.png',
    'images/mask-slide-5.png'
  ]

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="mb-14 lg:mb-20">
          <h2 className={`text-6xl lg:text-[93px] pt-10 ${styles.heading}`}>A glimpse of
            <br />
            previous work</h2>
        </div>
        <div className='mb-6'>
          <Slider {...settings}>
            {images?.map((image, index) => (
              <div className='px-3'>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        <Slider {...settings2}>
          {images?.map((image, index) => (
            <div className='px-3'>
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default PreviousWork;