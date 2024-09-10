import Image from 'next/image'
import React from 'react'
import Img from "../utilites/Img"

 
interface Sect6{
  title: string;
  desc: string;
  Gimg: string;
  Aimg: string;
  starimg: string;
  Mobile: string;
  semicl: string;
  semicr: string;
}

const Section6 : React.FC<Sect6> = (props) => {
  const {title,desc,Gimg,Aimg,semicl,semicr,starimg,Mobile} = props
  return (
    <div className="xl:px-[52px] lg:px-[250px] md:px-[160px] sm:px-[100px] px-[20px]"> 
    <div className='max-w-[1338px] mx-auto rounded-[30px] bg-[#111] flex flex-wrap justify-end items-center relative'>
        <div className="hidden md:block">
        <div className="max-w-[346.172px] max-h-[149.072px] w-full h-full
        rounded-[346.172px] absolute bottom-[16%] right-[12%] bg-[#DDC686] rotate-[29.328deg] blur-[51.5772819519043px] z-1"/>
        <div className=" max-w-[353.486px] max-h-[149.072px] w-full h-full
        rounded-[353.486px] absolute top-[34%] right-[10%] bg-[#000] rotate-[29.328deg] blur-[51.5772819519043px] -z-1"/>
        </div>
         {/* circles img */}
         <div className="">
           <Img src={semicr} alt='' className='absolute right-0 top-0 -z-1'/>
          </div>
          <div className="">
           <Img src={semicl} alt='' className='absolute bottom-0 left-0 -z-1'/>
          </div>
        {/* stars */}
        <Img src={starimg} alt=''className='absolute top-[6%] left-[56%] w-[44px] h-[44px] xl:visible invisible '/>
        <Img src={starimg} alt=''className='absolute top-[18%] left-[8%] w-[28px] h-[28px] xl:visible invisible'/>
        <Img src={starimg} alt=''className='absolute bottom-[18%] left-[39%] w-[36px] h-[36px] '/>
        <div className="max-h-[220.58px] mx-auto xl:mx-0 px-[15px] xl:px-0 xl:pl-[15px] pt-[20px] z-10 mb-[20px]">
        <h1 className='text-[#fff] font-medium text-center xl:text-start max-w-[563px] font-Montserrat not-italic xl:text-[50px] lg:text-[45px] md:text-[37px] sm:text-[30px] text-[25px] xl:leading-[65px] lg:leading-[57px] md:leading-[49px] sm:leading-[38px] leading-[28px] capitalize
         pb-[18px]'>
         {title}
        </h1>
        <h4 className='font-normal not-italic text-center xl:text-start max-w-[617px] font-Montserrat text-[18px] text-[#fff] leading-[25.2px] '>
         {desc} 
        </h4>
        <div className='md:pt-[40px] pt-[25px] mx-auto xl:mx-0 flex max-w-[333px] justify-center items-center md:justify-start gap-[15px] md:gap-[25px]'>
            <button className="max-w-[154px] max-h-[51.358px]">
             <Img src={Gimg} alt='' />
            </button>
            <button className="max-w-[154px] max-h-[51.358px]">
             <Img src={Aimg} alt='' />
            </button>
        </div>
        </div>
        <div className="max-w-[590.99px] max-h-[459.9px] z-50 my-[24px] ">
           <Img src={Mobile} alt='' className=''/>
        </div>
    </div>
    </div>
  )
}

export default Section6

// padding  sm:px-[60px] px-[20px] 