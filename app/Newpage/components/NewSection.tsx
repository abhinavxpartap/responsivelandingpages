import Image from 'next/image'
import React from 'react'
import logo from "../Imggg/logo.png"
import pic4 from "../Imggg/bus.png"
import pic1 from "../Imggg/work-from-home.png"
import pic2 from "../Imggg/bulding.png"
import pic3 from "../Imggg/house.png"
import tick from "../Imggg/checklist.png"


interface compo{
  myfun : (index:number) => void;
  hidden: { [key: number]: boolean };
}

const NewSection:React.FC<compo> = ({myfun,hidden}) => {
   const data = [
    {
       "img":pic1,
       "title":"Remote"
    },
    {
        "img":pic2,
        "title":"On-site"
     },
     {
        "img":pic3,
        "title":"Hybrid"
     },
     {
        "img":pic4,
        "title":"other"
     }
    ]

  return (
        <div className='max-w-[370px] px-[20px] mx-auto'>
        <h1 className="text-[22px] text-center text-[#000] font-semibold">
            What is your teams<br/>
              work style?
            </h1>
             <div className="grid grid-cols-2  gap-x-[15px] gap-y-[12px] pt-[10px]">
               {data.map((item,index:number)=>(
                <button key={index} onClick={()=>myfun(index)} className='rounded-[12px] relative bg-[#F5F5F5] border-[1px] border-none border-[#979797] flex flex-col gap-[3px] justify-center items-center py-[25px] transition duration-300 ease-in-out hover:bg-yellow-400 hover:bg-opacity-30 hover:-translate-y-1'>
                      <Image src={item.img} alt='' className='max-w-[35px] max-h-[35px] mx-auto'/>
                      <h1 className='text-[14px]  text-center text-[#343434] font-semibold mx-auto'>{item.title}</h1>
                      {hidden[index] && <Image src={tick} alt='' className='max-w-[20px] max-h-[20px] absolute right-2 top-2'/>}
                </button>
               ))}
             </div>
        </div>
  )
}

export default NewSection