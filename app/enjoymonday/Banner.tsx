import React from 'react'
import Bgimg from "../../public/assest/bgimage.png"
import Descp from './Descp'
import Form from './Form'
import link from "../Img/Frame 1261152488.png" 
import google from "../Img/Frame 1261152489.png"
import goog from "../Img/Polygon 4.png"
import vector from "../Img/Vector.svg"
import Image from 'next/image'

const Banner = () => {
    const content = (
      <>
      <div className='max-w-[1440px]
       mx-auto flex flex-col justify-center 2x:pt-[197px] md:pt-[130px] pt-[90px] xl:px-[80px] px-[25px] pb-[50px] relative'>
  
      <h1 className='text-[#324049] font-Poppins font-semibold
      fade-in mx-auto md:mx-0 text-[20px] text-center xl:text-start sm:text-[30px] sm:leading-[40px] md:text-[35px] md:leading-[40px] lg:text-[42px]
      lg:leading-[59px] relative 
       '>
        Post this UI/UX Designer job description <Image src={vector} alt='' className='absolute sm:left-[170px] left-[80px] sm:w-[305px] h-[15px] w-[160px]' /> <br className='hidden sm:block'/> and start matching with top talent 
      </h1>
        <Image src={link} alt='' className='absolute top-[210px] right-[480px] w-[69px] h-[69px] hidden xl:block'/>
        <Image src={google} alt='' className='absolute top-[225px] right-[120px] w-[69px] h-[69px] hidden xl:block'/>
        <Image src={goog} alt='' className='absolute top-[150px] right-[310px] w-[35px] h-[35px] hidden xl:block'/>

       <div className='flex xl:flex-row flex-col xl:justify-between justify-center xl:items-start items-center gap-[20px] pt-[30px]'>
           <Descp/>
           <Form/>
       </div>
      </div>
      </>
    )
  
    return (
      <div style={{ backgroundImage  : `url(${Bgimg.src})`}}
      className='bg-cover bg-center bg-no-repeat relative block '>
       {content}
      </div>
  
    )
  }
  
  export default Banner