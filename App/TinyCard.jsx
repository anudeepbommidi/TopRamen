import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
    <div className='card' style={{ border: 'none', height: '90px' }}>
        <div className='card-body'>
            <h5 className='card-title'>
                <i className="fa fa-cutlery" aria-hidden="true"></i> {card.Brand}
                <span className='badge badge-secondary pull-right'>{card.rank}</span>
            </h5>
            <h6 className='card-subtitle mb-2 text-muted'>{card.Variety}</h6>
        </div>
    </div>
);

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;

