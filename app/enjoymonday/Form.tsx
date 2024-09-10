'use client'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import link from "../Img/Frame 1261152499.png" 
import google from "../Img/Frame 1261152500.png"
import ggg from "../Img/Frame 1261152501.png"
import Image from 'next/image';

const Form = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (
    <div className='max-w-[559px] rounded-[16px] bg-[#FFFFFF] p-[40px] flex flex-col gap-[29px] border-[0.95px] border-solid border-[#C4CFDE]'>
       <TextField id="outlined-basic" label="First Name" variant="outlined" className='max-w-[479px]  rounded-[8px]'/>
       <TextField id="outlined-basic" label="Last Name " variant="outlined" className='max-w-[479px]  rounded-[8px]'/>
       <TextField id="outlined-basic" label="Email" variant="outlined" className='max-w-[479px]  rounded-[8px]'/>
       <TextField id="outlined-basic" label="Company Name" variant="outlined" className='max-w-[479px]  rounded-[8px]'/>

       <FormControl className='max-w-[479px]  rounded-[8px]' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
        <FormControl className='max-w-[479px] rounded-[8px]' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

            <div className='flex max-w-[457px] justify-start gap-[16px] items-start'>
                <input type="checkbox" id="check" className='md:w-[24px] md:h-[24px] w-[20px] h-[20px] flex justify-center bg-[#A1A3B0] items-center border-[0.952px] border-solid rounded-[4.8px] border-slate-500'/>

                <label htmlFor="check" className='font-inter text-[14px] md:text-[16px] text-[#2C3238] font-normal tracking-[0.28px] leading-[22px] grow'>When you register, you gain access to all the amazing features of Enjoy Monday. Plus, agreeing to our <span className='text-[#2C98F0]'>Terms of Service</span> and<span className='text-[#2C98F0]'> Privacy Policy</span>means you understand your rights and responsibilities when using our service and how we process your data. Let's get started!.</label>
             </div>
             
             <div className='flex max-w-[457px] justify-start gap-[16px] items-start'>
                <input type="checkbox" id="check" className='md:w-[24px] md:h-[24px] w-[20px] h-[20px] flex justify-center bg-[#A1A3B0] items-center border-[0.952px] border-solid rounded-[4.8px] border-slate-500'/>

                <label htmlFor="check" className='font-inter text-[14px] md:text-[16px] text-[#2C3238] font-normal tracking-[0.28px] leading-[22px] grow'>You agree to stay connected and informed! You'll receive emails and communications about exciting opportunities from third parties, but don't worry - you can opt out or unsubscribe at any time. <br />
                <span className='pt-[20px]'>
                Enjoy Mondays is committed to protecting the privacy of your information. Permissions are a component of our ongoing compliance initiatives.
                </span>
                <br/><span className='pt-[20px]'>
                We will make reasonable accommodations for the accessibility of this website. Please contact support@enjoymondays.com to request assistance if you need accommodations while using our website.
                </span>
                </label>
             </div>
             <div className='flex max-w-[492px] w-full justify-center items-center'>
              <button className='text-[16px] text-center max-w-[492px] w-full p-[16px] leading-normal   inline-flex bg-[#3ABAB1] font-inter text-white rounded-[7.619px] items-center justify-center'>
                  Post this job
              </button>   
             </div>
             <div className="flex max-w-[204px] h-[48px] mx-auto justify-center gap-[20px] items-center">
                  <Image src={link} alt="" className='w-[48px] h-[48px]'/>
                  <Image src={google} alt="" className='w-[48px] h-[48px]'/>
                  <Image src={ggg} alt="" className='w-[48px] h-[48px]'/>
             </div>
    </div>
  )
}

export default Form