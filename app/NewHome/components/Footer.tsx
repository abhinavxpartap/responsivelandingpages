import React from 'react'
import Google from "../../../public/image/Mobile app store badge.png"
import Apple  from "../../../public/image/Mobile app store badge (1).png"
import Image from 'next/image'
import link from "../../../public/image/62beb29cd17b9189cd6d2c52_akar-icons_linkedin-fill.svg.png"
import insta from "../../../public/image/62beb29cea6eea35515bf298_akar-icons_instagram-fill.svg.png"
import youtube from "../../../public/image/62da508283203662171cad78_akar-icons_youtube-fill.svg.png"

const Footer = () => {
  return (
    <>
    <div className='max-w-[1440px] mx-auto flex flex-col items-start py-[60px] xl:px-[146px] sm:px-[90px] px-[20px] bg-[#000]'>
    <div className="lg:flex md:items-start items-center justify-center max-w-[1148px] mx-auto xl:gap-[225px] lg:gap-[120px]">
       {/* container 1 */}
      <div className="flex flex-col gap-[16px] pb-[15px] items-center md:items-start justify-center">
      <h1 className='text-[#fff] not-italic font-semibold font-Montserrat fade-in text-[18px] text-center md:text-start max-w-[254px] leading-[32px]'>
       Get new information about StyleEazy
      </h1>
      <div className="mx-auto md:mx-0 max-h-[42px] bg-[#fff]  rounded-[8px] flex justify-end items-center py-[4.5px] pl-[16px] pr-[4px] sm:gap-[126px] gap-[50px]">
        <input type='text' placeholder='Type your email' className='text-[#666] not-italic font-normal font-Montserrat max-w-[96px] fade-in text-[12px] items-center'/>
        <button className='text-[12px] font-bold text-center max-w-[84px] leading-normal inline-flex font-Montserrat text-white rounded-[5px] py-[6px] px-[26px] max-h-[33px] bg-[#BAB28E]'>
         Send
         </button>
      </div>
      <div className='flex max-w-[246px] mx-auto md:mx-0  justify-center items-center md:justify-start gap-[20px] '>
            <button className="max-w-[150px] max-h-[50px]">
             <Image src={Google} alt='' />
           </button>
            <button className="max-w-[150px] max-h-[50px]">
             <Image src={Apple} alt='' />
            </button>
        </div>
      </div>
      <hr className='md:hidden' />
      {/* container 2 */}
      <div className="md:flex items-centre md:items-start max-w-[598px] xl:gap-[75px] lg:gap-[50px] gap-[90px] ">
     {/* Products cont 1 */}
      <div className="mx-auto w-[96px] md:mx-0 flex flex-col items-center md:items-start gap-[12px] pb-[15px]">
         <h1 className='text-[18px] font-Montserrat leading-normal font-bold text-[#fff] '>
            Products
          </h1>
          {["Home" ,"Our Features" ,"Blogs"].map((item,index:number)=>(
              <h4 key={index} className='text-[16px] font-Raleway leading-[24px] text-center md:text-start text-[#fff] '>
               {item}
            </h4>    
          ))}
        </div>
        <hr className='md:hidden' />
        {/* Cont 2 */}
        <div className="flex flex-col items-start max-w-[233px] mx-auto md:mx-0 md:gap-[22px] pb-[15px] ">
        <div className="mx-auto md:mx-0 flex flex-col items-center md:items-start gap-[8px]">
         <h1 className='text-[18px] font-Montserrat leading-normal font-bold text-[#fff] '>
            Email
          </h1>
        <h4 className='text-[16px] font-Raleway leading-[24px] text-center md:text-start text-[#fff] '>
          support@styleeazy.com
        </h4>    
        <hr className='md:hidden' />
        </div>
        <div className="mx-auto md:mx-0 flex flex-col items-center md:items-start gap-[8px]">
         <h1 className='text-[18px] font-Montserrat leading-normal font-bold text-[#fff] '>
          Phone Number
          </h1>
        <h4 className='text-[16px] font-Raleway leading-[24px] text-center md:text-start text-[#fff] '>
         +62 851-5698-9279
        </h4>    
        <hr className='md:hidden' />
        </div>
        <div className="mx-auto md:mx-0 flex flex-col items-center md:items-start gap-[8px]">
         <h1 className='text-[18px] font-Montserrat leading-normal font-bold text-[#fff] '>
           Address
          </h1>
        <h4 className='text-[16px] font-Raleway leading-[24px] text-center md:text-start text-[#fff] '>
          Grand Arumba C-5, Kota Malang, Jawa Timur 65143
        </h4>    
        </div>
        </div>
        {/* cont 3 */}
        <hr className='md:hidden' />
        <div className="mx-auto lg:mx-0 flex flex-col items-center 
        md:items-start gap-[22px] pb-[10px]">
         <h1 className='text-[18px] font-Montserrat leading-normal font-bold text-[#fff] '>
            Follow Us
          </h1>
          <div className="flex items-center lg:items-start xl:gap-[23px] gap-[15px]">
            <Image src={link} alt='' className='w-[24px] h-[24px]'/>
            <Image src={insta} alt='' className='w-[24px] h-[24px]'/>
            <Image src={youtube} alt='' className='w-[24px] h-[24px]'/>
          </div>
        </div>
       </div>
    </div>
    </div>
    <div className="max-w-[1440px] mx-auto bg-[#000]">
    <p className=' text-center mx-auto items-center font-Montserrat pb-[17px] text-[#fff] text-[12px] font-[600px] px-[10px]'>
    © 2023 App Landing Page. All Rights Reserved. With love by StyleEazy
    </p>
    </div>
    </>
  )
}

export default Footer