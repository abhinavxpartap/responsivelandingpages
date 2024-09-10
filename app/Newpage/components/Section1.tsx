import Image from 'next/image'
import React from 'react'
import logo from "../Imggg/logo.png"
import pic4 from "../Imggg/Photo4.png"
import pic1 from "../Imggg/Picoto1.png"
import pic2 from "../Imggg/Picoto2.png"
import pic3 from "../Imggg/Picoto3.png"
import tick from "../Imggg/checklist.png"


interface compo{
  myfun : (index:number) => void;
  hidden: { [key: number]: boolean };
}

const Section1:React.FC<compo> = ({myfun,hidden}) => {
   const data = [
    {
       "img":pic1,
       "title":"Bond my team"
    },
    {
        "img":pic2,
        "title":"Promote WellBeing"
     },
     {
        "img":pic3,
        "title":"Improve fitness"
     },
     {
        "img":pic4,
        "title":"Not Sure"
     }
    ]

  return (
       <>
        <div className="max-w-[200px] w-full h-full max-h-[400px]  rounded-[500px]  bg-[#F5F5F5] absolute top-[-120px] right-[-130px]  rotate-[30deg] self-center z-0"/>
            <div className="max-w-[120px] z-20 mx-auto pt-[40px]">
             <Image src={logo} alt='' />    
            </div> 
             <div className="flex flex-col text-center z-20 pt-[22px]">
                   <h1 className='text-[35px] text-center z-20 font-medium'>AI WORKPLACE</h1>
                   <h1 className='text-[35px] text-center z-20 font-bold'>STEP CHALLENGE</h1>
             </div>
             <div className="flex flex-col z-20 text-center pt-[12px]">
                   <h1 className='text-[14px] text-[#979797] text-center font-normal'>SELECT YOUR <span className='font-[bold] text-[#565454]'>MAIN GOAL</span></h1>
                   <h1 className='text-[12px] text-[#000] pt-[5px] text-center font-medium'>1-MINUTE</h1>
             </div>
             <div className="grid grid-cols-2 z-20 px-[20px] gap-x-[15px] gap-y-[12px] pt-[10px]">
               {data.map((item,index:number)=>(
                <button key={index} onClick={()=>myfun(index)} className='rounded-[12px] relative bg-[#F5F5F5] border-none border-[#979797] flex flex-col gap-[3px] justify-center border-[1px] items center py-[25px] transition duration-300 ease-in-out z-20 hover:bg-yellow-400 hover:bg-opacity-30 hover:-translate-y-1'>
                      <Image src={item.img} alt='' className='max-w-[35px] max-h-[35px] mx-auto'/>
                      <h1 className='text-[14px] text-center text-[#343434] font-semibold mx-auto'>{item.title}</h1>
                      {hidden[index] && <Image src={tick} alt='' className='max-w-[20px] max-h-[20px] absolute right-3 top-2'/>}
                </button>
               ))}
             </div>
             <div className="pt-[30px] text-center text-[#606060] text-[12px]">
               By selecting one of the options above, you agree with <u>Terms of  Conditions,Privacy Policy,Subscription Terms</u>
             </div>
        </>
  )
}

export default Section1