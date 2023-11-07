import React from "react";



export default function Spons_func({ data }) {
  return (
    <div className="overcard3 flex flex-col w-[full] h-[full] ">
      <img src={data.image} alt="Profile" className="w-full h-1/2 object-cover md:h-full md:w-full"/>
    </div>
  );
}

 

