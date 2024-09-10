import React from 'react'
import Image from 'next/image'
import pic1 from "../Imggg/clock.png"
import pic2 from "../Imggg/owl.png"
import pic3 from "../Imggg/flexible.png"
import pic4 from "../Imggg/pencil.png"
import tick from "../Imggg/checklist.png"


interface compo{
  myfun : (indexv :number) => void;
  hidden: { [key: number]: boolean };

}

const Section4: React.FC<compo> = ({myfun,hidden}) => {
  const data = [
      {
          "img":pic1,
          "title":"9 To 5"
      },
      {
          "img":pic2,
          "title":"Night Shift"
        },
        {
          "img":pic3,
          "title":"Flexible Working Hours"
        },
        {
          "img":pic4,
          "title":"Other"
        }
      ]
    return (
      <div className='max-w-[370px] mx-auto'>
        <h1 className="text-[22px] text-center text-[#000] font-semibold">
        What is your team's work <br />
        schedule like?
        </h1>
          <div className="flex flex-col  relative gap-[10px] pt-[20px]">
          {data.map((item,indexv:number)=>(
          <button key={indexv} onClick={()=>myfun(indexv)} className='rounded-[12px] bg-[#F5F5F5] border-none border-[#979797] flex gap-[20px] justify-start px-[15px]  border-[1px] max-h-[67px] items-center py-[20px] transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1 hover:bg-opacity-30'>
          <Image src={item.img} alt='' className='max-w-[35px] max-h-[35px]'/>
          <h1 className='text-[20px] text-start text-[#343434] font-semibold'>{item.title}</h1>
          {hidden[indexv] && <Image src={tick} alt='' className='max-w-[20px] max-h-[20px] absolute right-3'/>}
          </button>
            ))}
          </div>
      </div>
    )
    }

export default Section4