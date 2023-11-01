 import logo from "../../public/logo.png";
 import "./nav";
import React from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";







const Navbar = () => {
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");

 //  Open Navbar Links > 768px
   const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  //Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line />);
  };
  //Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  return (
  
       <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 md:px-16 px-4">
      <a href="#" className="flex justify-center items-center gap-x-2">
        <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-primary text-[24px] line-[36px]">DIGIKAT</h1>
      </a>

        {/* Nav as */}
        <ul className="animation" data-nav-toggle={navToggle}>
          <div className="flex flex-col md:flex-row">

          <a className="py-2 px-5  bg-home_button font-[600] w-[100px]font-[600] h-[40px] text-center rounded-[5px] text-gray"
           onClick={closeNavLink}>
          Home
        </a> 
        <a className="py-2 px-5  rounded-[7px] font-[600] text-black text-center"
          href="#" onClick={closeNavLink} >
          Programmes
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-black md:mr-4 mb-2 md:mb-0 text-center"
            onClick={closeNavLink}>
          Team
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-black md:mr-4 mb-2 md:mb-0 text-center"
            onClick={closeNavLink}>
         About Us
        </a> 
        <a className="py-2 px-5  rounded-[7px]  font-[600] text-black text-center"
          href="#" onClick={closeNavLink}>
          Contact
        </a>
          </div>  
      </ul>
      
      {/* icons for toggling */}
      <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
      {navIcons}
      </div>
    </nav>
    
  );
  };


export default Navbar;

