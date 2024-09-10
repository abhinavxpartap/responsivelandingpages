import React from 'react'
import img1 from "../Img/Group 27.png"
import img2 from "../Img/group.png"
import img3 from "../Img/Group 215.png"
import img4 from "../Img/Group 31.png"
import Image from 'next/image'


const Sect4 = () => {
    
    const Newdata = [
        {
        
            "title":"Tell Us What You Need",
            "desc":"No Matter Your Needs, We'll Connect You with a Qualified Expert.",
            "img": img1 
        },
        {
            
            "title":"We Connect You With a Partner",
            "desc":"No Matter Your Needs, We'll Connect You with a Qualified Expert.",
            "img": img2
        },
        {
            
            "title":"Sign Contracts",
            "desc":"Receive fast & free services quotes from the expert talents near you.",
            "img": img3    
        },
        {
            
            "title":"Track Your Project Progress",
            "desc":"Pick from some of the best Top-Rated Marketing Specialists with Ease.",
            "img": img4
        }
    ]
  
  
    return (
    <div className='pt-[298px]'>
    <div className='max-w-[1960px] mx-auto pb-[131px] bg-[#F5F9FF] px-[10px]'>
        <div className='max-w-[395px] mx-auto flex flex-col pt-[131px] justify-center items-center lg:pb-[53px] pb-[40px] '>
        <h4 className='font-medium  text-center pb-[10px] text-[12px] text-[#101D2C] '>
            STEP-BY-STEP
         </h4>
         <h1 className='text-[#101D2C] font-semibold font-inter
         text-[20px] text-center lg:text-start sm:text-[30px] sm:leading-[25px] md:text-[30px] md:leading-[35px] lg:text-[35px]
        lg:leading-[44px] tracking-[-0.474px]
         '>
          <u className='text-[#F66]'>How It Works</u>
           </h1>
           <div className='max-w-[395px] max-h-[90px] md:mt-[10px]'>
        <h4 className='font-medium  pt-[8px] mx-auto md:mx-0  text-center text-[15px] sm:text-[19px] leading-normal text-[#101D2C] '>
        With us, you can kickstart your digital journey in 24 hours!
       </h4>
    </div>
    </div>
    <div className='pt-[53px] max-w-[1380px] gap-[60px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 text-center'>
  {Newdata.map((item, index: number) => (
    <div className='max-w-[300px] mx-auto h-[350px] flex flex-col'>
      <div className='rounded-[10px] max-w-[300px] max-h-[166px] border-[1px] pt-[54px] pb-[55px] px-[121px] border-solid border-gray-400 bg-[#fff]'>
        <Image src={item.img} alt='' className='w-[55px] h-[57px]' />
      </div>
      <div className='max-w-[262px] pl-[19px] mx-auto pr-[18px]'>
        <h1 className='text-[20px] leading-[24px] max-auto text-center pt-[21px] font-semibold text-[#101D2C]'>
          {item.title}
        </h1>
      </div>
      <div className='max-w-[278px] pt-[14px] px-[11px] mx-auto'>
        <p className=' text-center  pb-[17px] text-[#101D2C] text-[17px]  font-[300px]'>
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  )
}

export default Sect4