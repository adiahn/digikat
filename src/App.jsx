import React from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Overlay from "./Overlay/Overlay"
import About from "./About/About";
import Project from "./Project/Project";
import Team from "./Team/Team";


const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Overlay />
      <About />
      <Project />
      <Team />
    </div>
  );
}

export default App
