// import React from 'react';
// import TeamCard from "./Info";
// import teamData from "./list.json";


// function Implementation() { 
//   return (
//     <div className="container mx-auto mt-[5%] h-full">
//       <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
//             <div className="text-center  mb-12 ">
//                <p className="text-[3em] font-bold text_gradient  text-primary">Advisory Board</p>
//            </div>
//             <p className="text-center">This is our stellar panel of advisors that bring diverse perspective and expertise and also lends their wisdom and guidance to the success of the project</p>
//           </div>
//       <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row gap-y-10 place-items-center mt-[4rem] md:w-[100%]">
//         {teamData.map((member, index) => (
//           <TeamCard key={index} data={member} />
//         ))}
//       </div>
//     </div>
   
//   );
// }

// export default Implementation;
import map2 from '../../public/map2.png'
import Advisory2 from '../Advisory2/Advisory2';


function Advisory() { 
  return (
    <div className="w-full md:h-[250px] h-[50vh] bg-indigo-200 bg-opacity-80 flex md:flex-row  flex-col mt-[5%] items-center relative md:px-0 px-4" name='Advisory' id='advisory'>
            <div className="flex flex-col w-full md:w-1/2 p-2 ">
               <p className="text-[1.5em] font-bold text_gradient text-center font-poppins text-primary ">Advisory Board</p>
               <p className="text-center md:w-[60%] w-full text-xl font-[700] text-primary font-poppins m-auto py-2">This is our stellar panel of advisors that bring diverse perspective and expertise and also lends their wisdom and guidance to the success of the project</p>
           </div>
           <img src={map2} alt="" className='absolute w-full md:h-full h-2/3 opacity-40 object-contain ' />
           <div className="md:w-1/2 w-full">
            <Advisory2 />
           </div>
    </div>
   
  );
}

export default Advisory;

