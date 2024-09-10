"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Section1 from "./Section1";
import Section2 from "./Section2";

const Main = () => {
  
    const [step ,setStep] = useState<number>(0)
    const [currentStepIndex ,setCurrentStepIndex] = useState(0)
  
    const [clicked, setClicked] = useState<{ [index: number]: boolean }>({});
  
    const forward = (index:number) => {
      setTimeout(()=>{
        setStep(cur => cur + 1)
        setCurrentStepIndex(cur => cur + 1)
        setClicked((prevClickedButtons) => ({
          ...prevClickedButtons,
          [index]: false,
        }))    
      },500) 
  
      setClicked((prevClickedButtons) => ({
        ...prevClickedButtons,
        [index]: true,
      }))      
  
    }
  
    const backward = () => {
         setStep(cur => cur - 1)
         setCurrentStepIndex(cur=> cur - 1) 
     }
  
    return (
     <>
      <div className='bg-[#F5F5F5]'>
      <div className='max-w-[425px] relative p-[15px] h-[100vh] mx-auto bg-white overflow-hidden'>
      <div className="max-w-[210px] w-full h-full max-h-[210px]  rounded-[500px] opacity-[0.37] bg-[#b9f5f5] absolute top-[-120px] left-[-100px] self-center z-1"/>
      {step === 0 && (<Section1 myfun={forward} hidden={clicked} />)}
      {step === 1 && (<Section2 index={currentStepIndex} myfun={forward} hidden={clicked}  bfun={backward} step={step}/>)}
      </div>
      </div>
     </>
    )
  }

export default Main