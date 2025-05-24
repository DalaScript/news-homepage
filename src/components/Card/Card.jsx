import React from 'react';
import './Card.css';

const Card = ({ img, index, heading, subheading }) => {

    return (
        <div className="card">
            <img src={img} 
                 alt="illustration" 
                 className="card__img" 
            />
            <div className="card__text-content">
                <span className="card__index">{index}</span>
                <h2 className="card__heading">{heading}</h2>
                <p className="card__subheading">{subheading}</p>
            </div>
        </div>
    )
}

export default Card