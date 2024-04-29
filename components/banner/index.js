import styles from './index.module.css';

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className="container mx-auto">
          <div className={styles.heading}>
            <h2 className={`text-6xl lg:text-[93px] md:text-[73px] pt-10 ${styles.heading}`}>
              Unlock seamless
              <br />
              design solutions
            </h2>
            <div className={`pt-7 ${styles.center}`}>
              <img src="images/product.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.banner_logo}>
          <img src="images/banner-logo.png" alt="" />
        </div>
      </div>
      <div className={`${styles.del_projects} pt-12 pb-[100px] md:pb-[150px] lg:pb-[200px]`}>
        <div className="container">
          <div className={styles.customers}>
            <p>89,266 Pixel-perfect projects delivered to 450+ happy customers</p>
          </div>
          <div className={styles.logos}>
            <img src="images/logos.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;