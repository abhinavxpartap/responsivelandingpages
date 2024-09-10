import React from 'react'
import Image from 'next/image'
import pic1 from "../Imggg/placeholder.png"
import pic2 from "../Imggg/planet-earth.png"
import tick from "../Imggg/checklist.png"


interface compo{
  myfun : (indexv:number) => void;
  hidden: { [key: number]: boolean } ;
}
const Section5:React.FC<compo>= ({myfun ,hidden}) => {

  const data = [
    {
       "img":pic1,
       "title":"Everyone in my team is in the same zone"
    },
    {
        "img":pic2,
        "title":"My team members are spread globally"
     }
    ]

  return (
    <div className='max-w-[370px] mx-auto'>
      <h1 className="text-[22px] text-center text-[#000] font-semibold">
        Is your organization <br />
        national or international?
      </h1>
       <div className="flex flex-col z-20 px-[20px] gap-[10px] pt-[20px]">
        {data.map((item,indexv:number)=>(
        <button key={indexv} onClick={()=>myfun(indexv)} className='rounded-[12px] bg-[#F5F5F5] border-none border-[#979797] flex flex-col gap-[3px] justify-center px-[15px] border-[1px] items-center py-[22px] transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:bg-opacity-30 relative'>
        <Image src={item.img} alt='' className='max-w-[35px] max-h-[35px]'/>
        <h1 className='text-[20px] text-center text-[#343434] font-semibold'>{item.title}</h1>
       {hidden[indexv] && <Image src={tick} alt='' className='max-w-[20px] max-h-[20px] absolute right-3 top-3'/>}
        </button>
         ))}
        </div>
    </div>
  )
}

export default Section5