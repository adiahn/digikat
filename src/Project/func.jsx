import React from "react";



export default function func({ data }) {
  return (
    <div className="overcard flex flex-col bg-[white] w-[330px] h-[380px] rounded-[10px] shadow-md z-[1]">
      <img src={data.image} alt="Profile" className="w-full p-2 md:h-1/2 h-[30%] "/>
      <div class="flex flex-col items-center justify-center md:h-1/2 h-2/3">
      <div className="text-center pb-8">
        <div className="text-xl font-semibold text-gray-500">{data.name}</div>
        <div className="text-gray-500">{data.role}</div>
      </div>
      {/* <Button label="ENROL" width="150px" height="40px "  /> */}
      <button  className="inline-block text-white text-[24px] sm:text-base px-6 md:px-8 py-2 bg-primary rounded-[7px] hover:shadow-md active:scale-90 duration-200 font-poppins font-[500]"
    >
     ENROL
    </button>
      </div>
    </div>
  );
}


 

