import React from 'react'
import { FiSettings } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GrConnectivity } from "react-icons/gr"
import Image from 'next/image'

const Sect2 = () => {
  return (
    <div className='max-w-[1380px] mx-auto pt-[82px] px-[15px] pb-[319px]'>
     <div className='max-w-[569px] mx-auto flex flex-col justify-center items-center lg:pb-[53px] pb-[40px] '>
    <h4 className='font-medium  text-center pb-[10px] text-[12px] text-[#F66] '>
        OUR PROCESS
    </h4>
    <h1 className='text-[#101D2C] font-semibold font-inter
     text-[20px] text-center lg:text-start sm:text-[30px] sm:leading-[25px] md:text-[30px] md:leading-[35px] lg:text-[35px]
    lg:leading-[44px]
     '>
       Our Website <u className='text-[#F66]'>Development Process</u>
    </h1>
    </div>
    {/* 1 box */}
    <div className='max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pb-[20px]'>
        <div className="pt-[15px] pb-[30px] 2xl:px-[82px] 
         px-[40px] xl:px-[60px] rounded-[10px] bg-[#4B5A69] col-span-2 lg:col-span-1">
            <h1 className='font-medium text-center h-[105px] text-[85px] text-white'>
                01
            </h1>
        </div>
        <div className="max-w-[1130px] mx-auto rounded-[10px] bg-[#4B5A69] mt-[5px] lg:ml-2 lg:mt-[0px] col-span-5 sm:flex block ">
             <div className=' sm:pl-[50px] sm:pr-[12px] px-[10px] py-[39px] mx-auto items-center'>
             <h4 className='font-medium  text-center pb-[10px] text-[14px] sm:text-[17px] 2xl:text-[20px] text-[#fff] '>
             Listening to what you say is the first and most important step of our process. We learn where you are with your online marketing and where you. 
              </h4>
             </div>
             <div className=' flex items-center justify-center sm:pl-[72px] sm:pr-[52px] '>
               <IoChatboxEllipsesOutline className="w-[61px] h-[61px] text-white"/>
             </div>
             <div className="py-[42px] sm:pr-[50px] sm:pl-[20px] mx-auto flex flex-col justify-center items-center">
             <h4 className='font-medium  text-center text-[15px] text-[#fff] '>
                 STEP 1
            </h4>
            <h4 className='font-semibold font-Inter text-center text-[30px] 2xl:text-[37px] text-[#fff] '>
              Listen
            </h4>
             </div>
        </div>
    </div>
    {/* 2 box */}
    <div className='max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pb-[20px]'>
        <div className="pt-[15px] pb-[30px] 2xl:px-[72px] 
         px-[30px] xl:px-[50px] rounded-[10px] bg-[#4B5A69] col-span-2 lg:col-span-1">
            <h1 className='font-medium text-center h-[105px] text-[85px] text-white'>
                02
            </h1>
        </div>
        <div className="max-w-[1130px] mx-auto rounded-[10px] bg-[#4B5A69] mt-[5px] lg:ml-2 lg:mt-[0px] col-span-5 sm:flex block">
        <div className="py-[42px] sm:pr-[50px] sm:pl-[20px] mx-auto flex flex-col justify-center items-center">
             <h4 className='font-medium  text-center text-[15px] text-[#fff] '>
                 STEP 2
            </h4>
            <h4 className='font-semibold font-Inter text-center text-[30px] 2xl:text-[37px] text-[#fff] '>
               Plan
            </h4>
             </div>
            <div className=' flex items-center justify-center sm:px-[63px] '>
               <GrConnectivity className="w-[61px] h-[61px] text-white"/>
             </div>
             <div className=' py-[39px] sm:pr-[84px] sm:pl-[20px] px-[10px] mx-auto'>
             <h4 className='font-medium  text-center text-[17px] 2xl:text-[20px] text-[#fff] '>
             What's the best strategy to make a connection with your future web visitors? Every tagline and bit of content is written with them in mind.
              </h4>
             </div>
             
        </div>
    </div>
    {/* 3 box */}
    <div className='max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pb-[20px]'>
        <div className="pt-[15px] pb-[30px] 2xl:px-[72px] 
         px-[30px] xl:px-[50px] rounded-[10px] bg-[#4B5A69] col-span-2 lg:col-span-1">
            <h1 className='font-medium text-center h-[105px] text-[85px] text-white'>
                03
            </h1>
        </div>
        <div className="max-w-[1130px] mx-auto  rounded-[10px] bg-[#4B5A69] mt-[5px] lg:ml-2 lg:mt-[0px] col-span-5 sm:flex block">
             <div className=' sm:pl-[50px] sm:pr-[12px] px-[10px] py-[39px] mx-auto'>
             <h4 className='font-medium  text-center pb-[10px] text-[17px] 2xl:text-[20px] text-[#fff] '>
             We put a great deal of thought into design because it sets the mood about a company or product. If you already have a design direction, we'll stay.
              </h4>
             </div>
             <div className=' flex items-center justify-center sm:pl-[72px] sm:pr-[52px] '>
               <MdComputer className="w-[61px] h-[61px] text-white"/>
             </div>
             <div className=" py-[42px] sm:pr-[50px] sm:pl-[20px] mx-auto flex flex-col justify-center items-center">
             <h4 className='font-medium  text-center text-[15px] text-[#fff] '>
                 STEP 3
            </h4>
            <h4 className='font-semibold font-Inter text-center text-[30px] 2xl:text-[37px] text-[#fff] '>
               Design
            </h4>
             </div>
        </div>
    </div>
     {/*  4 box */}
    <div className='max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pb-[20px]'>
        <div className="pt-[15px] px-[30px] xl:px-[50px] pb-[30px] 2xl:px-[72px] rounded-[10px] bg-[#4B5A69] col-span-2 lg:col-span-1">
            <h1 className='font-medium text-center h-[105px] text-[85px] text-white'>
                04
            </h1>
        </div>
        <div className="max-w-[1130px] mx-auto rounded-[10px] bg-[#4B5A69] mt-[5px] lg:ml-2 lg:mt-[0px] col-span-5 sm:flex block">
        <div className="py-[42px] sm:pr-[50px] sm:pl-[20px] mx-auto flex flex-col justify-center items-center">
             <h4 className='font-medium  text-center text-[15px] text-[#fff] '>
                 STEP 4
            </h4>
            <h4 className='font-semibold font-Inter text-center text-[30px] 2xl:text-[37px] text-[#fff] '>
              Develop
            </h4>
             </div>
            <div className=' flex items-center justify-center sm:px-[63px] '>
               <FaLaptopCode className="w-[61px] h-[61px] text-white"/>
             </div>
             <div className='py-[39px] sm:pr-[84px] sm:pl-[20px] px-[10px] mx-auto'>
             <h4 className='font-medium  text-center text-[17px] 2xl:text-[20px] text-[#fff] '>
             We don't use templates or shortcuts, we create custom code for each page of your website using the industry's best development solutions.
              </h4>
             </div>
             
        </div>
    </div>
     {/* 5 box */}
    <div className='max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pb-[20px]'>
        <div className="pt-[15px] pb-[30px] 2xl:px-[72px]  
        px-[30px] xl:px-[50px] rounded-[10px] bg-[#4B5A69] col-span-2 lg:col-span-1 ">
            <h1 className='font-medium text-center h-[105px] text-[85px] text-white'>
                05
            </h1>
        </div>
        <div className="max-w-[1130px] mx-auto rounded-[10px] bg-[#4B5A69] mt-[5px] lg:ml-2 lg:mt-[0px] col-span-5 sm:flex block">
             <div className=' sm:pl-[50px] sm:pr-[12px] px-[10px] py-[39px] mx-auto'>
             <h4 className='font-medium  text-center text-[17px] 2xl:text-[20px] text-[#fff] '>
             We keep track of your traffic and work with you on an regular basis to keep your website in sync with your business and your customers. 
              </h4>
             </div>
             <div className=' flex items-center justify-center sm:pl-[72px] sm:pr-[52px] '>
               <FiSettings className="w-[61px] h-[61px] text-white"/>
             </div>
             <div className=" py-[42px] sm:pr-[50px] sm:pl-[20px] mx-auto flex flex-col justify-center items-center">
             <h4 className='font-medium  text-center text-[15px] text-[#fff] '>
                 STEP 5
            </h4>
            <h4 className='font-semibold font-Inter text-center text-[25px] 2xl:text-[37px] text-[#fff] '>
               Maintain
            </h4>
             </div>
        </div>
    </div>

    </div>
  )
}

export default Sect2







// note  **used grid colum templete