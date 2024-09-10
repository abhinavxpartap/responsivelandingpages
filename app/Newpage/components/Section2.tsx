import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../Imggg/logo.png';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import MobileStepper from '@mui/material/MobileStepper';
import NewSection from './NewSection';
import { FaArrowLeft } from "react-icons/fa"

interface compo {
  step: number;
  index: number;
  bfun: () => void;
  myfun : (index:number) => void;
  hidden: { [key: number]: boolean };
}

const Section2: React.FC<compo> = (props) => {
  const { step, index, bfun } = props;

  const [steps, setStep] = useState<number>(step);
  const [currentStepIndex, setCurrentStepIndex] = useState(index);

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const handleNext = (indexv :number) => {
    setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
      setClicked((prevClickedButtons) => ({
        ...prevClickedButtons,
        [indexv]: false,
      })) ;
    }, 500);
    setClicked((prevClickedButtons) => ({
      ...prevClickedButtons,
      [indexv ]: true,
    }));
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    setCurrentStepIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
       <div className="max-w-[200px] w-full h-full max-h-[400px]  rounded-[500px]  bg-[#F5F5F5] absolute bottom-[-120px] right-[-100px]  rotate-[45deg] self-center -z-1"/>
        <div className='flex justify-between pt-[10px] items-end max-w-[395px] mx-auto'>
          <button onClick={steps === 1 ? bfun : handleBack} className='z-20'>
          <FaArrowLeft/>
          </button>
          <Image src={logo} alt='' className='max-w-[93px] max-h-[50px]' />
          <div className='text-[#979797]'>
           <span className='text-[#3C8AF0]'>{currentStepIndex + 1}</span>/{14}
          </div>
        </div>
        <div className='pt-5'>
          <MobileStepper
            variant='progress'
            steps={14}
            position='static'
            sx={{
              padding:0,
              maxWidth: "395px",
              flexGrow: 1,
              "& .MuiMobileStepper-progress": {
                height: '5px',
                width: '395px' ,
                borderRadius: 5
              },
            }}
            activeStep={steps}
            nextButton={<div onClick={()=>handleNext} className='hidden'/>}
            backButton={<div onClick={()=>handleBack} className='hidden'/>}
          />
        </div>
        <div className='pt-[20px] px-[20px]'>
        {steps === 1 && (
          <Section3 myfun={handleNext} hidden={clicked} />
        )}
        {steps === 2 && (
            <NewSection myfun={handleNext} hidden={clicked} />
        )}
        {steps === 3 && (
            <Section4 myfun={handleNext} hidden={clicked} />
        )}
        {steps === 4 && (
            <Section5 myfun={handleNext} hidden={clicked} />
            )}
        </div>
    </>
  );
};

export default Section2;
