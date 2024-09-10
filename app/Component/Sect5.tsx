import React from 'react'
import img1 from "../Img/Group 361.png"
import img2 from "../Img/Group 212.png"
import img3 from "../Img/Group 313.png"
import img4 from "../Img/Group 204.png"
import img5 from "../Img/Group 195.png"
import img6 from "../Img/Group 256.png"
import Image from 'next/image'

const Sect5 = () => {

    const data = [
        {
        
            "title":"A Client Portal",
            "desc":"On your project dashboard, you'll be able to see the status of your project, including the tasks that have been completed and those that are still in progress.",
            "img": img1 
        },
        {
            
            "title":"Dedicated Project Manager",
            "desc":"As your project progresses, you'll be able to monitor the progress of individual tasks and milestones, ensuring that everything is on track.",
            "img": img2
        },
        {
            
            "title":"Monitor Progress",
            "desc":"As your project progresses, you'll be able to monitor the progress of individual tasks and milestones, ensuring that everything is on track.",
            "img": img3    
        },
        {
            
            "title":"Request Revisions",
            "desc":"You can request revisions from your vendors if you are not fully satisfied with the final work, and they will make the required changes until you are content with the outcome.",
            "img": img4
        },
        {
            
            "title":"Approve Completed Work",
            "desc":"Once a task or milestone is completed, you'll be able to review it and provide feedback. If you're satisfied with the work, you can approve it and move on to the next task.",
            "img": img5   
        },
        {
            
            "title":"Receive Regular Updates",
            "desc":"Our digital marketing professionals provide regular updates on their progress, so you'll always know what's happening with your project.",
            "img": img6
        }
    ]
return (
<div className='pt-[206px] pb-[69px]'>
<div className='max-w-[1020px] mx-auto px-[10px]'>
  <div className='gap-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {data.map((item, index: number) => (
      <div className='max-w-[300px] mx-auto flex flex-col'>
        <div className='rounded-[10px] max-w-[300px] max-h-[166px] border-[1px] pt-[55px] pb-[55px] px-[121px] border-solid border-gray-400 bg-[#F5F9FF]'>
          <Image src={item.img} alt='' className='w-[55px] h-[57px]' />
        </div>
        <div className='max-w-[262px] mx-auto pl-[19px] pr-[18px]'>
          <h1 className='text-[20px] leading-[24px] text-center pt-[21px] font-semibold text-[#101D2C] mx-auto'>
            {item.title}
          </h1>
        </div>
        <div className='max-w-[278px] pt-[14px] px-[11px] mx-auto'>
        <p className=' text-center  pb-[17px] text-[#101D2C] text-[17px]  font-[300px]'>
          {item.desc}
        </p>
      </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Sect5