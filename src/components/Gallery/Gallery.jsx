import React, { useState } from 'react';
import useFetch from "../../hooks/useFetch.jsx";
import Card from '../Card/Card.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import Collapse from '../Collapse/Collapse.jsx';
import '../Gallery/gallery.scss';

function Gallery() {
    const { data } = useFetch('projects.json');
    const [selectedCard, setSelectedCard] = useState(null);
    const selectedCardData = data.find(item => item.id === selectedCard);


    const handleCardClick = (cardId) => {
        // Update l'ID de la carte sélectionnée
        setSelectedCard(cardId);
    };

    const closePopup = () => {
        // Fermer la fenêtre pop-up en réinitialisant l'ID de la carte sélectionnée
        setSelectedCard(null);
    };

    return (
        <div id="portfolio" className='rental-gallery-container'>
            <h2>Portfolio</h2>
            <div className="rental-gallery">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        title={item.title}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

        {selectedCard && (
            <div className="overlay-popup">
                <div className="popup">
                    <div className="popup-inner">
                        <div className="infos">
                            <h3>{selectedCardData.title}</h3>
                            <p>{selectedCardData.description}</p>
                            <Collapse data={[selectedCardData]} customTitle='Missions' content='missions' />
                        </div>
                        <div ClassName="carousel-popup">
                            <Carousel 
                                pictures={selectedCardData.pictures} 
                                title={selectedCardData.title} 
                                index={selectedCardData.index} />
                        </div>
                    </div>
                    <button onClick={closePopup} className="popup-close">X</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Gallery;
