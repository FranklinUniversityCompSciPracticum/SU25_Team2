import React from 'react';
import './Popular.css';
import Item from '../Item/Item';
import data_product from '../Assets/data';

/* This component displays a list of popular
items in from the data.js file. Will update to fetch data from the backend later. */

const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>Popular in Men</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => {
            return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
            );
        })}
        </div>
    </div>
  );
}
export default Popular;
