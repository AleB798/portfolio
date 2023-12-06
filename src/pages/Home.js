import React from "react";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import '../pages/home.scss';

function Home() {
  return (
    <div id='homepage'>
      <About />
      <Header />
        <div className="sections-width">
          <Skills />        
          <Gallery />
        </div>
      <Footer />
    </div>
  );
};

export default Home;

