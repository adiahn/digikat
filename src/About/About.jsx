
import React from 'react';
import about from '../../public/hero.png';

const About = () => {
  return (
    <div className='flex flex-col  md:px-16 mx-4 relative' id='about' name='about'>
       <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <div className="text-center  mb-12 ">
               <p className="text-[3em] font-bold text_gradient text-primary font-poppins">About</p>
           </div>
          </div>
        <div className='flex md:flex-row  flex-col justify-between md:p-5 px-4'>
            <section className=' md:w-1/2 w-full md:h-96 h-full gap-4'>
                <p className="text-indigo-950 text-justify md:text-xl text-lg font-[700] md:leading-[38px] leading-8 md:tracking-wide tracking-normal border-[red]"><span className="text-indigo-950 text-[64px] font-[700] font-sans md:leading-[48px] leading-4 md:tracking-[2.56px] tracking-normal mx-4">"DIGIKAT" </span>
                The Digital Katsina State Project (#DIGIKAT) is a transformative initiative aimed at digitizing Katsina State, Nigeria, with the ultimate goal to educate, empower and upskill, the project aimed to make individual and groups be digital. Also, it aims to improve public services by making public servants computer literate and improving their productivity, develop efficient trade mechanisms, and establish technology and digital transformation rather of individual and groups. 
                    </p>
            </section>
            <section className='md:w-[45%] w-full md:block hidden'>
              <img src={about} alt="" />
            </section>
        </div>
    </div>
  )
}

export default About