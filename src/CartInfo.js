import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const CartButtons = ({ increaseQ, decreaseQ, removeFromCart }) => (
  <div>
    <Button onClick={increaseQ}>+</Button>
    <Button onClick={decreaseQ}>-</Button>
    <RemoveButton onClick={removeFromCart}>Remove</RemoveButton>
  </div>
);
const RemoveButton = styled(Button)`
  padding: 5px 10px;
`;

const numberFormat = val =>
  Number.isInteger(val) ? val : val.toFixed(2);

export const CartInfo = ({ cart, increaseQ, decreaseQ, removeFromCart }) => (
  <>
    cart.map Next!! I'm excited!!
    {cart.map((item, i) => (
      <DetailColumn key={item.name}>
          {item.name} | {item.quantity} x ${item.price} -> {" "}
          ${numberFormat(item.price * item.quantity)}

        <CartButtons
          increaseQ={() => increaseQ(i)}
          decreaseQ={() => decreaseQ(i)}
          removeFromCart={() => removeFromCart(i)}
        />
      </DetailColumn>
    ))}
    <CheckoutButton>Checkout</CheckoutButton>
  </>
);
const DetailColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 5px 0;
  width: 95%;
  border-bottom: 1px solid black;
`;

const CheckoutButton = styled(Button).attrs(() => ({
  backgroundColor: "darkblue"
}))`
  margin-top: 15px;
  margin-bottom: 15px;
`;
