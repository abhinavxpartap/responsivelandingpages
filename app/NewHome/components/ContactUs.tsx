"use client"
import Image from 'next/image'
import React from 'react'
import { MdExpandMore } from "react-icons/md"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Img from "../utilites/Img"



interface contact{
  title: string;
  desc: string;
  starimg: string;
  Photo1: string;
  Photo2: string;
  Photo3: string;
  Photo4: string;
  Photo5: string;
  Photo6: string;
}

const ContactUs:React.FC<contact> = (props) => {
  const {title,desc,starimg,Photo1,Photo2,Photo3,Photo4,Photo5,Photo6} = props

  const theme = useTheme();
  const isSmallerThan680 = useMediaQuery(theme.breakpoints.down('sm'));
   
   
  return (
    <div className='py-[50px]'>
       <div className="max-w-[1440px] w-full mx-auto px-[30px] sm:px-[60px] relative">
          <Img src={starimg} alt='' className='max-w-[64px] max-h-[64px] absolute right-[10%] top-0'/>
          <div className="flex flex-wrap-reverse  items-center justify-center">
          {/* Form   */}
         <div className="max-w-[457.19px] pt-[50px] px-[10px]">
             <div className="max-w-[426px] gap-[10px] flex flex-col">
             <h4 className='font-semibold font-Montserrat text-[21px] sm:text-[27px] 
               md:text-[35px] text-[#222] leading-[130%] non-italic'>
               {title}
             </h4>
             <h4 className='font-medium  font-Montserrat text-[14px] sm:text-[16px] 
               md:text-[18px] text-[#444] leading-normal'>
               {desc}
             </h4>
             </div>
             {/* inputvalues */}
             <div className="max-w-[457px] flex flex-col pt-[25px] pb-[10px]">
                {/* row1 */}
                <div className='max-w-[457px] flex flex-wrap gap-[19px]'>
                 <div className='flex flex-col items-start gap-[4px] grow'>
                  <p className="font-Montserrat text-[14px] text-[#344054] font-medium leading-normal">
                    First name</p>
                 <div className='border-[0.952px] max-w-[457px] max-h-[44px] w-full border-solid py-[10px] px-[15px] rounded-[8px] border-slate-500 grow'>
                 <input type="text" placeholder='First name' className='font-Montserrat text-[15px] text-[#575757] leading-normal font-[400px] w-full '/>
                 </div>
                 </div>
                 <div className='flex flex-col items-start gap-[4px] grow'>
                  <p className="font-Montserrat text-[14px] text-[#344054] font-medium leading-normal">
                   Last name</p> 
                 <div className='border-[0.952px] max-w-[457px] w-full max-h-[44px] border-solid py-[10px] px-[15px] rounded-[8px] border-slate-500'>
                 <input type="text" placeholder='Last name' className='font-Montserrat 
                 text-[15px] text-[#575757] leading-normal font-[400px] w-full '/>
                </div>
                 </div>
                </div>
                {/* r0w1code end  */}
                <div className='flex flex-col items-start gap-[4px] pt-[20px]'>
                <p className="font-Montserrat text-[14px] text-[#344054] font-medium leading-normal">
                    Email</p>
                 <div className='border-[0.952px] max-w-[457px] w-full max-h-[44px] border-solid py-[10px] px-[15px] rounded-[8px] border-slate-500 '>
                 <input type="text" placeholder='you@company.com' className='font-Montserrat text-[15px] text-[#575757] w-full'/>
                </div>
                </div>
                <div className='flex flex-col items-start gap-[4px] pt-[20px]'>
                <p className="font-Montserrat text-[14px] text-[#344054] font-medium leading-normal">
                   Phone number </p>
                <div className="flex w-full">
                <div className="pl-[15px] pr-[11px] py-[11px] max-h-[45px] font-Montserrat text-[15px] text-[#575757] leading-normal font-[400px] rounded-l-[8px] flex border-[0.952px] border-r-0 items-center border-solid border-slate-500">
                    Us <MdExpandMore className="max-w-[19px] max-h-[19px]"/>
                 </div>
                 <div className='border-[0.952px] max-w-[457px] w-full max-h-[45px] border-solid py-[11px] px-[15px] rounded-r-[8px] border-slate-500 grow'>
                 <input type="text" placeholder='+1 (555) 000-0000' className='font-Montserrat text-[15px] text-[#575757] leading-normal font-[400px] w-full'/>
                </div>
                </div>
                </div>
                <div className='flex flex-col items-start gap-[4px] pt-[20px]'>
                <p className="font-Montserrat text-[14px] text-[#344054] font-medium leading-normal">
                  Message</p>
                 <div className='border-[0.952px] max-w-[457px] w-full max-h-[120px]  border-solid py-[10px] px-[15px] rounded-[8px] border-slate-500 '>
                 <textarea rows={4} placeholder='Type your query' className='font-Montserrat text-[15px] text-[#575757] leading-normal font-[400px] w-full '/>
                </div>
                </div>
               
             </div>
             {/* check boxx */}
             <div className='flex max-w-[457px] items-start gap-[11.426px] '>
                <input type="checkbox" id="check" className='w-[20px] h-[20px] flex justify-center items-center border-[0.952px] border-solid rounded-[5.719px] border-slate-500'/>

                <label htmlFor="check" className='font-Montserrat text-[15px] font-normal tracking-[0.28px] leading-[22px] grow'>You agree to our friendly <u>privacy policy</u>.</label>
            </div>
            {/* button */}
            <div className='flex pt-[15px] md:pt-[30px] max-w-[457px] justify-center items-center'>
            <button className='text-[16px] text-center justify-center max-w-[457px] leading-normal inline-flex bg-[#1D191F] font-Montserrat text-white rounded-[7.619px] py-[12px] px-[18px] grow'>
              Send message
            </button>
           </div>
          </div>
          {/* right side  */}
         <ImageList
         className='flex max-w-[714px] lg:justify-between justify-center items-center mx-auto'
           gap={isSmallerThan680 ? 5 : 10}
            >
            <ImageListItem className='max-w-[147px] max-h-[237px] '>
             <Img src={Photo1} alt='' />
            </ImageListItem>
            <ImageListItem className='sm:gap-[10px] gap-[5px] max-w-[200px] sm:pb-[50px] pb-[35px]'>
                  <Img src={Photo3} alt=''/>     
                  <Img src={Photo2} alt=''/>
            </ImageListItem>
           <ImageListItem className='max-w-[190px] sm:gap-[10px] gap-[5px] sm:pt-[50px] pt-[35px]'>
                  <Img src={Photo5} alt=''/>     
                  <Img src={Photo4} alt=''/>
            </ImageListItem>
            <ImageListItem className='max-w-[147px] max-h-[237px]'>
            <Img src={Photo6} alt=''/>
            </ImageListItem>
         </ImageList>
    </div>
    </div>
   </div>
  )
}

export default ContactUs





















  {/* <div className="max-w-[714px] flex lg:justify-between justify-center items-center sm:gap-[10px] gap-[5px] mx-auto ">
             <div className="max-w-[147px] max-h-[237px] ">
              <Image src={Photo1} alt=''/>
             </div>
             <div className='max-w-[400px] mx-auto flex sm:items-start items-center justify-center sm:gap-[10px] gap-[5px]'>
                  <div className='flex flex-col sm:gap-[10px] gap-[5px] '>
                       <div className="max-w-[200px] max-h-[250px]">
                         <Image src={Photo3} alt='' className=''/>
                       </div>
                       <div className="max-w-[200px] max-h-[250px]">
                       <Image src={Photo2} alt='' className=''/>
                       </div>
                  </div>
                  <div className='flex flex-col lg:pt-[50px] pt-[40px] sm:gap-[10px] gap-[5px]'> 
                      <div className="max-w-[190px] max-h-[250px]">
                        <Image src={Photo4} alt='' className=''/>
                       </div>
                       <div className="max-w-[189px] max-h-[250px]">
                       <Image src={Photo5} alt='' className=''/>
                       </div>
                 </div>
                 </div>
             <div className="max-w-[147px] max-h-[237px] ">
              <Image src={Photo6} alt=''/>
             </div>
          </div> */}