import React from "react";



export default function Information({ data }) {
  return (
    <div
      className={ `${ data.isImgSecond == false }`}>
        <div className="w-[90%] h-full relative flex items-center gap-4 justify-between rounded-md p-4 bg-indigo-950 " >
             <img src={data.img} className=" w-[86px] h-[86px] object-fit-cover rounded-full" alt={`digikat${data.id}`}/>
             <h2 className="w-[206px] text-white text-xl font-semibold font-['Inter']">
                 {data.title1}
             </h2>
        </div>
       </div>
  );
}


















































