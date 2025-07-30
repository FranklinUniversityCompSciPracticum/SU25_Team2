import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
  const [all_product, setAll_product] = useState([]);
  const [cartItems,setCartItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Fetch products from MongoDB when component mounts
  useEffect(() => {
    fetch('https://backend-ytk5.onrender.com/allproducts')
      .then((response) => response.json())
      .then((data) => {
        setAll_product(data);
        // Initialize cart with fetched products
        let cart = {};
        for (let product of data) {
          cart[product.id] = 0;
        }
        setCartItems(cart);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Fetch cart data from backend for logged-in users
  const fetchCartData = () => {
    if (localStorage.getItem('auth-token')) {
      fetch('https://backend-ytk5.onrender.com/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      })
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error('Error fetching cart:', error));
    }
  };

  // Load cart data when component mounts if user is logged in
  useEffect(() => {
    // Only fetch cart data if we have products loaded and user is logged in
    if (all_product.length > 0 && localStorage.getItem('auth-token')) {
      fetchCartData();
    }
  }, [all_product]); // Dependency on all_product so it runs after products are loaded
 


  const addToCart = (itemId)=>{
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem("auth-token")) {
      fetch('https://backend-ytk5.onrender.com/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((resp) => resp.json())
      .then((data)=>console.log(data));
    } 


    setShowModal(true);
    setTimeout(() => {
    setShowModal(false);
  }, 2000); // Hide after 2 seconds
  }

   const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if (localStorage.getItem("auth-token")) {
      fetch('https://backend-ytk5.onrender.com/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((resp) => resp.json())
      .then((data)=>console.log(data));
    }
  }

  // remove all items regardless of quantity
  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    if (localStorage.getItem("auth-token")) {
      fetch('https://backend-ytk5.onrender.com/removeallfromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((resp) => resp.json())
      .then((data)=>console.log(data));
    }
  };

  const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
}


const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems)
  {
    if (cartItems[item]>0)
    {
      totalItem += cartItems[item];
    }
  }
  return totalItem;
}


   const contextValue = {getTotalCartItems, getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart, removeAllFromCart, showModal, fetchCartData};

 
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;