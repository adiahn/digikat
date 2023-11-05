import React from "react";
import Button from "../Button";


export default function Information({ data }) {
  return (
    <div
      className={`${
        data.isImgSecond == false 
      }`}>
      <div className=" w-full h-full " >
        <div className="w-full h-full relative" >
        <img src={data.img} className=" w-full h-full object-fit-cover" alt={`digikat${data.id}`}/>
        <h2 className="text-xl lg:text-2xl font-[700] line-normal leading-normal font-Poppins  text-shadow-md text-indigo-950 text-center self-center absolute w-[20.1875rem] m-auto left-0 top-[25%] right-0 bottom-0">
          {data.title1}
        </h2>
        </div>
         <div className=" w-[100%] relative">
            <p className="text-[1rem] text-[#151515] leading-[1.1rem]  font-[600] h-full w-full p-[1rem]">{data.description}</p>
            <div className="text-center"><button className="w-[150px] h-[40px] rounded-[10px] border-[1px] border-indigo-950">ENROL</button></div>
        </div> 
       </div>
    </div>
  );
}





























































// width: 30.3125rem;
// height: 17.25rem;
// flex-shrink: 0;
// width: 20.1875rem;
// color: #111947;
// text-align: center;
// font-family: Poppins;
// font-size: 1.5rem;
// font-style: normal;
// font-weight: 700;
// line-height: normal;