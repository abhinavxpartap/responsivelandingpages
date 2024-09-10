"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import Logo from "../../../public/image/Color.png"
import { MdExpandMore } from "react-icons/md"
import { CiMenuBurger } from "react-icons/ci"


const Navbar = () => {
     const [ open , setOpen] = useState(false)
     
     const toggleNavbar = () =>{
        setOpen(!open)
     }

  return (
    <>
       <nav className='max-w-[1440px] h-[90px] mx-auto pt-[22px] xl:pl-[100px] lg:px-[30px] md:px-[20px] px-[26px] opacity-95'>
               <div className='flex items-center justify-between'>
                  <div className='flex max-w-[165px] items-center gap-[7px] lg:gap-[11.25px] '>
                    <div className='sm:max-w-[36px] w-[30px] sm:h-[36px] h-[30px] sm:pt-[5px]'>
                      <Image src={Logo} alt=''/> 
                    </div>
                    <h1 className='text-[#fff] leading-[28px] not-italic font-medium font-Montserrat fade-in mx-auto md:mx-0 text-[20px] text-center md:text-[24px] lg:text-[28px]
                      '>
                        StyleEzy
                      </h1>
                  </div>
                  <div className='hidden md:block '>
                         <div className='flex items-start lg:gap-[40px] gap-[20px] '>
                            <p className='text-white font-Inter text-[14px] font-semibold leading-[18px]'>
                               About Us  
                            </p>
                            <p className='text-white flex font-Inter text-[14px] font-semibold leading-[18px]'>
                               Services <MdExpandMore className="w-[18px] h-[18px]"/>
                            </p>
                            <p className='text-white flex font-Inter text-[14px] font-semibold leading-[18px]'>
                               Industries <MdExpandMore className="w-[18px] h-[18px]"/>
                            </p>
                            <p className='text-white font-Inter text-[14px] font-semibold leading-[18px]'>
                               Portfolio
                            </p>
                            <p className='text-white font-Inter text-[14px] font-semibold leading-[18px]'>
                               Blog
                            </p>
                         </div>
                      </div>
                     <div className='hidden md:block '>
                     <button className='text-[13px] lg:text-[14px] xl:text-[16px] text-center lg:max-w-[292px] leading-normal uppercase inline-flex font-Montserrat text-white border-[1.75px] border-solid border-[#fff] rounded-[37.5px] md:block px-[10px] xl:px-[30px] lg:px-[20px] lg:py-[15px] py-[13px] backdrop-blur-[2px]'>
                              Download the app now
                         </button>
                  </div>
                  <div className='md:hidden items-center'>
                     <button
                       className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                       hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                       onClick={toggleNavbar}
                     >
                      {!open ? (<CiMenuBurger
                         className="h-6 w-6"
                      />)
                      :(<FaRegWindowClose className="h-6 w-6"/>)}
                     </button>
                  </div>
               </div>
            {open && (
              <div className='md:hidden cursor-pointer'>
                <div className='z-50 bg-black'>
                <hr />
                <p className='text-white text-center font-Inter text-[14px] font-semibold leading-[18px] py-2'>
                   About  
                  </p>
                  <hr />
                 <p className='text-white pl-[10px] text-center flex justify-center items-center font-Inter text-[14px] font-semibold leading-[18px] py-2'>
                   Services <MdExpandMore className="w-[18px] h-[18px]"/>
                    </p>
                    <hr />
                    <p className='text-white pl-[10px] text-center flex justify-center items-center font-Inter text-[14px] font-semibold leading-[18px] py-2'>
                      Industries <MdExpandMore className="w-[18px] h-[18px]"/>
                    </p>
                    <hr />
                   <p className='text-white text-center font-Inter text-[14px] font-semibold leading-[18px] py-2'>
                       Portfolio
                   </p>
                   <hr />
                   <p className='text-white text-center font-Inter text-[14px] font-semibold leading-[18px] py-2'>
                    Blog
                 </p> 
  
                </div> 
              </div>
            )}
       </nav> 
    </>
  )
}

export default Navbar