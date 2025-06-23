import React from 'react';
import './Offers.css';
import Item from '../Item/Item';
import data_product from '../Assets/data';
const offer = data_product[0];


const Offers = (props) => {
    const { product } = props;

    return (
        <nav className='Offers'>
            <ul>
                <li>Special, limited time offer! Get it while you can!</li>
                <Item
              id={offer.id}
              name={offer.name}
              image={offer.image}
              new_price={offer.new_price}
              old_price={offer.old_price}
            />
          
            </ul>
        </nav>
    );
}

export default Offers;
