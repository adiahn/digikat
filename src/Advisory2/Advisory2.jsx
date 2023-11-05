import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Info from "./Advisory_func";
import { SMOOTH } from "./Avisory_info";
const Item5 = () => {

  const Settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        }
        
      ]
  };

  return (
     
    <section className='' > 
    <Slider {...Settings} className='md:w-[700px] w-full rounded-[5px]'>
           {SMOOTH.map((data) => {
             return <Info data={data} key={data.id} />;
           })}
    </Slider>
     </section>
  );
};

export default Item5;
