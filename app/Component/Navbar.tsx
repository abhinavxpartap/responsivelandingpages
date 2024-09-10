import Image from 'next/image'
import React from 'react'
import logo from "../Img/Group 3.png"

const Navbar = () => {
  
  return (
    <div className='max-w-[1382px] mx-auto pt-[56px] sm:px-[50px] px-[20px]'>
        <div className='flex justify-between items-center'>
           <div className='flex max-w-[323px]'>
            <div className='sm:max-w-[42px] w-[30px] sm:h-[41px] h-[20px]'>
                <Image src={logo} alt=''/>
            </div>
            <h1 className='text-[#022D72] leading-[31px] tracking-[-0.66px] font-semibold font-Gordita fade-in mx-auto md:mx-0 text-[20px] sm:text-[31px] max-w-[271px]
             '>
                 SearchMyExpert
             </h1>
           </div>
           <div className='hidden md:block'> 
             <button className= ' max-w-[127px] max-h-[44px] rounded-[22px] border-[0.7px] border-solid border-[#F66] content-center'>
                <p className='text-[#F66] leading-normal tracking-[-0.22px] font-semibold font-inter text-[17px] px-[22px] pb-[11px] pt-[8px]'>Get Quote</p>
             </button>
             </div>
        </div>
    </div>
  )
}

export default Navbar