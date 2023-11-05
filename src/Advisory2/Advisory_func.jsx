import React from "react";



export default function Information({ data }) {
  return (
    <div
      className={ `${ data.isImgSecond == false }`}>
        <div className="md:w-[90%] w-full md:h-full h-[10rem] relative flex flex-row items-center md:gap-4 gap-2 justify-between rounded-md md:p-4 p-2 bg-indigo-950 md:mx-0" >
             <img src={data.img} className=" w-[86px] h-[86px] object-cover rounded-full" alt={`digikat${data.id}`}/>
             <div className="flex flex-col">
             <h2 className="w-[206px] text-white text-l font-semibold font-['Inter'] p-2">
                 {data.title1}
             </h2>
             <h3 className="w-[206px] text-[gray] text-sm font-semibold font-['Inter'] p-2">
                 {data.title2}
             </h3>
             </div>
        </div>
       </div>
  );
}


















































