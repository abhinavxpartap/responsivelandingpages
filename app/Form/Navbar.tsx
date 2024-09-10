import React from 'react'
import Image from 'next/image'
import logo from "../Img/Group 3.png"

const Navbar = () => {
  return (
     <div className=''>
        <div className='flex justify-between items-center max-w-[1660px] mx-auto h-[143px] bg-[#FFF] px-[20px] md:px-[70px]'>
           <div className='flex items-center max-w-[323px] '>
            <Image src={logo} alt='' className='md:w-[45.411px] w-[31.763px] md:h-[42.724px] h-[30px]'/>
            <h1 className='text-[#022D72] leading-[31px] tracking-[-0.66px] font-bold font-inter fade-in mx-auto md:mx-0 text-[18px] md:text-[31px] max-w-[271px]
             '>
                 SearchMyExpert
             </h1>
             <p className='text-[#4B5A69] leading-normal tracking-[-0.123px] font-bold font-inter fade-in  text-[6.76px] md:text-[9.768px] max-w-[16px] pb-[10px]'>TM</p>
           </div>
           <div className='flex flex-col max-w-[183px]'> 
             <p className='text-[#4B5A69] leading-normal tracking-[-0.22px] font-normal font-inter text-[12px] md:text-[16px]'>Have Questions? <br /><span className='text-[#123B7F] leading-normal tracking-[-0.22px] font-semibold font-inter text-[12px] md:text-[16px]'>Call 9999 599 444</span></p>
             </div>
        </div>
    </div>
  )
}

export default Navbar