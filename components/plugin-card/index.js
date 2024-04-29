import styles from './index.module.css';

function PluginCard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-14 lg:mb-20">
          <h2 className={`text-6xl lg:text-[93px] pt-10 ${styles.heading}`}>
            Plug in to the future
            <br />
            of design, today
          </h2>
          <div className={`flex justify-center ${styles.span}`}>
            <span className="text-6xl lg:text-[30px] text-center pt-4">Seamless online collaboration</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class={`w-full max-w-sm p-4 lg:gr bg-black rounded-3xl sm:p-8 mx-auto ${styles.sizing}`}>

          </div>
          <div class={`w-full max-w-sm p-4 bg-black rounded-3xl sm:p-8 mx-auto ${styles.sizing}`}>

          </div>
          <div class={`w-full max-w-sm p-4 bg-black rounded-3xl sm:p-8 mx-auto ${styles.sizing}`}>

          </div>
        </div>
      </div>
    </>
  );
}

export default PluginCard;