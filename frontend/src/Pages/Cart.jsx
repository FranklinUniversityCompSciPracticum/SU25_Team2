import React from 'react';
import CartItems from '../Components/CartItems/CartItems';

// Corrected, exporting "Cart" instead of "Login".
// CartItems displays the items in the shopping cart.
const Cart = () => {
  return (
    <div>
      <CartItems/>
    </div>
  );
}
export default Cart;