import styles from './index.module.css';

function EcosystemDesign() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-14 lg:mb-20">
          <h2 className={`text-6xl lg:text-[93px] md:text-[73px] pt-10 ${styles.heading}`}>
            Not just-a-design
            <br />
            house, but an
            <br />
            ecosystem of
            <br />
            design
          </h2>
          <div className={`flex justify-center ${styles.design}`}>
            <h5 className="text-6xl lg:text-[30px] text-center pt-9">
              Get access to the powerhouse of design system where
              <br /> you
              <span>earn, learn</span>
              and
              <span>grow</span>
              together.
            </h5>
          </div>
        </div>
        <div className="w-[196.56px] h-[83px] flex justify-center m-auto mt-[100px]">
            <button
              className={`w-[150px] h-[63px] rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
            >
              Know more
            </button>
          </div>
      </div>
    </>
  );
}

export default EcosystemDesign;