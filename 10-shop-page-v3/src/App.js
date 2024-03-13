import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { CartBadge } from "./components/CartBadge";
import { CartView } from "./components/CartView";
import CartContext from "./components/CartContext";

// reducer for state management
const cartReducer = (state, action) => {
  if (action.type === 'buy') {
    return [...state, action.item];
  }
  if (action.type === 'remove') {
    return state.filter(item => item.id !== action.id);
  }
  return state;

}


function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="container">
      <CartContext.Provider value={{
        cart,
        dispatch
      }}>
        <Navbar title="shop-IT" />
        <button onClick={e => setIsCartOpen(!isCartOpen)}>toggle</button>
        {isCartOpen ? <CartView /> : <ProductList />}
      </CartContext.Provider>
    </div>
  );
}

export default App;
