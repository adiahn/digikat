import React from 'react';
import Btn from '../Button'
const Contact = () => {
    return (
       <section>
        <div className="flex md:flex-row gap-y-4 flex-col md:w-[90%] w-full md:p-6 p-4 bg-primary  md:h-[25rem] h-30 m-auto mt-5 rounded-md" id='contact' name='contact'>
          <div className="flex flex-col md:w-2/6 w-full text-center items-center justify-center">
          <h3 className='font-poppins text-white text-cenetr text-[1.5em]'>Contact us</h3>
          <p className='font-poppins text-white text-cenetr'>Drop a message for more enquires, sponsorship or partnership. You can also reach us through our socials.</p>
          </div>
          <div className="md:w-4/6 w-full bg-neutral-100 flex flex-col items-center rounded-md">
           <input type="email" name="email" placeholder='anybody@gmail.com' id="" className=' w-[90%] my-8 h-[68px] bg-white rounded-[5px] border border-neutral-400 mx-auto'/>
           <input type="text" name="" placeholder='Write Something here' id="" className='w-[90%] h-[190px] bg-white rounded-[5px] border border-neutral-400'/>
          <div className="my-4">
          <Btn label={'SUBMIT'} width={''}/>
          </div>
          </div>
        </div>
       </section>
    )
}
export default Contact;