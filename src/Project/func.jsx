import React from "react";
import Button from "../Button";


export default function func({ data }) {
  return (
    <div className="overcard flex flex-col bg-[white] w-[330px] h-[380px] rounded-[10px] shadow-md z-[1]">
      <img src={data.image} alt="Profile" className="w-full p-2 h-1/2"/>
      <div class="flex flex-col items-center justify-center h-1/2">
      <div className="text-center pb-8">
        <div className="text-xl font-semibold text-gray-500">{data.name}</div>
        <div className="text-gray-500">{data.role}</div>
      </div>
      <Button label="READ MORE" width="150px" height="40px"  />
      </div>
    </div>
  );
}

 

