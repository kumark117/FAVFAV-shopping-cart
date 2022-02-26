import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const ListedItems = ({
  items,
  increaseCount,
  decreaseCount,
  addToCart
}) => (
  <Wrapper>
    {items.map((item, i) => (
      <Column key={item.name}>
        <h4>{item.name} {" "}
        ${item.price}
        </h4>
        <IMG src={item.src} alt={item.name} />
        {!item.inCart && (
          <Button onClick={() => addToCart(i)}>Add to Cart</Button>
        )}
        {item.inCart && <>Added!</>}
      </Column>
    ))}
</Wrapper>
);

const Column = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0.5px solid #999999;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 12px 20px;
  border-radius: 10px;
  margin: 8px;
  background-color: rgb(777);
`;

const IMG = styled.img`
  padding: 10px;
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;