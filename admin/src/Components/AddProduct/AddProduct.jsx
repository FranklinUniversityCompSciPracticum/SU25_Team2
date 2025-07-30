import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    
    const [image, setImage] = useState(false);
    
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
        description: ""
    });

    // image file selection and stores it in state
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    // THis handles changes to text/select inputs and updates the product details state
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }

    // Uploading the image and then adding the product
    const addProduct = async () => {
        console.log(productDetails);
        
        // Validate and parse prices
        const newPrice = parseFloat(productDetails.new_price);
        const oldPrice = parseFloat(productDetails.old_price);
        
        // Validation
        if (isNaN(newPrice) || newPrice <= 0) {
            alert("Please enter a valid New Price (e.g., 25.99)");
            return;
        }
        
        if (isNaN(oldPrice) || oldPrice <= 0) {
            alert("Please enter a valid Old Price (e.g., 29.99)");
            return;
        }
        
        if (!productDetails.name.trim()) {
            alert("Please enter a product name");
            return;
        }
        
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        //Upload the image to the backend
        await fetch('https://backend-ytk5.onrender.com/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData = data});

        //If successful, add the product with the image URL
        if(responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            
            // Send all product details to backend with proper number conversion
            await fetch('https://backend-ytk5.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...product,
                    new_price: newPrice,  // Parsed number
                    old_price: oldPrice   // Parsed number
                }),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            });
        }
    }

    return (
        <div className='add-product'>
            <h1>Add New Product</h1>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Enter product title' />
            </div>
            {/* Product ID mandated by backend, updated index.js to auto-increment and removing from user view */}
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Old Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="number" step="0.01" min="0" name="old_price" placeholder='Enter price (e.g., 29.99)' />
                </div>
                <div className="addproduct-itemfield">
                    <p>New Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="number" step="0.01" min="0" name="new_price" placeholder='Enter price (e.g., 24.99)' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            {/* Product description input */}
            <div className="addproduct-itemfield">
                <p>Product Description</p>
                <textarea 
                    value={productDetails.description} 
                    onChange={changeHandler} 
                    name="description" 
                    placeholder='Enter product description'
                    rows="4"
                    className='addproduct-description-textarea'
                />
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="Upload" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
            </div>
            <button onClick={() => {addProduct()}} className='addproduct-button'>Add Product</button> 
        </div>
    )
}

export default AddProduct