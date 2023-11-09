import React  from "react";
import Info from "./Informaton.json";
import Func from "./func";
const Project = () =>  {
    return(
      <section>
        <div className="text-[black] w-full px-4  bg-indigo-100 pb-[4rem] mt-[5%]" name='project' id="programmes">
          <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient font-poppins pt-16 text-primary ">PROJECT COMPONENTS </p>
           </div>
            <p className="text-center text-primary font-[700]">See the list of projects under this Project</p>
          </div>
          {/* card start */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-y-10 place-items-center mt-[4rem] md:w-[100%] w-full">
              {Info.map((member, index) => (
              <Func key={index} data={member} />
            ))}
         </div>
          {/* card ends */}
          
        </div>
      </section>
    )
};
export default Project;