import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumb = (props) => {
    const { product } = props;

    return (
        <nav className='breadcrumb'>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">SHOP</Link></li>
                <li><Link to={`/${product.category.toLowerCase()}`}>{product.category.toUpperCase()}</Link></li>
                <li><span className="current">{product.name}</span></li>
            </ul>
        </nav>
    );
}

export default Breadcrumb;
