import React from 'react'
import styles from './community.module.css'
import productImg from '../../public/product.png'
import Image from "next/image";

const OurCommunity = () => {
  return (
    <>
    <div className={`container grid grid-cols-1 mx-auto mt-10 rounded-[65px] p-10 ${styles.bgcustom}`}>
          <div className='text-center p-5'>
          <h1 className="text-[40px] md:text-[70px] mt-2 font-bold tracking-tighter leading-[70px] ">
          We are loved by our
          <br />
          community
        </h1>
        <p className='text-xl mt-8'>Our community can back our work ethic, we excel in crafting standout designs<br/> for apps, websites, and branding tailored for startups and growing businesses.</p>
          </div >
          <div className=' flex justify-center mt-10 p-10'>
          <Image src={productImg} alt="Description of the image" />
          </div>
    </div>
    </> 
  )
}

export default OurCommunity