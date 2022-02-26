import React from "react";
import styled from "styled-components";
import { CartTotals } from "./CartTotals";
import { CartInfo } from "./CartInfo";
import { Button } from "./Button";
 
export const CartDetails = ({
  cart,
  increaseQ,
  decreaseQ,
  cartCountTotal,
  removeFromCart,
  open,
  onClose
}) => {
  return (
    <OpenWrapper open={open}>
      <Button onClick={onClose}>X</Button>
      <Wrapper>
        {!cart.length && <>Cart is empty</>}
        {!!cart.length && (
          <>
            <CartTotals cart={cart} cartCountTotal={cartCountTotal} />
            <CartInfo
              cart={cart}
              increaseQ={increaseQ}
              decreaseQ={decreaseQ}
              removeFromCart={removeFromCart}
            />
          </>
        )}
      </Wrapper>
    </OpenWrapper>
  );
};
const OpenWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 134;
  background-color: rgb(777);
  width: 320px;
  transform: translateX(${({ open }) => (open ? "0px" : "320px")});
  transition: transform 0.5s;
  max-height: 99%;
  min-height: 75px;
  overflow-y: auto;
  border-radius: 0 0 0 20px;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
