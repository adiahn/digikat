import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Info from "./Hero_funct";
import { SMOOTH } from "./Hero_info";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-0 left-0 right-0 flex m-auto justify-center mb-4">
        <ul className="flex justify-center m-auto space-x-1 mb-8">{dots}</ul>
      </div>
    ),
    
  };

 

  return (
    <section className='relative ' > 
    <Slider {...settings} className='w-[320px] h-[25rem] mx-auto absolute idiot rounded-[.7rem]'>
          {SMOOTH.map((data) => {
            return <Info data={data} key={data.id} />;
          })}
    </Slider>
    </section>
   
  );
};

export default SimpleCarousel;
