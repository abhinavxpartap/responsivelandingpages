import Image from 'next/image'
import React from 'react'
import logo from "../Img/stars.png"

const Navbar1 = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#000] flex justify-between '>
        <div className="max-w-[219px] flex">
           <Image src={logo} alt=''/>
           <h1 className='text-white'>logo</h1>
        </div>
        <div className="flex bg-white max-w-[200px]">
            <p>ha1</p>
            <p>ha5</p>
            <p>ha4</p>
            <p>ha3</p>
        </div>
        <div className="flex w-[120px]">

        </div>
    </div>
  )
}

export default Navbar1