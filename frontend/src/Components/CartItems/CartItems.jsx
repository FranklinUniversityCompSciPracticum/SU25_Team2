import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { currency } from "../../App";

/**
 * CartItems Component - Displays the shopping cart items with quantity controls and removal options.
 * Used in the @Cart page to manage cart contents.
 * Features:
 * - Product display with image, name, price, and quantity
 * - Increment/decrement quantity controls (+/- buttons)
 * - Remove all quantities of itme in cart (cross icon) or increase/decrease quantity (+/- button)
 * 
 * TODO: Implement checkout functionality with payment integration
 */

const CartItems = () => {
  const {all_product} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount,addToCart,removeAllFromCart} = useContext(ShopContext);

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
      {all_product.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p className="cartitems-product-title">{e.name}</p>
                      <p>{currency}{e.new_price}</p>
                      <div className="cartitems-quantity-controls">
                        <button onClick={() => removeFromCart(e.id)} className="quantity-btn">-</button>
                        <span className="cartitems-quantity-display">{cartItems[e.id]}</span>
                        <button onClick={() => addToCart(e.id)} className="quantity-btn">+</button>
                      </div>
                      <p>{currency}{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=> removeAllFromCart(e.id)} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
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
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
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