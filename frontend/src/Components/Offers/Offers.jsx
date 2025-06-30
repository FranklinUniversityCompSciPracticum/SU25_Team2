import React from 'react';
import './Offers.css';
import data_product from '../Assets/exclusive_image.png';

const Offers = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <nav className='Offers'>
            <div className="offer-content">
                <a>Special, limited time offer! Get it while you can!</a>
                <img src={data_product} alt="Special offer" className="offer-image" />
                <button onClick={handleClick} className="offer-button">Click Me</button>
            </div>
        </nav>
    );
}

export default Offers;