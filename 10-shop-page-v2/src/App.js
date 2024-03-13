import { useState } from "react";
import Navbar from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { CartBadge } from "./components/CartBadge";
import { CartView } from "./components/CartView";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  return (
    <div className="container">
      <Navbar title="shop-IT" />
      <CartBadge cart={cart} />
      <CartView cart={cart} />
      <ProductList onBuy={item => addToCart(item)} />
    </div>
  );
}

export default App;
