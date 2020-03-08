import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
    <div className='card' style={{ border: 'none', height: '180px' }}>
        <div className='card-body'>
            <h5 className='card-title'>
                <i className="fa fa-cutlery" aria-hidden="true"></i> {card.Brand}
                <span className='badge badge-secondary pull-right'>{card.rank}</span>
            </h5>
            <h6 className='card-subtitle mb-2 text-muted'>{card.Variety}</h6>
            <p className='card-text'>
                <span><i>Style:</i> {card.Style}</span>
                <span className='pull-right'><i>Country:</i> {card.Country}</span>
            </p>
            <p className='card-text'>
                <span><i>Stars:</i> {card.Stars}</span>
                <span className='pull-right'><i>Year:</i> {card.year}</span>
            </p>
        </div>
    </div>
);

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;

