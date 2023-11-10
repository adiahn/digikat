import React from "react";
import { motion as m } from "framer-motion";
import Button from "../Button";
import Hero2 from "../Hero2/Hero2";





const header = () => {
    const websiteName = "DIGIKAT";
    const letter = Array.from(websiteName);
    return (
        <m.header className="overflow-hidden relative md:mb-12 h-screen  md:px-16 px-4 md:pt-[10%] w-full" id="header" name='header'>
            <div className="mt-[50%] md:mt-0 w-full h-14 text-white text-xs font-medium font-oppins" id="gg">
            <div className="flex flex-col  justify-start md:w-[80%] w-[100%] h-full 2xl:h-auto ">      
          {/* h1 tag */}
          <h1 className=" text-white font-[900] text-start uppercase text-[3rem] lg:text-[8vw] xl:text-[108px] leading-[1.1]">
          {letter.map((L, i) => {
            return (
              <m.span
                className={`${i == 5 ? "mr-4 sm:mr-2" : ""} inline-block`}
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: [1.3, 1] }}
                transition={{
                  duration: 1,
                  delay: i * 0.05,
                  type: "spring",
                }}>
                {""}
                {L}{""}
              </m.span>
            );
          })}
        </h1>

         {/* short information about Website */}
                        <m.p
                        className="my-2 md:mb-6 opacity-0  py-4 lg:text-[3vw] xl:text-[36px] md:leading-normal font-poppins font-[500] md:font-[700] text-2xl md:text-[0.5rem] line-[2.7rem] text-white h-[8.625rem]  w-[full] text-start p-0"
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delay: 0.1 }}>
                        The Digital Katsina State Project (#DIGIKAT) is a transformative initiative aimed at digitizing Katsina State.  
                        </m.p>
            <div className="mt-20 py-4"><Button label="READ MORE" width="200px" height="50px"  /></div>
             </div>
             <div className="hidden md:block">
               <Hero2 />
             </div> 
            </div>
      
             
        </m.header>
       
    );
};

export default header;
