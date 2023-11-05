import React  from "react";
import Info from "./Spons_info.json";
import Func from "./Spons_func";
const Sponsors = () =>  {
    return(
      <section>
        <div className="text-[black] w-full  px-4 pb-[4rem] mt-[5%] md:px-16" id="sponsors" name='sponsors'>
          <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient font-poppins pt-16 text-primary ">Our Partners and sponsors</p>
           </div>
            <p className="text-center text-xl font-[700] text-primary font-poppins">The amazing companies and organizations that support and sponsor the activities of the project.
</p>
          </div>
          {/* card start */}
          <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-row gap-10 place-items-center mt-[4rem] md:w-[100%] w-full m-auto">
              {Info.map((member, index) => (
              <Func key={index} data={member} />
            ))}
         </div>
          {/* card ends */}
          
        </div>
      </section>
    )
};
export default Sponsors;