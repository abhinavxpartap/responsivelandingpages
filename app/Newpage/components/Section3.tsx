import React from 'react'
import pic1 from "../Imggg/bulding.png"
import pic2 from "../Imggg/red-envelope.png"
import pic3 from "../Imggg/briefcase.png"
import Image from 'next/image'
import tick from "../Imggg/checklist.png"

interface compo{
  myfun : (indexv:number) => void;
  hidden: { [key: number]: boolean };

}

const Section3:React.FC<compo> = ({myfun,hidden}) => {
  const data = [
    {
       "img":pic1,
       "title":"Company"
    },
    {
        "img":pic2,
        "title":"Non profit"
     },
     {
        "img":pic3,
        "title":"other"
     }
    ]
  return (
    <div className='max-w-[370px] mx-auto'>
      <h1 className="text-[22px]  text-center text-[#000] font-semibold">
       What type of organization <br />
       are you working in?
      </h1>
       <div className="flex flex-col gap-[10px] pt-[20px] relative">
        {data.map((item,indexv:number)=>(
        <button key={indexv} onClick={()=>myfun(indexv)} className='border-[1px] rounded-[12px] max-h-[74px] bg-[#F5F5F5] border-none border-[#979797] flex gap-[20px] justify-start px-[15px] items-center z-50 py-[22px] transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:bg-opacity-30'>
        <Image src={item.img} alt='' className='max-w-[35px] max-h-[35px]'/>
        <h1 className='text-[20px] text-start text-[#343434] font-semibold'>{item.title}</h1>
         {hidden[indexv] && <Image src={tick} alt='' className='max-w-[20px] max-h-[20px] absolute right-3'/>}
        </button>
         ))}
        </div>
    </div>
  )
}

export default Section3