import React from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Overlay from "./Overlay/Overlay"
import About from "./About/About"


const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Overlay />
      <About />
    </div>
  );
}

export default App
