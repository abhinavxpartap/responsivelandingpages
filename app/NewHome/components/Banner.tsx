import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Img from "../utilites/Img"

interface Bannertype{
  title:string;
  desc:string;
  button:string;
  Gimg:string;
  Aimg:string;
  bgImg:string
}

const Banner: React.FC<Bannertype> = (props) => {
   const {title , desc , button , Gimg , Aimg ,bgImg} = props

    const content = (
        <>
        <Navbar/>
        <div className='max-w-[1440px]
         mx-auto flex flex-col justify-center 2x:pt-[225px] md:pt-[130px] pt-[90px] md:pl-[70px] lg:pl-[100px] xl:pl-[130px] pb-[50px]'>
    
        <h1 className='text-[#fff] font-semibold font-Montserrat not-italic
        fade-in mx-auto md:mx-0 text-[21px] text-center md:text-start sm:text-[30px] sm:leading-[40px] md:text-[40px] md:leading-[40px] lg:leading-[55px] lg:text-[45px] xl:text-[50px]
        xl:leading-[65px] max-w-[727px] px-[10px]
         '>
          {title}
        </h1>

        <h4 className='font-medium pt-[5px] fade-in font-Montserrat md:pt-[15px] mx-auto md:mx-0 text-center md:text-start text-[14px] sm:text-[16px] 
        md:text-[18px] text-[#fff] leading-[30px] max-w-[600px] px-[10px] md:pr-[92px]'>
           {desc}
        </h4>
        <div className='flex pt-[15px] md:pt-[30px] mx-auto md:mx-0 justify-center items-center md:justify-start'>
        <button className='text-[16px] max-h-[50px] text-center md:w-[215px] leading-normal uppercase inline-flex bg-[#BAB28E] font-Montserrat text-white rounded-[37.5px] md:block px-[30px] pt-[14px] pb-[16px] '>
           {button}
       </button>
        </div>
        <div className='md:pt-[40px] pt-[25px] flex max-w-[333px] mx-auto md:mx-0 lg:pb-[217px] pb-[130px] px-[10px] md:px-0 justify-center items-center md:justify-start gap-[15px] md:gap-[25px]'>
           <button className="max-w-[154px] max-h-[51.358px]">
             <Img src={Gimg} alt='' />
            </button>
            <button className="max-w-[154px] max-h-[51.358px]">
             <Img src={Aimg} alt='' />
            </button>
        </div>
        </div>
        </>
    )
  return (
    <div
     style={{backgroundImage: `url(${bgImg})`}}
    className='bg-cover bg-center bg-no-repeat relative block'>
     {content}
    </div>

  )
}

export default Banner