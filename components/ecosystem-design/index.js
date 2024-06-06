import styles from './index.module.css';

function EcosystemDesign() {
  return (

   <div className="container mx-auto mt-4 lg:mt-20">
  <div className="mb-6 lg:mb-10">
    <h2 className={`text-3xl md:text-6xl lg:text-[93px] md:text-[73px] pt-10 ${styles.heading}`}>
      Not just-a-design
      <br />
      house, but an
      <br />
      ecosystem of
      <br />
      design
    </h2>
    <div className={`flex justify-center ${styles.design}`}>
      <h5 className="text-2xl md:text-6xl lg:text-[30px] text-center pt-9">
        Get access to the powerhouse of design system where
        <br /> you
        <span> earn, learn </span>
        and
        <span> grow </span>
        together.
      </h5>
    </div>
  </div>
  <div className="">
    <button
      className={`w-[150px] h-[63px] rounded-full m-auto font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
    >
      Know more
    </button>
  </div>
  </div>
);
}

export default EcosystemDesign;
