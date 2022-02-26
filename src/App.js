import React, { useState } from "react";

import API from "./mockAPI";
import { ListedItems } from "./ListedItems";
import { CartDetails } from "./CartDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const FixedCart = ({ cartItems, onOpen }) => (
<div onClick={onOpen} style={{float:"right"}}>
Cimpress Cart
<div>
  <FontAwesomeIcon size="2x" icon={faShoppingCart} />
  <b>{cartItems || 0}</b>
</div>
</div>
);

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(API);
  const [cartOpen, isCartOpen] = useState(false);

  const addToCart = i => {
    setItems(state =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            { name: item.name, price: item.price, quantity: item.quantity }
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
  };

  const increaseQuantity = i => {
      setCart(state =>
        state.map((item, o) => {
          if (i === o && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    };

  const decreaseQuantity =  i => {
      setCart(prevCart =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    };

  const removeFromCart = i => {
    let chosenItem, index;
    index = 0;
    while (index < cart.length) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }
      index++;
    }
    setCart(state => state.filter(item => chosenItem !== item.name));
    setItems(state =>
      state.map(item => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <CartDetails
        open={cartOpen}
        onClose={() => isCartOpen(false)}
        cart={cart}
        increaseQ={increaseQuantity}
        decreaseQ={decreaseQuantity}
        cartCountTotal={cartCountTotal}
        removeFromCart={removeFromCart}
      />

      <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />

        <h1>Shopping Cart App</h1>
        <ListedItems
          items={items}
          addToCart={addToCart}
        />
    </>
  );
}

export default App;
