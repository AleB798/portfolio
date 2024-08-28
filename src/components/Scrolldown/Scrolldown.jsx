import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";


//function to scroll to the next section
function Scrolldown() {
  
  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');

    if (nextSection) {
      const offsetTop = nextSection.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  return (
      <div className="scroll-down-icon">
        <FaCircleChevronDown onClick={scrollToNext} />
      </div>    
  );
};

export default Scrolldown;

