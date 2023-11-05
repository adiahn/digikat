import React from 'react';
import TeamCard from "./Info";
import teamData from "./list.json";


function Implementation() {
  return (
    <div className="container mx-auto mt-[5%] h-full" id='team' name='team'> 
      <div className="flex flex-col justiy-center items-center md:w-1/2 m-auto">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient  text-primary z-[1]">Implementation Team</p>
               {/* <div className="flex justify-center items-center">
                <div className="w-4 h-4 bg-indigo-100 rounded-full relative" id='shit'></div>
               </div> */}
           </div>
            <p className="text-center text-xl font-[700] text-primary font-poppins">Meet our team.A group of forward thinkers pushing the boundaries of what is possible</p>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-40 place-items-center mt-[4rem] w-full">
        {teamData.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </div>
    </div>
   
  );
}

export default Implementation;

