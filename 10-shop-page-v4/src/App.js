import React, { useReducer } from "react";
import CartContext from "./components/CartContext";

import { Navbar } from "./components/Navbar";
import { CartView } from "./components/CartView";
import { ProductList } from "./components/ProductList";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

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
  return (
    <div className="container">
      <CartContext.Provider value={{
        cart,
        dispatch
      }}>
        <BrowserRouter>
          <Navbar title="shop-IT" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
