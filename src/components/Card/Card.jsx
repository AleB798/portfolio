import React from 'react';

function Card({ id, cover, title, onCardClick }) {
    const handleCardClick = () => {
        onCardClick(id);
    };

    return (
        <div onClick={handleCardClick} className="rental-card">
            <div>
                <img src={cover} alt={title} />
            </div>
            <div className='overlay-card'>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Card;
