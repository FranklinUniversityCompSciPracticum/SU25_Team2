import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { currency } from "../../App";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    removeAllFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

const handleCheckout = async () => {
  try {
    const cartItemsToSend = all_product
      .filter((e) => cartItems[e.id] > 0)
      .map((e) => ({
        name: e.name,
        image: e.image,
        description: e.description || "No description",
        unit_amount: e.new_price * 100, // in cents
        quantity: cartItems[e.id]
      }));

    const response = await fetch("https://backend-ytk5.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItemsToSend }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Failed to create checkout session.");
    }
  } catch (err) {
    console.error("Checkout error:", err);
  }
};

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p className="cartitems-product-title">{e.name}</p>
                <p>{currency}{e.new_price}</p>
                <div className="cartitems-quantity-controls">
                  <button onClick={() => removeFromCart(e.id)} className="quantity-btn">-</button>
                  <span className="cartitems-quantity-display">{cartItems[e.id]}</span>
                  <button onClick={() => addToCart(e.id)} className="quantity-btn">+</button>
                </div>
                <p>{currency}{e.new_price * cartItems[e.id]}</p>
                <img onClick={() => removeAllFromCart(e.id)} className="cartitems-remove-icon" src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
