import React, { useState, createContext, useEffect } from "react";
import all_product from "../Components/Assets/all_products"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let product of all_product) {
    cart[product.id] = 0;
  }
  return cart;
};


const ShopContextProvider = (props)=>{

  const [cartItems,setCartItems] = useState(getDefaultCart());
  const [showModal, setShowModal] = useState(false);
 


  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    setShowModal(true);
    setTimeout(() => {
    setShowModal(false);
  }, 2000); // Hide after 2 seconds
  }

   const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

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


   const contextValue = {getTotalCartItems, getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart, showModal};

 
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