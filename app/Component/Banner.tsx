import React from 'react'
import Navbar from './Navbar'
import licious from "../Img/IMG_4563.png"
import fort from "../Img/IMG_4564.png"
import parl from "../Img/IMG_4565.png"
import trop from "../Img/IMG_4569.png"
import Image from 'next/image'
import Bgimg from "../../public/assest/Bitmap.png"

const Banner = () => {
  const content = (
    <>
    <Navbar/>
    <div className='max-w-[1990px]
     mx-auto flex flex-col justify-center 2x:pt-[197px] md:pt-[130px] pt-[90px] lg:pl-[291px]  pb-[50px]'>

    <h1 className='text-[#101D2C] font-semibold
    fade-in mx-auto md:mx-0 text-[20px] text-center lg:text-start sm:text-[30px] sm:leading-[40px] md:text-[35px] md:leading-[40px] lg:text-[47px]
    lg:leading-[59px]
     '>
      Website Development in India
    </h1>
    <h4 className='font-medium pt-[5px] fade-in md:pt-[15px] mx-auto md:mx-0 text-center lg:text-start text-[14px] sm:text-[14px] md:text-[16px]
    lg:text-[25px] text-[#101D2C] '>
      Create Stunning Websites For Your Online Business.
    </h4>
    <h1 className='text-[#101D2C] font-semibold
      text-center lg:text-start text-[19px] sm:leading-[40px] md:text-[21px] md:leading-[21px] lg:text-[29px]
    lg:leading-[29px] lg:pt-[31px] pt-[20px]
     '>
      Quick · Advanced · User-Friendly
    </h1>
    <div className='flex pt-[15px] md:pt-[46px] justify-center items-center lg:justify-start'>
    <button className='text-lg inline-flex bg-[#F66] text-white rounded-[31.5px] md:block px-[43px] py-[19px] content-center'>
       Get Started
   </button>
    </div>
    <div className='xl:pt-[50px] pt-[35px] max-w-[440px] mx-auto lg:mx-0 xl:pb-[230px] pb-[130px] justify-center items-center lg:justify-start'>
    <h4 className='font-medium  mx-auto md:mx-0 text-center  lg:text-start text-[12px] text-[#101D2C] '>
      IMPROVING COMPANIES YOU LOVE
    </h4>
    <div className='flex  flex-wrap-reverse max-w-[440px] max-h-[54px] pt-[10px] justify-center items-center lg:justify-start'>
      <Image src={licious} alt='' className='max-w-[92px] pr-[20px]'/>
      <Image src={fort} alt='' className='max-w-[92px] pr-[20px]'/>
      <Image src={parl} alt='' className='max-w-[92px] pr-[20px]'/>
      <Image src={trop} alt='' className='max-w-[92px] pr-[20px]'/>
    </div>
    </div>
    </div>
    </>
  )

  return (
    <div style={{ backgroundImage  : `url(${Bgimg.src})`}}
    className='bg-cover bg-center bg-no-repeat relative block '>
     {content}
    </div>

  )
}

export default Banner