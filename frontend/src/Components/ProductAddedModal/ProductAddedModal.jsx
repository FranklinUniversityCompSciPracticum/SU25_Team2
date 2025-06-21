import React from 'react';
import './ProductAddedModal.css';

const ProductAddedModal = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="product-added-modal">
      <div className="product-added-content">
        Product added to cart!
      </div>
    </div>
  );
};

export default ProductAddedModal;
