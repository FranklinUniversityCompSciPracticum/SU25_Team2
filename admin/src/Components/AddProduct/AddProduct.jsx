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
        old_price: ""
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
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        //Upload the image to the backend
        await fetch('http://localhost:4000/upload', {
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
            
            // Send all product details to backend
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
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
            {/* Product ID mandated by backend, we can use a unique identifier generator in backend if time allows */}
            <div className={productDetails.id ? "addproduct-itemfield" : "addproduct-itemfield error"}>
                <p>Product ID</p>
                <input value={productDetails.id} onChange={changeHandler} type="text" name='id' placeholder='Enter product ID' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Old Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Enter a value no characters' />
                </div>
                <div className="addproduct-itemfield">
                    <p>New Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Enter a value no characters' />
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