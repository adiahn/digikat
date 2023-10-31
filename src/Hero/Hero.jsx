import React from "react";
import { motion as m } from "framer-motion";
import Button from "../Button";





const header = () => {
    const websiteName = "DIGIKAT";
    const letter = Array.from(websiteName);
    return (
        <m.header className="overflow-hidden relative mb-12  w-full" id="header">
             <div className="flex flex-col items-center justify-center text-center h-screen 2xl:h-auto 2xl:py-[10em] ">
          {/* h1 tag */}
          <h1 className=" text-white font-[900] uppercase text-[32px] lg:text-[8vw] xl:text-[108px] leading-[1.1]">
          {letter.map((L, i) => {
            return (
              <m.span
                className={`${i == 5 ? "mr-4 sm:mr-2" : ""} inline-block`}
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: [1.3, 1] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  type: "spring",
                }}>
                {" "}
                {L}{" "}
              </m.span>
            );
          })}
        </h1>

         {/* short information about Website */}
         <m.p
          className="my-2 mb-6 opacity-0 px-4 lg:px-[10%] text-base lg:text-[3vw] xl:text-[36px] leading-tight font-poppins font-[500] text-[32px] line-[48] text-white"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}>
         The Digital Katsina State Project (#DIGIKAT) is a transformative initiative aimed at digitizing Katsina State, Nigeria, with the ultimate goal to educate, empower and upskill, the project aimed to make individual and groups be digital. 
        </m.p>
        <Button label="READ MORE" width="150px" height="40px"/>
             </div>
        </m.header>
       
    );
};

export default header;
