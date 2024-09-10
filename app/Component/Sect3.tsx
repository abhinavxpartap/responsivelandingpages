import React from 'react'
import data from "./dumdata"
import Image from 'next/image'

const Sect3 = () => {
  return (
    <div className='pt-[82px] max-w-[1377px] mx-auto'>
    <div className='max-w-[569px] mx-auto flex flex-col justify-center items-center lg:pb-[53px] pb-[40px] '>
    <h4 className='font-medium  text-center pb-[10px] text-[12px] text-[#101D2C] '>
           WHY US
    </h4>
    <h1 className='text-[#101D2C] font-semibold font-inter
     text-[20px] text-center lg:text-start sm:text-[30px] sm:leading-[25px] md:text-[30px] md:leading-[35px] lg:text-[35px]
    lg:leading-[44px]
     '>
      <u className='text-[#F66]'>Why Choose</u> Search My ?
    </h1>
    <div className='max-w-[569px] max-h-[90px] md:mt-[10px]'>
    <h4 className='font-medium  pt-[8px] mx-auto md:mx-0  text-center text-[15px] sm:text-[19px] leading-normal text-[#101D2C] '>
         Our team of customer-focused professionals works with a diverse range of certified partners to ensure seamless project management from start to finish.
       </h4>
    </div>
    </div>
    <div className='pt-[53px] gap-[60px] flex flex-wrap justify-center
    '>
    {data!.map((item,index:number)=>(
        <div key={index} className={`bg-[#fff] max-w-[419px] border-grey border-[0.4px] border-solid px-[29px] pt-[32px] rounded-[15px] pb-[30px]`}
        style={{boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>
          <Image src={item.img} alt='' className='w-[52px] h-[53px]'/>
         <h1 className='text-[20px] pt-[21px] font-semibold text-[#101D2C]'>
            {item.title}
           </h1>
           <p className='pt-[14px] pb-[17px] text-[#101D2C] text-[17px]  font-[300px]'>
            {item.desc}
           </p>
        </div>
    ))}

    </div>
    </div>
  )
}

export default Sect3