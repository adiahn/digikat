import React from 'react'
import TeamData from "./TeamData";

const Person = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 justify-evenly border-2 border-[green]'>
      {TeamData.map((person) => (
        <div key={person.id} className="overcard basis-3/3 h-1/2 border-2 border-[red]">
          <img src={person.src} alt="" />
          <h2>{person.name}</h2>
          <p>{person.occupation}</p>
        </div>
      ))}
    </div>
  );
};

export default Person;