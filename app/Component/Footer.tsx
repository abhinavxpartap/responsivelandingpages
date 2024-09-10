import Image from 'next/image'
import React from 'react'
import logo from "../Img/Group 3.png"
import flag from "../Img/flag.png"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { MdAddCall } from "react-icons/md"
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPinterest } from "react-icons/fa"

const Footer = () => {
  return (
    <div className=' pt-[50px] max-w-[1960px] mx-auto bg-[#F5F9FF] pb-[50px]'>
       <div className='max-w-[1263px] lg:pb-[132px] pb-[30px] mx-auto gap-[100px] lg:flex block px-[30px]'>
        {/* container 1 */}
        <div className="max-w-[108px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
         <h1 className='text-[16px] leading-[27px] font-semibold text-Inter text-[#101D2C] '>
             Quick
          </h1>
          {["Home" ,"About Us" ,"Services" ,"How It Works" ,"Testimonials" ,"Contact Us"].map((item,index:number)=>(
            <h4 key={index} className='text-[16px] leading-[27px] text-start text-[#101D2C] '>
               {item}
            </h4>    
          ))}
        </div>
        {/* container 2 */}
        <hr className='lg:hidden' />
        <div className="max-w-[149px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
         <h1 className='text-[16px] text-Inter leading-[27px] font-semibold text-[#101D2C] '>
            Products
          </h1>
          {["Web Design" ,"Web Development" ,"Social Media PPC" ,"Marketing" ,"SEO"].map((item,index:number)=>(
            <h4 key={index} className='text-[16px] leading-[27px] text-start text-[#101D2C] '>
               {item}
            </h4>    
          ))}
        </div>
        {/* container 3 */}
        <hr className='lg:hidden' />
        <div className="w-[149px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
         <h1 className='text-[16px] leading-[27px] text-Inter font-semibold text-[#101D2C] '>
             Resources
          </h1>
          {["Customer Service" ,"Technical Support" ,"Site Map", "Testimonials" ,"FAQ" ,"Newsletter"].map((item,index:number)=>(
              <h4 key={index} className='text-[16px] leading-[27px] text-start text-[#101D2C] '>
               {item}
            </h4>    
          ))}
        </div>
        {/* container 4 */}
        <hr className='lg:hidden' />
        <div className="w-[136px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
         <h1 className='text-[16px] text-Inter leading-[27px] font-semibold text-[#101D2C] '>
             Servcies
          </h1>
          {["Live Chat" ,"Phone Support" ,"Email Support" ,"Knowledge Base" ,"Submit a Ticket"].map((item,index:number)=>(
              <h4 key={index} className='text-[16px] leading-[27px] text-start text-[#101D2C] '>
               {item}
            </h4>    
          ))}
        </div>
        {/* container 5 */}
        <hr className='lg:hidden' />
        <div className="max-w-[323px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
         <h1 className='text-[16px] text-Inter leading-[27px] font-semibold text-[#101D2C] '>
            Legal
          </h1>
          {["2710 Broadway, New York, NY 10025 ","info@searchmyexpert.com" ,"+91 7769970007"].map((item,index:number)=>(
            <div key={index} className='flex justify-between items-center'>
             <div className="w-[18px] h-[22px]">
              { index === 0 ? <FaLocationDot className=" w-[16px] h-[20px]"/> : null }   
              { index === 1 ? <IoMdMail className=" w-[16px] h-[20px]"/> : null }   
              { index === 2 ? <MdAddCall className=" w-[16px] h-[20px]"/> : null }
             </div>
            <h4  className='text-[16px] pb-[9px] pl-[7px] leading-[27px] text-start text-[#101D2C] '>   
              {item}
            </h4>
            </div>
          ))}
          <div className="w-[219px] flex gap-[21px]">
              <FaFacebook/>
              <FaInstagram/>
              <FaTwitter/>
              <FaYoutube/>
              <FaPinterest/>
          </div>
        </div>
       </div>
       {/* copyright nd logo */}
       <hr/>
       <div className="max-w-[1263px] px-[30px] pt-[20px] lg:flex block lg:justify-between justify-center items-center mx-auto">
       <div className='flex max-w-[211px]'>
            <div className='max-w-[32px] h-[31px]'>
                <Image src={logo} alt=''/>
            </div>
            <h1 className='text-[#022D72] leading-[31px] tracking-[-0.66px] font-semibold font-Gordita fade-in text-[21px] max-w-[117px]
             '>
                 SearchMyExpert
             </h1>
           </div>
           <p className=' text-center font-inter pb-[17px] text-[#101D2C] text-[15px]  font-[400px]'>
           Copyright © 2023 · SearchMyExpert Company · All Rights Reserved
           </p>
            <div className="w-[79px] h-[23px] bg-[#fff]">
                <Image src={flag} alt=''/>
            </div>
       </div>
    </div>
  )
}

export default Footer