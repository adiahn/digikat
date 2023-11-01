import React from "react";
import {motion as m} from "framer-motion";

export default function Info({ data }) {
  return (
    <div className="grid grid-cols-3">
        <m.div className="flex flex-row flex-wrap w-[370px] h-[120px] gap-2 bg-indigo-950 rounded-[5px] items-center justify-center "   animate={{ opacity: [0, 1] }}
    transition={{ duration: 1, delay: 0.05 * data.id }} >
      <img src={data.image} alt="Profile" className="w-[4rem] h-[4rem] rounded-full"/>
      <div className="text-center">
        <div className="text-xl font-semibold text-white">{data.name}</div>
        <div className="text-white">{data.role}</div>
      </div>
    </m.div>
    </div>
  );
}





 

