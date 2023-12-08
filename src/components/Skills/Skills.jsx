import React from 'react';
import { skillsDatas } from '../../datas/skills.js';
import { FaLaptopCode, FaServer, FaPalette, FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs, FaFigma } from 'react-icons/fa6';
import { SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import '../Skills/skills.scss';


function Skills() {

  const getIcon = (name) => {
    switch (name) {
      case 'Front-end':
        return <FaLaptopCode />;
      case 'Back-end':
        return <FaServer />;
      case 'Design':
        return <FaPalette />;
      default:
        return null;
    }
  };

  const getIcon2 = (tags) => {
    return tags.map((tag) => {
      switch (tag) {
        case 'HTML':
          return <FaHtml5 key={tag} />;
        case 'CSS':
          return <FaCss3 key={tag} />;
        case 'JS' :
          return <DiJavascript key={tag} />;
        case 'REACT':
          return <FaReact key={tag} />;
        case 'SASS':
          return <FaSass key={tag} />;
        case 'node' :
          return <FaNodeJs key={tag} />;
        case 'mongodb' :
          return <SiMongodb key={tag} />;
        case 'indesign' :
          return <SiAdobeindesign key={tag} />;
        case 'photshop' :
          return <SiAdobephotoshop key={tag} />;
        case 'illustrator' :
          return <SiAdobeillustrator key={tag} />;
        case 'figma' :
          return <FaFigma  key={tag} />;
        default:
          return null;
      }
    });
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skills-cards">
        {skillsDatas.map((item) => {
          return (
            <div className="flip-card" key={item.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="custom-icons">{getIcon(item.name)}</div>
                  <h3>{item.name}</h3>
                </div>
                <div className="flip-card-back">
                  <div className="text-container-card-back">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="custom-icons-2">{getIcon2(item.tags)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
