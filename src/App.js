import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const existingItem = cartItems.find((cart) => cart.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...existingItem, qty: existingItem.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header numberCart={cartItems.length} />
      <div className="row">
        <Main onAdd={onAddToCart} products={products} />
        <Basket
          cartItems={cartItems}
          onAdd={onAddToCart}
          onRemove={onRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default App;
