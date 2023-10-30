 import logo from "../../public/logo.png";
// import Button from "../Button";
// import "./nav";
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
  
       <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 px-16">
      <a href="#">
        <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="logo" />
      </a>

        {/* Nav as */}
        <ul className="animation" data-nav-toggle={navToggle}>
          <div className="flex flex-col md:flex-row">

          <a className="py-2 px-5  bg-home_button w-[100px] h-[40px] text-center rounded-[5px] text-gray"
           onClick={closeNavLink}>
          Home
        </a> 
        <a className="py-2 px-5  rounded-[7px]  text-gray text-center"
          href="#" onClick={closeNavLink} >
          Programmes
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0  md:mr-4 mb-2 md:mb-0 text-center"
            onClick={closeNavLink}>
          Team
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0  md:mr-4 mb-2 md:mb-0 text-center"
            onClick={closeNavLink}>
         About Us
        </a> 
        <a className="py-2 px-5  rounded-[7px]  text-gray text-center"
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

