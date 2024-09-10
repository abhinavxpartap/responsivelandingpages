"use client"
import React ,{useState} from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import pic from "../Img/Bitmap.png"
import { MdExpandMore } from "react-icons/md"
import ind from "../Img/in.png"
import bgpic from "../Img/stars.png"


const Login = () => {
   const [forms , setForms] = useState({fname:"",lname:"",email:"",number:""})

   const handleChange = (e:any) =>{
     const {name , value} = e.target
     setForms((prev) => ({...prev, [name]: value}))
     console.log(forms)
   }

 
   const form = (
    <>
      <Navbar/>
      <div className="flex justify-center items-center pt-[165px] pb-[90px]">
        <div className="max-w-[1206px]  mx-[30px] w-full h-[784px] flex lg:justify-between justify-center rounded-[18px] border-[0.12px] border-solid border-[#ffffff8c] bg-[#FFF]">
          <div className="max-w-[564px] lg:block hidden">
             <Image src={pic} alt="" className='rounded-l-[18px] max-w-[564px] max-h-[784px]'/>
          </div>
          {/* right side */}
          <div className="max-w-[642px] px-[5px] w-full flex flex-col items-center justify-center ">
           <div className="max-w-[492px] flex flex-col  gap-[23px]">
             <h4 className='font-semibold font-inter text-[28.82px] md:text-[32px]  text-center leading-[130%] non-italic'>
               <u className='max-w-[303px] text-[#F66]'><span className='text-[#101D2C]'>Get a FREE Quotation</span></u>
             </h4>
             {/* inputvalues */}
             <div className="max-w-[492px] flex flex-col lg:px-0 ">
                {/* row1 */}
                <div className='max-w-[492px] flex gap-[10px]'>
                 <div className='flex flex-col items-start gap-[4px]'>
                  <p className="font-inter text-[17.1px] md:text-[19px] text-[#344054] font-medium leading-normal">
                    First name*</p>
                 <div className='border-[0.952px] max-w-[199px] w-full border-solid py-[26px] px-[15px] rounded-[8px] border-slate-500 grow'>
                 <input type="text" value={forms.fname} name='fname' onChange={(e)=>handleChange(e)} placeholder='First name' className='font-inter text-[17.1px] md:text-[23px] text-[#0A0E28] leading-normal font-[400px]  flex justify-between items-center w-full '/>
                 </div>
                 </div>
                 <div className='flex flex-col items-start gap-[4px] grow'>
                  <p className="font-inter text-[17.1px] md:text-[19px] text-[#344054] font-medium leading-normal">
                   Last name*</p> 
                 <div className='border-[0.952px] max-w-[324px] w-full border-solid py-[26px] px-[15px] rounded-[8px] border-slate-500'>
                 <input type="text" value={forms.lname} name='lname' onChange={(e)=>handleChange(e)} placeholder='Last name' className='font-inter text-[17.1px] md:text-[23px] text-[#0A0E28] leading-normal font-[400px]  flex justify-between items-center w-full '/>
                </div>
                 </div>
                </div>
                {/* r0w1code end  */}
                <div className='flex flex-col items-start gap-[4px] pt-[20px]'>
                <p className="font-inter text-[17.1px] md:text-[19px] text-[#344054] font-medium leading-normal">
                    Email Address*</p>
                 <div className='border-[0.952px] max-w-[492px] w-full border-solid py-[26px] px-[15px] rounded-[8px] border-slate-500 '>
                 <input type="text" value={forms.email} name='email'  onChange={(e)=>handleChange(e)} placeholder='you@company.com' className='font-inter text-[17.1px] md:text-[23px] text-[#0A0E28] leading-normal font-[400px]  flex justify-between items-center w-full'/>
                </div>
                </div>
                {/* phone number  */}
                <div className='max-w-[492px] flex gap-[10px] pt-[20px]'>
                 <div className='flex flex-col items-start gap-[4px]'>
                  <p className="font-inter text-[17.1px] md:text-[19px] text-[#344054] font-medium leading-normal">
                    Country*</p>
                 <div className='border-[0.952px] max-w-[156px] w-full border-solid py-[26px] px-[15px] rounded-[8px] border-slate-500 grow'>
                 <p className='font-inter text-[17.1px] md:text-[23px] text-[#0A0E28] leading-normal font-[400px]  flex justify-between items-center'>
                  <Image src={ind} alt='' className='md:w-[24px] md:h-[24px] w-[15px] h-[15px] '/>+91 
                  <span className='sm:px-[24px]'><MdExpandMore className="flex items-center "/></span>
                  </p>
                 </div>
                 </div>
                 <div className='flex flex-col items-start gap-[4px] grow'>
                  <p className="font-inter text-[17.1px] md:text-[19px] text-[#344054] font-medium leading-normal">
                  Business Phone Number*</p> 
                 <div className='border-[0.952px] max-w-[457px] w-full border-solid py-[26px] px-[15px] rounded-[8px] border-slate-500'>
                 <input type="number" value={forms.number} name='number' onChange={(e)=>handleChange(e)} placeholder='+1 347-586-9188' className='font-inter text-[17.1px] md:text-[23px] text-[#0A0E28] leading-normal font-[400px]  flex justify-between items-center w-full '/>
                </div>
                 </div>
                </div>
                {/* check box */}
                <div className='flex max-w-[457px] items-start gap-[11.426px] pt-[20px] '>
                <input type="checkbox" id="check" className='md:w-[24px] md:h-[24px] w-[20px] h-[20px] flex justify-center bg-[#F66] items-center border-[0.952px] border-solid rounded-[4.8px] border-slate-500'/>

                <label htmlFor="check" className='font-inter text-[14px] md:text-[16px] font-normal tracking-[0.28px] leading-[22px] grow'>By signing up you agree to our <span className='text-[#F66]'>User Agreement, Terms of Service, Terms of Use </span> and<span className='text-[#F66]'> Privacy Policy</span>.</label>
             </div>
             </div>
                {/* button */}
              <div className='flex max-w-[492px] justify-center pt-[20px] items-center'>
              <button className='text-[16px] text-center max-w-[492px] w-full h-[75.8px] leading-normal   inline-flex bg-[#F66] font-inter text-white rounded-[7.619px] items-center justify-center'>
                Submit
              </button>   
             </div>
            <p className='text-[15px] text-right  font-inter text-[#4B5A69]'>(*) Required Fields</p>
          </div>
          </div>
        </div>
      </div>
    </>
   )

  return (
    <div className='max-w-[1660px] mx-auto bg-cover bg-no-repeat bg-[#4B5A6930] rounded-[15px] border-[0.2px] border-solid border-grey shadow-gray-800 lg:mt-0 lg:pt-0 mt-[10px] pt-[10px]' style={{backgroundImage:`url(${bgpic.src})`}}>
     {form}
    </div>
  )
}

export default Login


