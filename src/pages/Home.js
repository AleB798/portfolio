import React from "react";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';

function Home() {
  return (
    <div>
      <About />
      <Header />
      <Skills />        
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;

