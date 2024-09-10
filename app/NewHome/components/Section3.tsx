import React from 'react'
import iphone from "../image/iPhone14.png"
import star from "../image/section3pic.png"
import Img from "../utilites/Img"


interface sect3{
  title: string;
  desc: string;
  Mobile: string;
  starimg: string;
}

const Section3: React.FC<sect3> = (props) => {
  const {title,desc,Mobile,starimg} = props

  return (
    <div className="lg:pt-[158px] pt-[60px] lg:pb-[150px] pb-[55px]">
    <div className='flex flex-col max-w-[1062px] mx-auto gap-[50px] items-center px-[20px] pb-[30px] '>
        {/* headinng  */}
        <h1 className='text-[#fff] font-semibold font-Montserrat not-italic 
            max-w-[630px] text-center text-[23px] sm:text-[27px] sm:leading-[30px] md:text-[32px] md:leading-[40px] lg:leading-[50px] lg:text-[36px] xl:text-[40px] xl:leading-[52px] 
           '>
          {title}
        </h1>
        {/* middle cont */}
        <div className="max-w-[1061.5px] w-full max-h-[665.7px] mx-auto items-center relative flex shrink-0 ">            
        <div className="max-w-[323.883px] max-h-[656.43px] mx-auto z-50 ">
          <Img src={Mobile} alt="loading" className='sm:w-[323.883px] sm:h-[656.43px] w-[200px] h-[390px]'/>
        </div>
         <div className="max-w-[500px] w-full h-full max-h-[500px] mx-auto rounded-[500px] opacity-[0.37] bg-[#DDC686] blur-[163.1304931640625px] absolute top-[5%] sm:right-[26%] self-center -z-1"/>  
         {/* star div */}
         <div className="w-full h-[573.749px] mx-auto top-[14%] absolute z-10">
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute bottom-[41%]'/>
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute bottom-0 left-[25%]'/>
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute top-[15%] left-[21%]'/>
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute right-[22%]'/>
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute right-0 top-[35%]'/>
            <Img src={starimg} alt='' className='max-w-[18px] max-h-[18px] absolute right-[16%] bottom-[20%]'/>
         </div>
        </div>
        {/* last cont */}
        <h4 className='font-medium not-italic max-w-[617px] mx-auto text-center font-Montserrat text-[18px] text-[#fff] leading-[30px] capitalize '>
         {desc}    
       </h4>
    </div>
    </div>
  )
}

export default Section3

// vapifeh930@wikfee.com