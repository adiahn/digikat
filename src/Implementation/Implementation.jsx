import React from 'react';
import TeamCard from "./Info";
import teamData from "./list.json";


function Implementation() {
  return (
    <div className="container mx-auto mt-[5%] h-full">
      <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient  text-primary z-[1]">Implementation Team</p>
               {/* <div className="flex justify-center items-center">
                <div className="w-4 h-4 bg-indigo-100 rounded-full relative" id='shit'></div>
               </div> */}
           </div>
            <p className="text-center">Meet our team.A group of forward thinkers pushing the boundaries of what is possible</p>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 place-items-center mt-[4rem] md:w-[100%] w-full m-auto">
        {teamData.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </div>
    </div>
   
  );
}

export default Implementation;

