import Image from 'next/image';
import React from 'react';
import star from "../../../public/image/star-05.png"
import sample from "../../../data/dataValue.json"
import Img from "../utilites/Img"

 
interface Sect2type{
  title: string;
  desc: string;
  starimg: string;
  Mobilel: string;
  Mobiler: string;
}

const Section2: React.FC<Sect2type> = (props) => {
    const {title,desc,starimg,Mobilel,Mobiler} = props

  return (
    <div className='bg-[#110D07] pt-[29px] '>
      <div className="max-w-[1240px] mx-auto px-[25px] xl:px-0 ">
        <Img src={starimg} alt='' className='max-w-[60px] max-h-[60px]' />
        <div className="flex flex-wrap justify-center pt-[38px] lg:pt-[78px]">
        {/* left div */}
          <div className="lg:w-6/12 flex sm:gap-[42px] gap-[25px]">
            <div className="max-w-[236.8px] max-h-[584.95px]">
              <Img src={Mobilel} alt="loading"/>
            </div>
            <div className="md:pt-[118px] pt-[58px]">
            <div className="max-w-[236.8px] max-h-[584.95px]">
              <Img src={Mobiler} alt="loading"/>
            </div>
        </div>
          </div>
        {/* Right div  */}
          <div className="lg:w-6/12 lg:pl-[40px]">
          <div className=" w-[88px] py-[4px] px-[15px] rounded-[20px] bg-[#333] mb-[19px]">
           <p className=' text-center items-center font-Montserrat text-[#fff] text-[12px] font-[600px]  leading-[20px]'>
              For Users
            </p>
          </div>
          <h1 className='text-[#fff] font-semibold font-Montserrat not-italic 
           fade-in max-w-[600px]  text-[20px] sm:text-[27px] sm:leading-[30px] md:text-[32px] md:leading-[40px] lg:leading-[50px] lg:text-[36px] xl:text-[40px] xl:leading-[52px] 
           '>
           {title}
          </h1>
          <h4 className='font-medium pt-[5px] pb-[35px] fade-in font-Montserrat md:pt-[15px] md:text-start text-[14px] sm:text-[16px] 
           md:text-[18px] text-[#fff] leading-[30px] max-w-[600px] '>
            {desc}
          </h4>
            {sample.data.map((item,index:number)=>(
              <div key={index} className="max-w-[633px] flex flex-col pb-[29px]">
              <div className="max-w-[245px] gap-[20px] flex">
                  <div className="w-[40px] h-[40px] rounded-[8.02px] bg-[#fff] p-[8px]">
                    <Image src={star} alt='' className='max-w-[24px] max-h-[24px]'/>
                  </div>
                  <h4 className='font-semibold fade-in font-Montserrat text-start text-[18px] text-[#fff] leading-normal capitalize '>
                     {item.title}
                </h4>
               </div>
                <p className='font-Montserrat text-[#fff] text-[16px] pt-[-20px] pl-[62px]  font-[400px] leading-[24px] capitalize'>
                 {item.desc}
               </p>
            </div>
            ))}
          </div>
        </div>
       </div>
    </div>
  );
};

export default Section2;
