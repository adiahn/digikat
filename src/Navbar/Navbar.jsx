 import logo from "../../public/logo.png";
 import "./nav";
import React from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from 'react-scroll';







const Navbar = () => {




  useEffect(() => {
    const handleScroll = () => {
      const icon = document.getElementById('menuIcon');

      // Check if the scroll position is beyond 100vh
      const isScrolled = window.scrollY > window.innerHeight;

      // Add or remove the 'scrolled' class based on the scroll position
      icon.classList.toggle('scrolled', isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 



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
    setNavIcons(<RiMenu3Line className="text-white scrolled "/>);
  };
  //Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  return (
    
  
       <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 md:px-16 px-4">
      <a href="#" className="flex justify-center items-center gap-x-2">
        <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-white text-[24px] line-[36px]">DIGIKAT</h1>
      </a>

        {/* Nav as */}
        <ul className="animation" data-nav-toggle={navToggle}>
          <div className="flex flex-col md:flex-row">

          <a className="py-2 px-5  bg-home_button font-[600] w-[100px]font-[600] h-[40px] text-center rounded-[5px] text-gray"
           onClick={closeNavLink} >
            <Link to="header" smooth={true} duration={500}>Home</Link>
        </a> 
        <a className="py-2 px-5  rounded-[7px] font-[600] text-white text-center nav-link"
          onClick={closeNavLink} href='#programmes'>
             <Link to="programmes" smooth={true} duration={500}>Programmes</Link>
          
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            onClick={closeNavLink} href='#team'>
              <Link to="team" smooth={true} duration={500}>Team</Link>
        </a>
        <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            onClick={closeNavLink} href="#about">
        <Link to="about" smooth={true} duration={500}>About Us</Link>
        </a> 
        <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-white md:mr-4 mb-2 md:mb-0 text-center nav-link"
            onClick={closeNavLink} href="#advisory">
          <Link to="advisory" smooth={true} duration={500}>Advisory Board</Link>
        </a> 
        <a className="py-2 px-5  rounded-[7px]  font-[600] text-white text-center nav-link"
          href="#sponsors" onClick={closeNavLink}>
         <Link to="sponsors" smooth={true} duration={500}>Sponsors</Link>
        </a>
        <a className="py-2 px-5  rounded-[7px]  font-[600] text-white text-center nav-link"
          href="#contact" onClick={closeNavLink}>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
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

