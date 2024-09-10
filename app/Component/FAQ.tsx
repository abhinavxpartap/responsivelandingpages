"use client"
import React, { useState } from 'react'
import { MdExpandCircleDown, MdCloseFullscreen } from "react-icons/md"

const FAQ = () => {
    const [ open , setOpen] = useState<number | null >(null)
     
    const toggleFAQ = (index: number) =>{
       if(open === index){
         setOpen(null)
       }else{
           setOpen(index)
       }
    }


  const Faqdata = [
    {
        
        "title":"How does Search My Expert work?",
        "desc":"Search My Expert is a managed B2B marketplace with essential solutions for your digital business requirements. We have over 1000 verified agencies on our platform. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner agency for the successful execution of your project.", 
    },
    {
        
        "title":"How is Search My Expert different from any agency?",
        "desc":"Search My Expert is a managed B2B marketplace with essential solutions for your digital business requirements. We have over 1000 verified agencies on our platform. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner agency for the successful execution of your project.",
    },
    {
        
        "title":"How are you different from Amazon as a marketplace?",
        "desc":"Search My Expert is a managed B2B marketplace with essential solutions for your digital business requirements. We have over 1000 verified agencies on our platform. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner agency for the successful execution of your project.",    
    },
    {
        
        "title":"Do you have freelancers on your platform?",
        "desc":"Search My Expert is a managed B2B marketplace with essential solutions for your digital business requirements. We have over 1000 verified agencies on our platform. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner agency for the successful execution of your project.",
    },
    {
        
        "title":"What is your role in the delivery process?",
        "desc":"Search My Expert is a managed B2B marketplace with essential solutions for your digital business requirements. We have over 1000 verified agencies on our platform. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner agency for the successful execution of your project.",   
    },
  ]
  return (
    <div className="pt-[122px] pb-[125px]">
    <div className='max-w-[1960px] mx-auto bg-[#F5F9FF] pb-[30px] px-[15px]'>
    <div className='max-w-[467px] pt-[140px] mx-auto flex flex-col justify-center gap-[10px] items-center lg:pb-[70px] pb-[40px] '>
    <h4 className='font-medium  text-center text-[12px] text-[#F66] '>
        FAQ
    </h4>
    <h1 className='text-[#101D2C] font-semibold font-inter
     text-[25px] text-center lg:text-start sm:text-[30px] sm:leading-[25px] md:text-[30px] md:leading-[35px] lg:text-[35px]
    lg:leading-[44px]
     '>
       Frequently Asked Questions
    </h1>
    </div>
    <div className='max-w-[1021px] mx-auto flex flex-col justify-start gap-[39px]'>
       {Faqdata.map((item,index: number) => (
        <div key={index} className='max-w-[1020px]'>
        <div className="flex justify-between cursor-pointer pb-[10px] peer" onClick={()=>toggleFAQ(index)}>
           <h4 className='font-medium leading-[32px] text-[23px] font-inter text-[#101D2C] '>
              {item.title}
            </h4> 
            <div className="w-[20px] h-[20px] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
               {open === index ? <MdCloseFullscreen/> : <MdExpandCircleDown/> }
            </div>
        </div>
         {open === index && (
            <div className='max-w-[986px] flex justify-start items-start pb-[30px] transition-all duration-500  lg:pr-[38px]'>
            <h4 className='font-normal leading-[32px] text-[12px] font-inter text-[#101D2C] '>
               {item.desc}
            </h4> 
            </div>
         )}
        <hr/>
        </div>
       ))}
    </div>
    </div>
    </div>
  )
}

export default FAQ