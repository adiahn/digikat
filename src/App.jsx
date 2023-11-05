import React from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Overlay from "./Overlay/Overlay"
import About from "./About/About";
import Project from "./Project/Project";
import Implementation from './Implementation/Implementation';
import Advisory from './Advisory/Advisory';
import Sponspors from './Sponsors/Sponsors';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Element } from 'react-scroll';



const App = () => {
  return(
    <div>
      <Navbar />
      <Element name="header">
      <Hero />
      </Element>
      <Overlay />
      <Element name="about">
      <About />
      </Element>
      <Element name="programmes">
      <Project />
      </Element>
      <Element name="team">
      <Implementation />
      </Element>
      <Element name="advisory">
      <Advisory />
      </Element>
      <Element name="sponsors">
      <Sponspors />
      </Element>
      <Element name="contact">
      <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App
