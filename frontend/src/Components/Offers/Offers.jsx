import React from 'react';
import './Offers.css';
import data_product from '../Assets/exclusive_image.png';

const Offers = () => {

    const handleClick = () => {
        // TODO: Add navigation logic, dead button for now no alert. 
    };

    return (
        <div className='Offers'> {/* Changed from nav to div for semantics */}
            <div className="offers-left"> {/* Left side content container */}
                <h1>Exclusive</h1>
                <p>Special, limited time offer! Get it while you can!</p> {/* Changed from <a> tag to <p> tag */}
                <button onClick={handleClick} className="offer-button">Check now</button>
            </div>
            <div className="offers-right"> {/* Right side image container */}
                <img src={data_product} alt="Special offer" className="offer-image" />
            </div>
        </div>
    );
}

export default Offers;