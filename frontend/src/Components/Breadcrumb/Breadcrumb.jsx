import React from 'react';
import './Breadcrumb.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumb = (props) => {
    const { product } = props;

    return (
        <nav className='breadcrumb'>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/shop">SHOP</a></li>
                <li><a href={`/${product.category.toLowerCase()}`}>{product.category.toUpperCase()}</a></li>
                <li><span className="current">{product.name}</span></li>
            </ul>
        </nav>
    );
}

export default Breadcrumb;
