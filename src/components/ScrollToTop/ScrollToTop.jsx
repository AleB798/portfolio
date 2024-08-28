import React from "react";
import { FaCircleChevronUp } from "react-icons/fa6";  // Utilisez la flèche vers le haut

//function to scroll to the next section
function ScrollToTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Défilement jusqu'en haut (top: 0)
  }

  return (
      <div className="scroll-up-icon">
        <FaCircleChevronUp onClick={scrollToTop} />
      </div>    
  );
};

export default ScrollToTop;