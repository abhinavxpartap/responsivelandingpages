"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Sliderpic from "../../../data/dataValue.json"
import Img from "../utilites/Img"


const Slider = () => {

 return (
        <div className="lg:px-[50px] px-[20px] pt-[50px]">
        <div className='max-w-[1360px] max-h-[650px] mx-auto lg:rounded-[40px] rounded-[20px] overflow-hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Sliderpic.Slider.map((img, index:number)=>(
              <SwiperSlide key={index}>
                <Img src={img.image} alt='' />
              </SwiperSlide>
            )
            )}
          </Swiper>
        </div>
        <h1 className='text-[#222] font-semibold text-center font-Montserrat not-italic xl:text-[50px] lg:text-[45px] md:text-[37px] sm:text-[30px] text-[25px] xl:leading-[65px] lg:leading-[57px] md:leading-[49px] sm:leading-[38px] leading-[28px] mx-auto max-w-[542px] pt-[30px]'>
         For Business Owners
        </h1>
        </div>
      );
    }

export default Slider