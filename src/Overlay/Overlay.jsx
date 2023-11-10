import React from 'react';
import map from '../../public/map.png'
const Overlay = () => {
    return(
        <div className="w-[90%] max-w-full md:max-h-[250px]md:h-[250px] m-auto h-[full] pb-4 bg-indigo-100 rounded-[10px] relative top-[-8rem] items-top flex md:flex-row flex-col justify-center gap-2 p-5" >
          <div className="w-[100%] text-center md:mx-[2rem] h-full" >
            <h1 className="text-[#21336e] text-3xl font-bold font-sans p-2">VISION</h1>
            <p className="px-8 text-[#21336e] text-lg text-justify font-[700] font-Poppinsleading-[34px] tracking-wide z-40">The project will help the state to become one of the largest digital consumer bases in the country, provide opportunities for local-level businesses to become global and provides and ecosystem that supports talented and innovative citizens growth and success.</p>
          </div>
          <img className="w-full h-full absolute object-contain z-10 opacity-30" src={map} />
          <div className=" w-[100%] text-center md:mx-[2rem] ">
            <h1 className="text-[#21336e] text-3xl font-bold font-sans p-2">MISSION</h1>
            <p className="px-8  text-[#21336e] text-lg text-justify font-[700] font-Poppins leading-[34px] tracking-wide z-40">The project is designed to empower the people of Katsina State with essential digital skills and create a conducive environment for technological innovation and entrepreneur. It is aimed to make the state digital and improve the ease of doing business, create job opportunities for youths, and narrow the digital divide.</p> 
            </div>
        </div>
    )
}
export default Overlay;

