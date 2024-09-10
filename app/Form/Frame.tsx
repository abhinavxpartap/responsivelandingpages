import Image from 'next/image'
import React from 'react'
import Photo1 from "../Img/Photo.png"

const Frame = () => {
  return (
    <div className='max-w-[1440px] h-auto mx-auto pt-[110px] pb-[70px] md:pb-[120px] flex flex-wrap'>
       <div className=' bg-no-repeat bg-cover md:w-6/12 bg-white'>
        <Image src={Photo1} alt="loading" className=''/>
       </div>
       <div className=" md:w-6/12 px-[20px]">
        <div className='max-w-[678px] max-h-[358px] mt-[50px] pl-[5px] sm:pl-[20px]'>
          <h1 className='font-bold fade-in mx-auto md:mx-0 text-[25px] text-center md:text-start sm:text-[30px] sm:leading-normal md:text-[35px] md:leading-normal lg:text-[40px]
             lg:leading-normal  text-[#151448]'>
            Build next-gen web applications
          </h1>
          <h4 className='font-medium  pt-[8px] mx-auto md:mx-0  text-start text-[14px] sm:text-[18px]
             leading-normal   text-[#444] '>
             We provide end-to-end web app development services, tailored exclusively to solve your unique business challenges.
        </h4>
        
        <p className='font-normal  mx-auto md:mx-0 text-start text-[13px] md:text-[16px]
             leading-normal  pt-[8px] xl:pr-[76px] text-[#444] '>
             We use the latest technologies such as PHP, Web 2.0, HTML, Joomla, WordPress, Drupal, Magento and OSCommerce to create responsive and tailor-made web applications for your business. Our experienced team leverages the dynamism of PHP and combines it with database languages such as MySQL, HTML, CSS, JavaScript, PHP Code. We use frameworks such as ZEND, Codeigniter, 
             Laravel, Yii, and CakePHP to create products that work fluidly across platforms and devices.
        </p>
        </div>
       </div>
    </div>
  )
}

export default Frame