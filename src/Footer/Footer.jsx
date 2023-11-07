import React from 'react';
import logo from "../../public/logo.png";
import { Link } from 'react-scroll';


const Footer =() => {
    return(
<div className="w-full h-[547px] bg-slate-950 mt-16 px-4">
    <div className="relative max-w-md mx-auto top-8 w-full">
      <input type="email" className="w-full pr-16 pl-2 py-2 border rounded-r-md border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500" placeholder="Subscribe for our Newsletter"/>
      <button type="submit" className="absolute top-0 right-0 h-full px-4 py-2 bg-indigo-950 text-white rounded-r-md">
        Subscribe
      </button>
    </div>
    <div className="w-full flex justify-between items-center md:px-16 px-4 h-1/2">
     <a href="#" className="flex justify-center items-center gap-x-2">
       <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-white text-[24px] line-[36px]">DIGIKAT</h1>
     </a>

       {/* Nav as */}
       <ul className="animation">
         <div className="flex flex-col md:flex-row">

         <a className="py-2 px- font-[600] w-[100px]font-[600] h-[40px] text-center rounded-[5px] text-gray"
           >
           <Link to="header" smooth={true} duration={500}>Home</Link>
       </a> 
       <a className="py-2 px-5  rounded-[7px] font-[600] text-white text-center"
          href='#programmes'>
            <Link to="programmes" smooth={true} duration={500}>Programmes</Link>
         
       </a>
       <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            href='#team'>
             <Link to="team" smooth={true} duration={500}>Team</Link>
       </a>
       <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            href="#about">
       <Link to="about" smooth={true} duration={500}>About Us</Link>
       </a> 
       <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            href="#advisory">
         <Link to="advisory" smooth={true} duration={500}>Advisory Board</Link>
       </a> 
       <a className="py-2 px-5  rounded-[7px]  font-[600] text-white text-center nav-link"
         href="#sponsors" >
        <Link to="sponsors" smooth={true} duration={500}>Sponsors</Link>
       </a>
       <a className="py-2 px-5  rounded-[7px]  font-[600] text-white text-center nav-link"
         href="#contact" >
         <Link to="contact" smooth={true} duration={500}>Contact</Link>
       </a>
         </div>  
     </ul>
     
   </div>

</div>
    )
}
export default Footer;










