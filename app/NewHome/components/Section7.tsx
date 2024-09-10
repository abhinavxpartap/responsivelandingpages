import React from 'react'
import img1 from "../image/Rectangle 4.jpg"
import img2 from "../image/Rectangle 4 (1).jpg"
import img3 from "../image/Rectangle 4 (2).jpg"
import Image from 'next/image'
import Data from "../../../data/dataValue.json"
import Img from "../utilites/Img"



interface Sect7 {
  title: string;
  desc: string;
  starimg: string;
}

const Section7: React.FC<Sect7> = (props) => {
    const {title , desc, starimg } = props
  return (
    <div className='max-w-[1439px] mx-auto md:pt-[100px] pt-[60px] px-[20px] lg:px-[90px] xl:px-[168px]'>
        <Img src={starimg} alt=''  className='max-w-[48px] max-h-[48px] rotate-45' />
       <div className="flex flex-col items-center max-w-[679px] mx-auto gap-[12px] pb-[59px]">
        <div className="flex mx-auto flex-start py-[4px] sm:px-[15px] px-[10px] rounded-[20px] bg-[#E2E2E2]">
        <p className=' text-center mx-auto items-center font-Montserrat text-[#333] text-[12px] font-[600px]  leading-[20px]'>
             {title}
        </p>
        </div>
        <h1 className='text-[#333] font-semibold font-Montserrat not-italic
        fade-in mx-auto md:mx-0 text-[24px] text-center sm:text-[30px] sm:leading-[35px] md:text-[40px] md:leading-[40px] lg:leading-[50px] lg:text-[40px] xl:text-[45px] xl:leading-[58px] 
         '>
          {desc}
        </h1> 
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-[38px] gap-[35px] md:gap-[30px] mx-auto pb-[50px]">
        {Data.Newdata.map((item,index:number)=>(
            <div key={index} className='max-w-[342px] max-h-[470px] mx-auto rounded-[15px] bg-[#fff]' 
            style={{boxShadow:
                '0px 4px 20px 0px rgba(0, 0, 0, 0.08)'}}>
            
            <Img src={item.img} alt='' className='max-h-[227px] rounded-t-[15px]'/>
            <p className='font-Montserrat text-[#969947] text-[14px] font-[600px] px-[12px] pt-[12px] leading-normal uppercase'>
             {item.catg}
            </p>
            <p className='font-Montserrat text-[#333] max-w-[318px] text-[20px] font-[500px] mx-[12px] pt-[15px] leading-[28px] '>
             {item.title}
            </p>
            <p className='font-Montserrat text-[#444] max-w-[312px] text-[14px] font-[400px] mx-[15px] pt-[15px] leading-[21px] '>
             {item.desc}
            </p>
            <div className="flex justify-between pt-[26px] pb-[20px] px-[15px]">
            <p className='font-Montserrat text-[#444] text-[14px] font-[500px]'>
             {item.date}
            </p>
            <p className='font-Montserrat text-[#444] text-[14px] font-[500px]'>
              {item.read}
            </p>
            </div>
            </div>
        ))}
       </div>
    </div>
  )
}

export default Section7