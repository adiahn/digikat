import React from 'react';
const Overlay = () => {
    return(
        <div className="w-[1240px] h-[418px] bg-indigo-100 rounded-[10px] m-auto relative top-[-10rem] flex flex-row gap-4" >
          <div className="w-full text-center p-4q">
            <h1 className="text-sky-900 text-4xl font-bold font-['Inter']">VISION</h1>
            <p className="text-indigo-950 text-xl text-start font-medium font-['Poppins'] leading-[34px] tracking-wide">The project will help the state to become one of the largest digital consumer bases in the country, provide opportunities for local-level businesses to become global and provides and ecosystem that supports talented and innovative citizens growth and success.</p>
          </div>
          <div className=" w-full text-center p-4">
            <h1 className="text-sky-900 text-4xl font-bold font-['Inter']">MISSION</h1>
            <p className="text-indigo-950 text-xl text-start font-medium font-['Poppins'] leading-[34px] tracking-wide">The project is designed to empower the people of Katsina State with essential digital skills and create a conducive environment for technological innovation and entrepreneur. It is aimed to make the state digital and improve the ease of doing business, create job opportunities for youths, and narrow the digital divide.</p> 
            </div>
        </div>
    )
}
export default Overlay;
