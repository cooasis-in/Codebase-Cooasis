import styles from './index.module.css';

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className="container mx-auto" data-aos="fade-right" data-aos-delay="400"> 
          <div className={styles.heading}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-[93px] pt-8 md:pt-16 ${styles.heading}`}>
              Unlock seamless
              <br />
              design solutions
            </h2>
            <div className={`pt-4 md:pt-7 pb-16 md:pb-0 ${styles.center}`}>
              <img src="images/product.svg" alt="" className="sm:w-auto w-[180px]" />
            </div>
          </div>
        </div>
        <div className={styles.banner_logo}>
          <img src="images/banner-logo.png" alt="" />
        </div>
      </div>
      <div className={`${styles.del_projects} pt-6 md:pt-12 pb-12 md:pb-[150px] lg:pb-[160px]`}>
        <div className="container">
          <div className={styles.customers}>
            <p className="text-xs md:text-sm lg:text-base">89,266 Pixel-perfect projects delivered to 450+ happy customers</p>
          </div>
          <div className={styles.logos} data-aos="zoom-in" >
            <img src="images/logos.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
