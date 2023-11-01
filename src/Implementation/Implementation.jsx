import React from 'react';
import TeamCard from "./Info";
import teamData from "./list.json";


function Implementation() {
  return (
    <div className="container mx-auto over h-full">
      <div className="text-center mt-20 mb-12 ">
        <p className="text-[3em] font-bold text_gradient ">Meet Our Team</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-y-10 place-items-center mt-[4rem] md:w-[100%] w-full m-auto">
        {teamData.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </div>
    </div>
   
  );
}

export default Implementation;

