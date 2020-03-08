import React from 'react';
import PropTypes from 'prop-types';

const DetailsCard = ({ card }) => (
    <div className='media'>
        <i className='fa fa-cutlery' style={{ fontSize: '3em' }} aria-hidden='true'></i>
        <div className='media-body' style={{ marginLeft: '10px' }}>
            <h3 className='mt-0'>{card.Brand}</h3>
            <h5 className='mt-0'>{card.Variety}</h5>
            <p className='card-text'>
                <span><i>Style:</i> {card.Style}</span>
            </p>
            <p className='card-text'>
                <span><i>Country:</i> {card.Country}</span>
            </p>
            <p className='card-text'>
                <span><i>Stars:</i> {card.Stars}</span>
            </p>
            <p className='card-text'>
                <span><i>Year:</i> {card.year}</span>
            </p>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                 Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                 Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
                 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </div>);

DetailsCard.propTypes = {
    card: PropTypes.object.isRequired,
};

export default DetailsCard;

