import React from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Overlay from "./Overlay/Overlay"
import About from "./About/About";
import Project from "./Project/Project";
import Implementation from './Implementation/Implementation';
import Advisory from './Advisory/Advisory';



const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Overlay />
      <About />
      <Project />
      <Implementation />
      <Advisory />
    </div>
  );
}

export default App
