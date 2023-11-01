import React from 'react';
import TeamCard from "./Info";
import teamData from "./list.json";


function Implementation() { 
  return (
    <div className="container mx-auto mt-[5%] h-full">
      <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient  text-primary">Advisory Board</p>
           </div>
            <p className="text-center">This is our stellar panel of advisors that bring diverse perspective and expertise and also lends their wisdom and guidance to the success of the project</p>
          </div>
      <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row gap-y-10 place-items-center mt-[4rem] md:w-[100%]">
        {teamData.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </div>
    </div>
   
  );
}

export default Implementation;


