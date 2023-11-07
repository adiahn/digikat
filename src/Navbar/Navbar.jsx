 import logo from "../../public/logo.png";
//  import "./nav";
import React from 'react';
import { RiMenu3Line, RiCloseLine, RiSearch2Line } from "react-icons/ri";
import { useState, useEffect} from "react";
import { Link } from 'react-scroll';







const Navbar = () => {

 
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");
  const [showSearchBar, setShowSearchBar] = useState(false);

 //  Open Navbar Links > 768px
   const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  //Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line className="text-white"/>);
  };
  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };
  //Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const scrollY = window.scrollY;

      if (scrollY >= 10) {
        navbar.classList.add('nav_active');
      } else {
        navbar.classList.remove('nav_active');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    
  <div>
       <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 md:px-16 px-4">
      <a href="#" className="flex justify-center items-center gap-x-2">
        <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-white text-[24px] line-[36px]">DIGIKAT</h1>
      </a>

        {/* Nav as */}
        <ul className={`animation ${navToggle ? 'active' : ''}`}>
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
        {/* <a className="py-2 px-5  font-[600] w-[100px]font-[600] h-[40px] text-center "
           onClick={toggleSearchBar} >
           <RiSearch2Line className={`text-white ${window.scrollY >= 100 ? 'search-active' : ''}`} size={20}/>
        </a>   */}
          </div>  
      </ul>
      
      {/* icons for toggling */}
      <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
      {navIcons}
      </div>
    </nav>
    {/* {showSearchBar && (
      <div className="">
        <div className="search-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
        
        </div>
       
     
      )} */}
      
  </div>
    
  );
  };


export default Navbar;

