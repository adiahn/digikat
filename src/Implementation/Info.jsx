import React from "react";
import {motion as m} from "framer-motion";

export default function Info({ data }) {
  return (
    <m.div className="overcard2 flex flex-col rounded-md "   animate={{ opacity: [0, 1] }}
    transition={{ duration: 1, delay: 0.05 * data.id }} >
      <img src={data.image} alt="Profile" className="w-full h-full object-cover rounded-md"/>
      <div class="flex flex-col items-center justify-center h-[40%] rounded-md">
      <div className="text-center">
        <div className="text-xl font-semibold text-gray-500">{data.name}</div>
        <div className="text-gray-500">{data.role}</div>
      </div>
      </div>
    </m.div>
  );
}

 

