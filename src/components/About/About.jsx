import React from "react";
import illustration from '../../assets/illustration-about-me.png';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Scrolldown from "../Scrolldown/Scrolldown";
import '../About/about.scss';

function About() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1nmkiNBE1UNko9YHRei6PGvbZeJve5pBt/view?usp=sharing";
    link.download = 'CV_AB_2022.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const sendEmail = () => {
    window.location.href = 'mailto:alexbaumann342@email.com';
  }

  return (
    <div id="about">
      <div className="about-left-part">
        <div className="illustration">
          <img src={illustration} alt="illustration dev web" onClick={sendEmail} />
        </div>
        <div className="about-links">
          <button onClick={downloadCV} target="_blank">CV</button>
          <a href="https://github.com/AleB798" target="_blank" rel="noopener noreferrer" className="custom-icons" aria-label="mon profil GitHub"><FaGithub /></a>
          <a href="https://github.com/AleB798" target="_blank" rel="noopener noreferrer" className="custom-icons" aria-label="mon profil LinkedIN"><FaLinkedin /></a>
        </div>
      </div>
      <div className="about-right-part">
        <div className="about-texts">
          <h2>Alexandra</h2>
          <h2> Développeuse web</h2>
          <h2>front-end & 
            <span className="job-2"> graphiste</span></h2>
          <p>
            Diplômée en tant
            que développeuse web et forte
            d’une expérience de 7 ans en
            tant que graphiste, je fusionne
            des compétences techniques
            et créatives.  
          </p>
        </div>
      </div>
      <div className="scroll-down-icon">
        <Scrolldown />
      </div>    
    </div>
  );
};

export default About;
