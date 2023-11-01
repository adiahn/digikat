import React from 'react';
import map from '../../public/map.png'
const Overlay = () => {
    return(
        <div className="w-[1240px] h-[250px] bg-indigo-100 rounded-[10px] m-auto relative top-[-8rem] flex flex-row justify-center gap-4" >
          <div className="w-[100%] text-center m-x-[2rem]">
            <h1 className="text-sky-900 text-3xl font-bold font-['Inter'] p-4">VISION</h1>
            <p className="px-8 text-indigo-950 text-sm text-start font-[500] font-['Poppins'] leading-[34px] tracking-wide">The project will help the state to become one of the largest digital consumer bases in the country, provide opportunities for local-level businesses to become global and provides and ecosystem that supports talented and innovative citizens growth and success.</p>
          </div>
          <img className="w-[20%] h-full absolute" src={map} />
          <div className=" w-[100%] text-center m-x-[2rem] ">
            <h1 className="text-sky-900 text-3xl font-bold font-['Inter'] p-4">MISSION</h1>
            <p className="px-8  text-indigo-950 text-sm text-start font-[500] font-['Poppins'] leading-[34px] tracking-wide">The project is designed to empower the people of Katsina State with essential digital skills and create a conducive environment for technological innovation and entrepreneur. It is aimed to make the state digital and improve the ease of doing business, create job opportunities for youths, and narrow the digital divide.</p> 
            </div>
        </div>
    )
}
export default Overlay;
