import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

// Tested 07/18, remove product with cross icon functions, deleted product3 from our demo from mongoDB. 

const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('https://backend-ytk5.onrender.com/allproducts')
        .then((res) => res.json())
        .then((data) => {setAllProducts(data)});
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const removeProduct = async (id, productName) => {
        // Show confirmation dialog
        const isConfirmed = window.confirm(
            `Are you sure you want to delete "${productName}" permanently from your inventory?\n\nThis action cannot be undone.`
        );       
        if (!isConfirmed) {
            return; // User cancelled removing product, don't delete
        }
        try {
            const response = await fetch('https://backend-ytk5.onrender.com/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: id})
            });
            
            if (response.ok) {
                fetchInfo(); // Refresh the product list
                alert(`"${productName}" has been successfully removed from your inventory.`);
            } else {
                alert('Failed to remove product. Please try again.');
            }
        } catch (error) {
            console.error('Error removing product:', error);
            alert('An error occurred while removing the product. Please try again.');
        }
    }
        
  return (
    <div className='list-product'>
        <h1>Current Inventory</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            {allproducts.map((product, index) => {
                return (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img className="listproduct-product-icon" src={product.image} alt={product.name} />
                        <p className="listproduct-product-title">{product.name}</p>
                        <p className="listproduct-old-price">${product.old_price}</p>
                        <p className="listproduct-new-price">${product.new_price}</p>
                        <span className={`listproduct-category ${product.category.toLowerCase()}`}>{product.category}</span>
                        <img 
                            className='listproduct-remove-icon' 
                            onClick={() => removeProduct(product.id, product.name)} 
                            src={cross_icon} 
                            alt="Remove product" 
                            title="Remove product"
                        />
                    </div>
                );            
            })}
        </div>
    </div>
  );
}

export default ListProduct