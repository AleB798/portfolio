import React, { useState } from 'react';
import arrowPrev from '../../assets/arrow_prev.svg';
import arrowNext from '../../assets/arrow_next.svg';
import '../Carousel/carousel.scss';

function Carousel({ pictures, title, index }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? pictures.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === pictures.length -1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const showNavigation = pictures.length > 1; // pour ajout condition d'apparition de la nav et l'index

  return (
    <div className="carousel">
      {showNavigation && (
        <div>
          <button onClick={prevSlide} className="prev">
            <img src={arrowPrev} alt={'prev button'} />
          </button>
          <button onClick={nextSlide} className="next">
            <img src={arrowNext} alt={'next button'} />
          </button>
          <p>
            {currentIndex + 1} / {pictures.length}
          </p>
        </div>
      )}
      <div key={index}>
        <img src={pictures[currentIndex]} alt={title} className='carousel-img' />
      </div>
    </div>
  );
}

export default Carousel;
